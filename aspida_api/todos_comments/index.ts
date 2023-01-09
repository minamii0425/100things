/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 登録されているすべてのTodos-コメントを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Todos_Comments
  }

  /** Todo-コメントの登録を行う。 */
  post: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
    reqBody: Types.Todo_Comment
  }

  /** Todo-コメントの複数削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
    reqBody: Types.Todo_CommentIDs
  }
}
