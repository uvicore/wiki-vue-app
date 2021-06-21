import { Section } from '@/models/section';
import { Model, ModelConfig } from '@/uvicore/orm/model';


export class Space extends Model<Space>() {
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

  public constructor({id, slug, name, order, sections}: Space) {
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
