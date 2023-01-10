/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 登録されているすべてのユーザー情報を取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Profiles
  }

  /** ユーザーの登録を行う。 */
  post: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
    reqBody: Types.Profile
  }

  /** プロファイルの複数削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.PostResponseBody
    reqBody: Types.ProfileIDs
  }
}
