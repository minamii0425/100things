/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** あるIDを持つユーザーを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Profile
  }

  /** あるIDを持つユーザーの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      ProfileID: Types.ProfileID
    }

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つユーザーを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      ProfileID: Types.ProfileID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Profile
  }
}
