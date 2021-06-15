import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Section } from '@/models/section';


export class Topic extends Model<Topic>() {

  id: number
  slug: string
  name: string
  desc?: string
  icon?: string
  order: number
  section_id: number
  section?: Section

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
    path: '/topics',
  }

  public constructor() {

    super();
    this.id = 0
    this.slug = 'asdf'
    this.name = 'asdf'
    this.desc = 'asdf'
    this.icon = 'asdf'
    this.order = 0
    this.section_id = 0
    this.section = undefined
  }

}
