import { Space } from '@/models/space';
import { Topic } from '@/models/topic';
import { reactive, UnwrapRef } from 'vue';
import { Model, ModelConfig, QueryBuilder, Results } from '@uvicore/vue-orm';

/**
 * Section Model
 */
class SectionModel extends Model {
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
  }: SectionModel) {
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


/**
 * Space model statics (because Generics do not work on static properties)
 */
 export class Section extends SectionModel {
  public static query(): QueryBuilder<SectionModel> {
    return new QueryBuilder<SectionModel>(SectionModel);
  }

  public static newRef(): UnwrapRef<Results<SectionModel>> {
    return reactive<Results<SectionModel>>(new Results());
  }
}
