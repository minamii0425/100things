/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** あるIDに登録されたタグを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Tag
  }

  /** あるIDを持つタグの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      TagID: Types.TagID
    }

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つタグを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      TagID: Types.TagID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Tag
  }
}
