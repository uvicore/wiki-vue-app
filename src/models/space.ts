import { Section } from '@/models/section';
import { reactive, UnwrapRef } from 'vue';
import { Model, ModelConfig, QueryBuilder, Results } from '@uvicore/vue-orm';


/**
 * Space Model
 */
class SpaceModel extends Model {
  // API fields
  id: number
  slug: string
  name: string
  order: number

  // Relations
  sections: Section[]|null

  static _config: ModelConfig = {
    connection: 'wiki',
    path: '/spaces',
  }

  // All API returns are instances of this object!
  // This means we now have getters, setters and full methods on each row!
  get name2(): string {
    return this.name + '!'
  }

  public constructor({id, slug, name, order, sections}: SpaceModel) {
    // Constructor using functional destructuring so I can pass in an object as params
    // https://medium.com/@rileyhilliard/es6-destructuring-in-typescript-4c048a8e9e15
    super();
    this.id = id
    this.slug = slug
    this.name = name
    this.order = order
    this.sections = null

    // Convert relations into actual model class instances
    if (sections && sections.length > 0) {
      this.sections = []
      for (let section of sections) {
        section.slug_full = this.slug + section.slug
        this.sections.push(new Section(section))
      }
    }
  }

  // Overload example
  // public static async get(): Promise<Space[]> {
  //   return super.get();
  // }
}


/**
 * Space model statics (because Generics do not work on static properties)
 */
export class Space extends SpaceModel {
  public static query(): QueryBuilder<SpaceModel> {
    return new QueryBuilder<SpaceModel>(SpaceModel);
  }

  public static newRef(): UnwrapRef<Results<SpaceModel>> {
    return reactive<Results<SpaceModel>>(new Results());
  }
}


// function Q<E>(cls) {
//   class QQ {
//     public static query(): QueryBuilder<E> {
//       return new QueryBuilder<E>(cls);
//     }

//     // public static newRef(): UnwrapRef<Results<E>> {
//     //   return reactive<Results<E>>(new Results());
//     // }
//   }
//   return QQ
// }

// function SQ<Space>() {
//   return Q<Space>(Space)
// }

//export class Space extends Model<Space>() {


//let x = new Orm<Space>().query().get();

// x.result.delete()

// let y = new QueryBuilder<Space>(Space).include(['asdf']).get();
// console.log(y)
// for (let r of y.results) {
//   r.name = 'asdf'
//   r.save()
// }



// let a = Space.query().get();
// let xx = Space.newRef();



// let ref = SpaceX.newRef()
// a.result.save()

//let b = SQ().query().get();








// let c = SQ.query().get();
// console.log(c.result);

// let x = SQ.newRef();








