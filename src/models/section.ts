import axios from 'axios';
import { Model, ModelConfig } from '@uvicore/vue-orm';
import { Space } from '@/models/space';
import { Topic } from '@/models/topic';
import { inject } from 'vue';


export class Section extends Model<Section>() {
  // API fields
  id: number
  slug: string
  name: string
  icon: string|null
  order: number
  space_id: number

  // Computed
  slug_full: string

  // Relations
  space: Space|null
  topics: Topic[]|null

  static _config: ModelConfig = {
    connection: 'wiki',
    path: '/sections',
  }

  public constructor({
    id, slug, name, icon, order, space_id,
    slug_full,
    space, topics
  }: Section) {
    super();
    this.id = id
    this.slug = slug
    this.name = name
    this.icon = icon
    this.order = order
    this.space_id = space_id

    this.slug_full = slug_full

    this.space = null
    this.topics = null

    // Convert relations into actual model class instances
    if (topics && topics.length > 0) {
      this.topics = []
      for (let topic of topics) {
        topic.slug_full = this.slug_full + topic.slug
        this.topics.push(new Topic(topic));
      }
    }

    if (space) this.space = new Space(space)
  }
}
