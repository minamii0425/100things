/* eslint-disable */
/** APIキー */
export type XApiKey = string

/** One time Token */
export type Token = string

/** Todo ID */
export type TodoID = number

/** Todo ID(複数) */
export type TodoIDs = TodoID[]

/** やりたいこと */
export type TodoName = string

/** やりたいことを達成した日 */
export type CompleteDate = string

/** 場所 */
export type Location = string

/** ステータス */
export type Status = 'Undone' | 'Planning' | 'Done'

/** 一行説明 */
export type Description = string

/** Comment ID */
export type CommentID = number

/** Comment ID(複数) */
export type CommentIDs = CommentID[]

/** Todoへのコメント */
export type CommentText = string

/** コメントしたユーザー */
export type CommentAuthor = string

/** タグのID */
export type TagID = number

/** タグのID(複数) */
export type TagIDs = TagID[]

/** タグ */
export type TagName = string

/** Todos-コメントテーブルのID */
export type Todo_CommentID = number

/** Todos-コメントテーブルのID(複数) */
export type Todo_CommentIDs = Todo_CommentID[]

/** Todos-タグテーブルのID */
export type Todo_TagID = number

/** Todos-タグテーブルのID(複数) */
export type Todo_TagIDs = Todo_TagID[]

/** Todo情報 */
export type Todo = {
  TodoID?: TodoID | undefined
  TodoName?: TodoName | undefined
  CompleteDate?: CompleteDate | undefined
  Location?: Location | undefined
  Status?: Status | undefined
  Description?: Description | undefined
}

/** Todo情報(複数) */
export type Todos = Todo[]

/** コメント情報 */
export type Comment = {
  CommentID?: CommentID | undefined
  CommentText?: CommentText | undefined
  CommentAuthor?: CommentAuthor | undefined
}

/** コメント情報(複数) */
export type Comments = Comment[]

/** タグ */
export type Tag = {
  TagID?: TagID | undefined
  TagName?: TagName | undefined
}

/** タグ情報(複数) */
export type Tags = Tag[]

/** Todo-コメント */
export type Todo_Comment = {
  Todo_CommentID?: Todo_CommentID | undefined
  TodoID?: TodoID | undefined
  CommentID?: CommentID | undefined
}

/** Todo-コメント(複数) */
export type Todos_Comments = Todo_Comment[]

/** Todo-タグ */
export type Todo_Tag = {
  Todo_TagID?: Todo_TagID | undefined
  TodoID?: TodoID | undefined
  TagID?: TagID | undefined
}

/** Todo-タグ(複数) */
export type Todos_Tags = Todo_Tag[]

/** Post成功時のレスポンス。常にtrue */
export type PostResponseBody = {
  isSucceed?: boolean | undefined
}

export type ApiErrResponse = {
  statusCode?: number | undefined
  errCode?: string | undefined
  errMessage?: string | undefined
}
