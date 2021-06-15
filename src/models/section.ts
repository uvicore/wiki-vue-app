import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Space } from '@/models/space';
import { Topic } from '@/models/topic';


export class Section extends Model<Section>() {

  id: number
  slug: string
  name: string
  icon?: string
  order: number
  space_id: number
  space?: Space
  topics: Topic[]

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
    path: '/sections',
  }

  public constructor() {

    super();
    this.id = 0
    this.slug = 'asdf'
    this.name = 'asdf'
    this.icon = 'asdf'
    this.order = 0
    this.space_id = 0
    this.space = undefined
    this.topics = []
  }

}
