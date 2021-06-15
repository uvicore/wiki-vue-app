import axios, { AxiosInstance } from 'axios';
import { ref, Ref, UnwrapRef } from 'vue';
import { ModelConfig } from './model';
import { Result, Results } from './results';


export class QueryBuilder<E> {
  entity: E
  config: ModelConfig
  api: AxiosInstance

  // Query builder
  includes: string[] = []

  public constructor(entity: any) {
    this.entity = entity;
    this.config = entity._config;
    this.api = axios.create({
      baseURL: this.config.url,
    });
  }

  public include(includes: string[]): this {
    this.includes = includes
    return this;
  }

  private buildUrlQuery(extraPath: string = ''): string {
    let url: string = this.config.path || '';
    url += extraPath

    if (this.includes) {
      url += '?include=' + this.includes.join(',')
    }
    return url;
  }

  public find(id: string|number): Ref<UnwrapRef<Result<E>>> {
    // Create empty results to send back immediately before axios call runs
    let result = ref<Result<E>>(new Result());

    // Build URL parameters from query builder
    const builderPath = this.buildUrlQuery('/' + id);
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

  public get(): Ref<UnwrapRef<Results<E>>> {
    // Create empty results to send back immediately before axios call runs
    let results = ref<Results<E>>(new Results());

    // Build URL parameters from query builder
    const builderPath = this.buildUrlQuery();
    console.log(builderPath);

    this.api.get(builderPath).then((res) => {
      setTimeout(() => { // Fake timer for loading screens
        results.value.loading = false
        results.value.count = res.data.length
        results.value.results= res.data
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


