/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** あるIDに登録されたTodos-タグを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Todo_Tag
  }

  /** あるIDを持つTodos-タグの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      Todo_TagID: Types.Todo_TagID
    }

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つTodos-タグを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      Todo_TagID: Types.Todo_TagID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Todo_Tag
  }
}
