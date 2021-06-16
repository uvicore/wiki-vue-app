import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Topic } from '@/models/topic';


export class Post extends Model<Post>() {
  id: number
  slug: string
  slug_full: string
  title: string
  body: string
  format_key: string
  //format?: Format
  topic_id: number
  topic: Topic|null
  view_count: number
  deleted: boolean
  hidden: boolean
  creator_id: number
  //creator?: User
  updator_id: number
  //updator?: User
  created_at: Date
  updated_at: Date
  indexed_at: Date|null

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
    path: '/posts',
  }

  /**
   * Helper for components to explode the current path into space, section, topic, post slugs
   * @param path router path
   * @returns
   */
  static explode_path(path: string): any {
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
    id, slug, slug_full, title, body, format_key, topic_id, topic,
    view_count, deleted, hidden, creator_id, updator_id,
    created_at, updated_at, indexed_at
  }: Post) {
    super();
    this.id = id
    this.slug = slug
    this.slug_full = slug
    this.title = title
    this.body = body
    this.format_key = format_key
    this.topic_id = topic_id
    this.topic = null
    this.view_count = view_count
    this.deleted = deleted
    this.hidden = hidden
    this.creator_id = creator_id
    this.updator_id = updator_id
    this.created_at = created_at
    this.updated_at = updated_at
    this.indexed_at = indexed_at

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
