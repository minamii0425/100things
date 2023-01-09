/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** あるIDに登録されたTodos-コメントを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Todo_Comment
  }

  /** あるIDを持つTodos-コメントの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      Todos_CommentID: Types.Todo_CommentID
    }

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つTodos-コメントを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      Todos_CommentID: Types.Todo_CommentID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Todo_Comment
  }
}
