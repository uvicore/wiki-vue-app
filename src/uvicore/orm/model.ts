import { vModelDynamic } from '@vue/runtime-dom';
import { QueryBuilder } from './builder';
import { inject } from 'vue';

/**
 * Model configuration interface
 */
export interface ModelConfig {
  connection: string,
  path: string,
}

/**
 * Uvicore ORM style API client Model base class
 * @returns Model
 */
export function Model<E>(model: any) {
  abstract class Model {
    config: any


    // Why a wrapper function?
    // Because typescript does not handle generics on statics
    // Until an instance of the class (or an instance of a subclass) is constructed, you don't actually have a type T
    // https://github.com/microsoft/TypeScript/issues/32211
    // https://stackoverflow.com/questions/52518125/workaround-for-accessing-class-type-arguments-in-static-method-in-typescript

    public static _config: ModelConfig = {
      connection: '',
      path: '',
    }

    public constructor(config: any) {
      this.config = config
    }

    // /* static methods */
    // public static list: E[] = [];


    // public static query2 = (): QueryBuilder<E> => {
    //   let config: any = inject('config')
    //   console.log('QB2 query()', config)
    //   return new QueryBuilder<E>(this);
    // }


    public query(): QueryBuilder<E> {
      return new QueryBuilder<E>(model, this.config);
    }

    // public static query(): QueryBuilder<E> {
    //   //console.log(config.app)
    //   return new QueryBuilder<E>(this);
    // }

    // public static async getX(): Promise<E[]> {
    //   return api.get('/spaces?include=sections.topics');
    //   //get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;

    //   //return api.get('/spaces?include=sections.topics')

    //   // api.get('/spaces?include=sections.topics').then((res) => {
    //   //   setTimeout(() => { // Fake timer for loading screens
    //   //     const spaces: Spaces = res && res.data;
    //   //     for (var space of spaces) {
    //   //       this.state.push(space);
    //   //     }
    //   //   }, 3000);
    //   // })
    //   // .catch((error) => {
    //   //   console.error(error);
    //   // });
    //   //return null!;
    // }

    // public static get2 = async(state: any): Promise<E[]> => {
    //   try {
    //     const req = await api.get('/spaces?include=sections.topics')
    //     state.value = req.data
    //     return null!;
    //     //return req.data;
    //   } catch (err) {
    //     console.log(err)
    //   } finally {
    //     console.log('queried');
    //   }
    //   return null!;
    // }

    // // Not work
    // // let spaces = Space.get5();
    // // public static get5 = async(): Promise<Ref<Space[]>> => {
    // //   const req = await api.get('/spaces?include=sections.topics')
    // //   return ref(req.data);
    // // }


    // // static
    // // insert, create, add save, delete, link, unlink etc...


    // public static get4 = async(): Promise<E[]> => {
    //   try {
    //     const req = await api.get('/spaces?include=sections.topics')
    //     return req.data;
    //   } catch (err) {
    //     console.log(err)
    //   } finally {
    //     console.log('queried');
    //   }
    //   return null!;
    // }


    // public static async get6(): Promise<E[]> {
    //   try {
    //     const req = await api.get('/spaces?include=sections.topics')
    //     return req.data;
    //   } catch (err) {
    //     console.log(err)
    //   } finally {
    //     console.log('queried');
    //   }
    //   return null!;
    // }

    // public static get3(): E[] {
    //   api.get('/spaces?include=sections.topics').then((res) => {
    //     setTimeout(() => { // Fake timer for loading screens
    //       return res.data;
    //     }, 3000);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    //   return null!;
    // }



    // /*  instance methods */
    // public save(): Promise<E> {
    //   return null!
    // }

    public save(): string {
      console.log("MODEL SAVE() HERE");
      return "Save() here!"
    }
  }
  return Model;
}
