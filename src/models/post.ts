import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Topic} from '@/models/topic';
import { QueryBuilder } from '@/uvicore/orm/builder';
import { Ref, ref, UnwrapRef, inject } from 'vue';
import { Results } from '@/uvicore/orm/results';


export class Post extends Model<Post>() {
  // API fields
  id: number
  slug: string
  title: string
  body: string
  format_key: string
  topic_id: number
  view_count: number
  deleted: boolean
  hidden: boolean
  creator_id: number
  updator_id: number
  created_at: Date
  updated_at: Date
  indexed_at: Date|null

  // Computed
  slug_full: string

  // Relations
  //format: Format|null
  topic: Topic|null
  //creator: User|null
  //updator: User|null

  static _config: ModelConfig = {
    connection: 'wiki',
    path: '/posts',
  }

  public get name() {
    return this.slug + this.id + this.body
  }

  /**
   * Helper for components to explode the current path into space, section, topic, post slugs
   * @param path router path
   * @returns
   */
   public static explode_path(path: string): any {
    if (!path) path = '////';
    const s = path.split('/');
    return {
      space: s[1] ? '/' + s[1] : null,
      section: s[2] ? '/' + s[2] : null,
      topic: s[3] ? '/' + s[3] : null,
      post: s[4] ? s[4] : null, // NO / before post slug
    }
  }

  public constructor({
    id, slug, title, body, format_key, topic_id,
    view_count, deleted, hidden, creator_id, updator_id,
    created_at, updated_at, indexed_at,
    slug_full,
    topic,
  }: Post) {
    super();
    this.id = id
    this.slug = slug
    this.title = title
    this.body = body
    this.format_key = format_key
    this.topic_id = topic_id
    this.view_count = view_count
    this.deleted = deleted
    this.hidden = hidden
    this.creator_id = creator_id
    this.updator_id = updator_id
    this.created_at = created_at
    this.updated_at = updated_at
    this.indexed_at = indexed_at

    this.slug_full = slug_full

    //this.format = null
    this.topic = null
    //this.creator = null
    //this.updator = null

    // Convert relations into actual model class instances
    if (topic) {
      this.topic = new Topic(topic)
      if (this.topic.section && this.topic.section.space) {
        // All relations are "included" to we can construct a full post slug
        this.slug_full = this.topic.section.space.slug + this.topic.section.slug + this.topic.slug + '/' + this.slug
      }
    }
  }
}

// export const usePostModel = () => {
//   class PostFactory extends ModelFactory<PostModel>(PostModel) {
//     // public query(): QueryBuilder<PostModel> {
//     //   return new QueryBuilder<PostModel>(PostModel, this.config);
//     // }

//     /**
//      * Helper for components to explode the current path into space, section, topic, post slugs
//      * @param path router path
//      * @returns
//      */
//     explode_path(path: string): any {
//       if (!path) path = '////';
//       const s = path.split('/');
//       return {
//         space: s[1] ? '/' + s[1] : null,
//         section: s[2] ? '/' + s[2] : null,
//         topic: s[3] ? '/' + s[3] : null,
//         post: s[4] ? s[4] : null, // NO / before post slug
//       }
//     }
//   }
//   return new PostFactory(inject('config'))
// }
