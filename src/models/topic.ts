import { Section } from '@/models/section';
import { reactive, UnwrapRef } from 'vue';
import { Model, ModelConfig, QueryBuilder, Results } from '@uvicore/vue-orm';

/**
 * Topic Model
 */
export class TopicModel extends Model {
  // API Fields
  id: number
  slug: string
  name: string
  desc: string|null
  icon: string|null
  order: number
  section_id: number

  // Computed
  slug_full: string

  // Relations
  section: Section|null

  static _config: ModelConfig = {
    name: 'Topic',
    connection: 'wiki',
    path: '/topics',
  }

  public constructor({id, slug, slug_full, name, desc, icon, order, section_id, section}: TopicModel) {
    super();
    this.id = id
    this.slug = slug

    this.name = name
    this.desc = desc
    this.icon = icon
    this.order = order
    this.section_id = section_id

    this.slug_full = slug_full

    this.section = null

    // Convert relations into actual model class instances
    if (section) this.section = new Section(section)
  }
}


/**
 * Space model statics (because Generics do not work on static properties)
 */
 export class Topic extends TopicModel {
  public static query(): QueryBuilder<TopicModel> {
    return new QueryBuilder<TopicModel>(TopicModel);
  }

  public static newRef(): UnwrapRef<Results<TopicModel>> {
    return reactive<Results<TopicModel>>(new Results());
  }

  public static schema(): UnwrapRef<Results<any>> {
    return TopicModel.get_schema(TopicModel._config.connection, TopicModel._config.name);
  }
}
