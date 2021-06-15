import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Section } from '@/models/section';

export class Space extends Model<Space>() {

  id: number
  slug: string
  name: string
  order: number
  sections: Section[]

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
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
    this.sections = sections
  }

  // Overload example
  // public static async get(): Promise<Space[]> {
  //   return super.get();
  // }

}
