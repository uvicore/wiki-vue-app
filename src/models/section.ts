import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Space } from '@/models/space';
import { Topic } from '@/models/topic';


export class Section extends Model<Section>() {

  id: number
  slug: string
  slug_full: string
  name: string
  icon?: string
  order: number
  space_id: number
  space: Space
  topics: Topic[]

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
    path: '/sections',
  }

  public constructor({id, slug, slug_full, name, icon, order, space_id, space, topics}: Section) {
    super();
    this.id = id
    this.slug = slug
    this.slug_full = slug_full
    this.name = name
    this.icon = icon
    this.order = order
    this.space_id = space_id
    this.space = space
    this.topics = null!

    // Relations must be instances of the relations class
    if (topics && topics.length > 0) {
      this.topics = []
      for (let topic of topics) {
        topic.slug_full = this.slug_full + topic.slug
        this.topics.push(new Topic(topic));
      }
    }
  }

}
