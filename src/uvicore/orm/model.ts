import { vModelDynamic } from '@vue/runtime-dom';
import { QueryBuilder } from './builder';


export interface ModelConfig {
  url: string,
  path: string,
}

// export interface ModelInterface<E> {
//   _config: ModelConfig
//   query(params?: string): QueryBuilder<E>
// }


// Why a wrapper function?
// Because typescript does not handle generics on statics
// Until an instance of the class (or an instance of a subclass) is constructed, you don't actually have a type T
// https://github.com/microsoft/TypeScript/issues/32211
// https://stackoverflow.com/questions/52518125/workaround-for-accessing-class-type-arguments-in-static-method-in-typescript
export function Model<E>() {
  abstract class Model {

    public static _config: ModelConfig = {
      url: '',
      path: ''
    }

    // /* static methods */
    // public static list: E[] = [];

    public static query(): QueryBuilder<E> {
      // @ts-ignore
      return new QueryBuilder<E>(this);
    }

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
      return "Save() here!"
    }
  }
  return Model;
}
