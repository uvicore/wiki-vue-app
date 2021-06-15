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

  public constructor() {

    super();
    this.id = 0
    this.slug = 'asdf'
    this.name = 'asdf'
    this.order = 0
    this.sections = []

  }

  // Overload example
  // public static async get(): Promise<Space[]> {
  //   return super.get();
  // }

}
