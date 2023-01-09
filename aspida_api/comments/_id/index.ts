/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したIDを持つコメントを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Comment
  }

  /** 指定したIDを持つコメントの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      CommentID: Types.CommentID
    }

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つコメントを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      CommentID: Types.CommentID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Comment
  }
}
