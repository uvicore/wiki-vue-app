import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Section } from '@/models/section';


export class Topic extends Model<Topic>() {

  id: number
  slug: string
  slug_full: string
  name: string
  desc?: string
  icon?: string
  order: number
  section_id: number
  section: Section

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
    path: '/topics',
  }

  public constructor({id, slug, slug_full, name, desc, icon, order, section_id, section}: Topic) {
    super();
    this.id = id
    this.slug = slug
    this.slug_full = slug_full
    this.name = name
    this.desc = desc
    this.icon = icon
    this.order = order
    this.section_id = section_id
    this.section = section
  }

}
