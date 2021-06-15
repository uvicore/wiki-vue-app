import axios, { AxiosInstance } from 'axios';
import { ref, Ref, UnwrapRef } from 'vue';
import { ModelConfig } from './model';
import { Result, Results } from './results';


export class QueryBuilder<E> {

  entity: E
  params?: string
  config: ModelConfig
  api: AxiosInstance

  // Query builder
  _extraPath: string = ''
  _state?: any = null
  _includes?: string[]

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

  private buildUrlQuery(params?: string): string {
    let url: string = this.config.path || '';
    url += this._extraPath

    // If we passed in custom params from .query(params) use those instead.
    if (params) return url + params;

    // Full URL parameter builder
    if (this._includes) {
      url += '?include=' + this._includes.join(',')
    }
    return url;
  }

  public find(id: string|number): Ref<UnwrapRef<Result<E>>> {
    // Create empty results to send back immediately before axios call runs
    let result = ref<Result<E>>(new Result());

    // Build URL parameters from query builder
    this._extraPath = '/' + id
    const builderPath = this.buildUrlQuery();
    console.log(builderPath);

    // Query Uvicore API
    this.api.get(builderPath).then((res) => {
      result.value.loading = false
      result.value.result = res.data
    }).catch((error) => {
      result.value.error = error
      result.value.loading = false
      console.error(error);
    });

    // Return empty Ref immediately, ref will update with api results are returned
    return result
  }

  public get(params?: string): Ref<UnwrapRef<Results<E>>> {
    // Create empty results to send back immediately before axios call runs
    let results = ref<Results<E>>(new Results());

    // Build URL parameters from query builder
    const builderPath = this.buildUrlQuery(params);
    console.log(builderPath);

    this.api.get(builderPath).then((res) => {
      setTimeout(() => { // Fake timer for loading screens
        results.value.loading = false

        // If custom params on .get() could return just one result (not array)
        // Convert it to array in this case
        if (!Array.isArray(res.data)) res.data = [res.data]

        results.value.count = res.data.length
        if (res.data.length > 0) {
          console.log('hi')
          const keys = Object.keys(res.data[0]);
          for (let data of res.data) {
            // Map result into Model entity (instance)
            // @ts-ignore
            const entity = new this.entity(data);
            results.value.results.push(entity)
          }
        }

        // If .store() save to store state
        if (this._state) this._state.set(results);

      }, 1000);
    }).catch((error) => {
      results.value.error = error
      results.value.loading = false
      console.error(error);
    });

    // Return empty Ref immediately, ref will update with api results are returned
    return results;
  }


}


