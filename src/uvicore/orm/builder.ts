import axios, { AxiosInstance } from 'axios';
import { ref, Ref, UnwrapRef } from 'vue';
import { ModelConfig } from './model';
import { Result, Results } from './results';


export class QueryBuilder<E> {
  entity: E
  params?: string
  config: ModelConfig
  api: AxiosInstance

  // Query builder properties
  _extraPath: string = ''
  _state?: any
  _includes?: string[]
  _where?: any
  _ref?: Ref<UnwrapRef<Results<E>>>

  public constructor(entity: E) {
    this.entity = entity;
    // @ts-ignore
    this.config = entity._config;

    this.api = axios.create({
      baseURL: this.config.url,
    });
  }

  public state(store: any) {
    this._state = store
    return this
  }

  public include(includes: string[]): this {
    this._includes = includes
    return this;
  }

  public where(field: string, operator: string, value: any): this {
    if (!this._where) this._where = {}
    this._where[field] = [operator, value]
    return this;
  }

  public ref(ref: Ref<UnwrapRef<Results<E>>>): this {
    this._ref = ref
    return this;
  }

  private buildUrlQuery(params?: string): string {
    let url: string = ''

    // If we passed in custom params from .query(params) use those instead.
    if (params) return this.config.path + this._extraPath + params;

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
    url = this.config.path + this._extraPath + url;

    // Return url
    return url;
  }

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

    return this.get(undefined, true);


    // if (this._ref) {
    //   // Passing in an existing ref for us to modify
    //   var results = this._ref;

    //   // Ensure ref is empty before query runs or .push will keep appending
    //   results.value.reset();
    // } else {
    //   // No outside ref specified, create a new ref for these results
    //   var results = ref<Results<E>>(new Results());
    // }

    // // If id, we are finding one record by pk
    // if (id) {
    //   this._extraPath = '/' + id
    // }

    // // Build URL parameters from query builder
    // const builderPath = this.buildUrlQuery();
    // console.log(builderPath);

    // // Query Uvicore API
    // this.api.get(builderPath).then((res) => {
    //   results.value.loading = false
    //   let data = res.data;
    //   if (Array.isArray(data)) data = data[0]
    //   // @ts-ignore
    //   const record = new this.entity(data)
    //   results.value.result = record
    // }).catch((error) => {
    //   results.value.error = error
    //   results.value.loading = false
    //   console.error(error);
    // });

    // // Return empty Ref immediately, ref will update with api results are returned
    // return results
  }

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

    // Query Uvicore API
    this.api.get(builderPath).then((res) => {
      setTimeout(() => { // Fake timer for loading screens
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

      }, 500);
    }).catch((error) => {
      results.value.error = error
      results.value.loading = false
      console.error(error);
    });

    // Return empty Ref immediately, ref will update with api results are returned
    return results;
  }


}


