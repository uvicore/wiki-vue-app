import axios, { AxiosInstance } from 'axios';
import { ref, Ref, UnwrapRef, inject } from 'vue';
import { ModelConfig } from './model';
import { Results } from './results';


/**
 * Uvicore ORM style API client query builder
 * Similar look and feel (but not exact) to Uvicore's backend python orm.
 * Uvicore provides an "autoapi" with compled queryability.  This API client
 * helps you query Uvicore style APIs with chainable elegance and precision!
 */
export class QueryBuilder<E> {
  entity: E
  params?: string
  entityConfig: ModelConfig
  config: any
  //api: AxiosInstance

  // Query builder properties
  private _extraPath: string = ''
  private _state: any|null = null
  private _includes: string[]|null = null
  private _where: any|null = null
  private _ref: Ref<UnwrapRef<Results<E>>>|null = null

  public constructor(entity: E|any, config?: any) {
    // Entity is our actual Model class that inherits base Model and calls this .query()
    console.log('ENTITY: ', entity)
    this.entity = entity;
    this.entityConfig = entity._config;
    this.config = config

    //this.config = inject('config');
    // const api_url = this.config.app.apis[this.entityConfig.connection].url;
    // console.log('MODEL API URL', api_url);

    // this.api = axios.create({
    //   // Base API url is from this models connection string name
    //   baseURL: 'https://wiki-api-local.triglobal.io/api'
    // });
  }

  /**
   * Return results into a store.  Requires store have a .set() action like so:
     set(state: Ref<UnwrapRef<Results<Space>>>) {
      this.loading = state.value.loading
      this.error = state.value.error
      this.result = state.value.result
      this.results = state.value.results
     },
   * @param store
   * @returns QueryBuilder
   */
  public state(store: any) {
    this._state = store
    return this
  }

  /**
   * Return result into an existing vue reactive ref.  Useful if your compoment
   * needs to pre declare a ref and the query should return results back to it
   * @param ref Existing vue reactive ref
   * @returns QueryBuilder
   */
  public ref(ref: Ref<UnwrapRef<Results<E>>>): this {
    this._ref = ref
    return this;
  }

  /**
   * Include deeply nested children relation records through array of dotnotation strings
   * @param includes array of include strings
   * @returns QueryBuilder
   */
  public include(includes: string[]): this {
    this._includes = includes
    return this;
  }

  /**
   * Where AND query.  Chain multiple .where() for ANDs
   * @param field Model field
   * @param operator operator =, !=, >, <, >=, <=
   * @param value field value to where
   * @returns QueryBuilder
   */
  public where(field: string, operator: string, value: any): this {
    if (!this._where) this._where = {}
    this._where[field] = [operator, value]
    return this;
  }

  /**
   * Execute query of a SINGLE result (non-array), stored in Result.result (singular).
   * If passing one param .find(1) field is automatically set to PK and url is /pk.
   * If passing two params .find('name', 'matthew') we convert into a where on name=matthew.
   * If passing NO params, use the query builder wheres and assume a SINGLE TOP 1 result.
   * @param field Model field to find one of
   * @param value Field value
   * @returns Vue reactive reference of model Results class
   */
  public find(field?: string, value?: string|number): Ref<UnwrapRef<Results<E>>> {
    if (field && value) {
      // Add a where for this custom field and value
      this.where(field, '=', value)
    } else if (field) {
      // Just field, which means its the PK value, so use rest /pk URL instead of a where
      value = field
      field = undefined
      this._extraPath  = '/' + field
    }

    // Use the main .get() with single=true
    return this.get(undefined, true);
  }

  /**
   * Execute query of multiple results (array), stored in Result.results (plural)
   * If you have a custom endpoint that does not follow Uvicore autoapi standards then you can
   * skip the query builder chains and put your URL directly in this .get('/1?include=xyz') method.
   * If params, all query builder items passed in are IGNORED completely.
   * @param params Custom user defined params to bypass querybuilder with direct URL access
   * @param single If true, results should be a single Model instance, not an array of Model instances
   * @returns Vue reactive reference of model Results class
   */
  public get(params?: string, single: boolean = false): Ref<UnwrapRef<Results<E>>> {
    if (this._ref) {
      // Passing in an existing ref for us to modify
      var results = this._ref;

      // Ensure ref is empty before query runs or .push will keep appending
      results.value.reset();
    } else {
      // No outside ref specified, create a new ref for these results
      var results = ref<Results<E>>(new Results());
    }

    // Init blank results
    results.value.results = []

    // Build URL parameters from query builder
    const builderPath = this.buildUrlQuery(params);
    console.log(builderPath);

    // const config: any = inject('config');
    // console.log('MODEL CONFIG:', config);
    let api_url = ''
    if (this.config) {
      console.log('API_URL from CONFIG');
      api_url = this.config.app.apis[this.entityConfig.connection].url;
    } else {
      api_url = 'https://wiki-api-local.triglobal.io/api'
    }

    console.log('MODEL API URL', api_url);

    const api = axios.create({
      // Base API url is from this models connection string name
      //baseURL: 'https://wiki-api-local.triglobal.io/api'
      baseURL: api_url
    });

    // Query Uvicore API
    api.get(builderPath).then((res) => {
      setTimeout(() => { // Fake timer for loading screen prototyping
        results.value.loading = false

        // If custom params on .get() or comming from .find() we could be returning
        // a single non-array value.  Convert it to array for consistent handling.
        if (!Array.isArray(res.data)) res.data = [res.data]

        results.value.count = res.data.length
        if (res.data.length > 0) {

          // Map result into Model entity (actual instance of Model class)
          const keys = Object.keys(res.data[0]);
          for (let data of res.data) {

            // @ts-ignore
            const record = new this.entity(data);

            if (single) {
              // Single non-array from .find or custom params
              results.value.result = record
            } else {
              results.value.results.push(record)
            }
          }
        }

        // If .store() save to store state
        if (this._state) this._state.set(results);

      }, 0);
    }).catch((error) => {
      results.value.error = error
      results.value.loading = false
      console.error(error);
    });

    // Return empty Ref immediately, ref will update with api results are returned
    return results;
  }

  /**
   * Convert class query builder into Uvicore compatible URL
   * @param params optional params passed in by user on .get() for manual URL query
   * @returns URL string
   */
     private buildUrlQuery(params?: string): string {
      let url: string = ''

      // If we passed in custom params from .query(params) use those instead.
      if (params) return this.entityConfig.path + this._extraPath + params;

      // Includes
      if (this._includes) {
        url += '&include=' + this._includes.join(',')
      }

      // Wheres AND
      if (this._where) {
        url += '&where=' + JSON.stringify(this._where)
      }

      // Set first char to ?
      url = url.replace(url.charAt(0), '?');

      // Prefix with proper paths
      url = this.entityConfig.path + this._extraPath + url;

      // Return url
      return url;
    }


}


