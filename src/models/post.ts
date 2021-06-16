import axios from 'axios';
import { Model, ModelConfig } from '@/uvicore/orm/model';
import { Topic } from '@/models/topic';


export class Post extends Model<Post>() {
  id: number
  slug: string
  title: string
  body: string
  format_key: string
  //format?: Format
  topic_id: number
  topic: Topic
  view_count: number
  deleted: boolean
  hidden: boolean
  creator_id: number
  //creator?: User
  updator_id: number
  //updator?: User
  created_at: Date
  updated_at: Date
  indexed_at: Date

  static _config: ModelConfig = {
    url: 'https://wiki-api-local.triglobal.io/api',
    path: '/posts',
  }

  public constructor({
    id, slug, title, body, format_key, topic_id, topic,
    view_count, deleted, hidden, creator_id, updator_id,
    created_at, updated_at, indexed_at
  }: Post) {
    super();
    this.id = id
    this.slug = slug
    this.title = title
    this.body = body
    this.format_key = format_key
    this.topic_id = topic_id
    this.topic = topic
    this.view_count = view_count
    this.deleted = deleted
    this.hidden = hidden
    this.creator_id = creator_id
    this.updator_id = updator_id
    this.created_at = created_at
    this.updated_at = updated_at
    this.indexed_at = indexed_at
  }

}
