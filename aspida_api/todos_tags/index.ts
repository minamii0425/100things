/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 登録されているすべてのTodos-タグを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Todos_Tags
  }

  /** Todo-タグの登録を行う。 */
  post: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
    reqBody: Types.Todo_Tag
  }

  /** Todo-タグの複数削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
    reqBody: Types.Todo_TagIDs
  }
}
