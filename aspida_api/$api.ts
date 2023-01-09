import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './comments'
import type { Methods as Methods1 } from './comments/_id'
import type { Methods as Methods2 } from './tags'
import type { Methods as Methods3 } from './tags/_id'
import type { Methods as Methods4 } from './todos'
import type { Methods as Methods5 } from './todos/_id'
import type { Methods as Methods6 } from './todos_comments'
import type { Methods as Methods7 } from './todos_comments/_id'
import type { Methods as Methods8 } from './todos_tags'
import type { Methods as Methods9 } from './todos_tags/_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3011/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/comments'
  const PATH1 = '/tags'
  const PATH2 = '/todos'
  const PATH3 = '/todos_comments'
  const PATH4 = '/todos_tags'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    comments: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * 指定したIDを持つコメントを取得する。
           * @returns Successful operation
           */
          get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したIDを持つコメントを取得する。
           * @returns Successful operation
           */
          $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したIDを持つコメントの削除を行う。
           * @returns Successful operation
           */
          delete: (option: { query: Methods1['delete']['query'], headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * 指定したIDを持つコメントの削除を行う。
           * @returns Successful operation
           */
          $delete: (option: { query: Methods1['delete']['query'], headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つコメントを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つコメントを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods1['delete']['query'] } | { method: 'put'; query: Methods1['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのコメントを取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * 登録されているすべてのコメントを取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * コメントの登録を行う。
       * @returns Successful operation
       */
      post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * コメントの登録を行う。
       * @returns Successful operation
       */
      $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      /**
       * コメントの全件削除を行う。
       * @returns Successful operation
       */
      delete: (option: { body: Methods0['delete']['reqBody'], headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
      /**
       * コメントの全件削除を行う。
       * @returns Successful operation
       */
      $delete: (option: { body: Methods0['delete']['reqBody'], headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    tags: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * あるIDに登録されたタグを取得する。
           * @returns Successful operation
           */
          get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * あるIDに登録されたタグを取得する。
           * @returns Successful operation
           */
          $get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * あるIDを持つタグの削除を行う。
           * @returns Successful operation
           */
          delete: (option: { query: Methods3['delete']['query'], headers?: Methods3['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * あるIDを持つタグの削除を行う。
           * @returns Successful operation
           */
          $delete: (option: { query: Methods3['delete']['query'], headers?: Methods3['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つタグを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods3['put']['reqBody'], query: Methods3['put']['query'], headers?: Methods3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つタグを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods3['put']['reqBody'], query: Methods3['put']['query'], headers?: Methods3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods3['delete']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * タグを全件取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * タグを全件取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * タグの登録を行う。
       * @returns Successful operation
       */
      post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * タグの登録を行う。
       * @returns Successful operation
       */
      $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      /**
       * タグの複数削除を行う。
       * @returns Successful operation
       */
      delete: (option: { body: Methods2['delete']['reqBody'], headers?: Methods2['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, PATH1, DELETE, option).json(),
      /**
       * タグの複数削除を行う。
       * @returns Successful operation
       */
      $delete: (option: { body: Methods2['delete']['reqBody'], headers?: Methods2['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, PATH1, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    todos: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * 指定したIDを持つTodoを取得する。
           * @returns Successful operation
           */
          get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したIDを持つTodoを取得する。
           * @returns Successful operation
           */
          $get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したIDを持つTodoの削除を行う。
           * @returns Successful operation
           */
          delete: (option: { query: Methods5['delete']['query'], headers?: Methods5['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * 指定したIDを持つTodoの削除を行う。
           * @returns Successful operation
           */
          $delete: (option: { query: Methods5['delete']['query'], headers?: Methods5['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つTodoを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods5['put']['reqBody'], query: Methods5['put']['query'], headers?: Methods5['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つTodoを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods5['put']['reqBody'], query: Methods5['put']['query'], headers?: Methods5['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods5['delete']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのTodoを取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 登録されているすべてのTodoを取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * Todoの登録を行う。
       * @returns Successful operation
       */
      post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * Todoの登録を行う。
       * @returns Successful operation
       */
      $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      /**
       * Todoの全件削除を行う。
       * @returns Successful operation
       */
      delete: (option: { body: Methods4['delete']['reqBody'], headers?: Methods4['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, PATH2, DELETE, option).json(),
      /**
       * Todoの全件削除を行う。
       * @returns Successful operation
       */
      $delete: (option: { body: Methods4['delete']['reqBody'], headers?: Methods4['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, PATH2, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    todos_comments: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * あるIDに登録されたTodos-コメントを取得する。
           * @returns Successful operation
           */
          get: (option?: { headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * あるIDに登録されたTodos-コメントを取得する。
           * @returns Successful operation
           */
          $get: (option?: { headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * あるIDを持つTodos-コメントの削除を行う。
           * @returns Successful operation
           */
          delete: (option: { query: Methods7['delete']['query'], headers?: Methods7['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['delete']['resBody'], BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * あるIDを持つTodos-コメントの削除を行う。
           * @returns Successful operation
           */
          $delete: (option: { query: Methods7['delete']['query'], headers?: Methods7['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['delete']['resBody'], BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つTodos-コメントを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods7['put']['reqBody'], query: Methods7['put']['query'], headers?: Methods7['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つTodos-コメントを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods7['put']['reqBody'], query: Methods7['put']['query'], headers?: Methods7['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods7['delete']['query'] } | { method: 'put'; query: Methods7['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのTodos-コメントを取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 登録されているすべてのTodos-コメントを取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * Todo-コメントの登録を行う。
       * @returns Successful operation
       */
      post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Todo-コメントの登録を行う。
       * @returns Successful operation
       */
      $post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      /**
       * Todo-コメントの複数削除を行う。
       * @returns Successful operation
       */
      delete: (option: { body: Methods6['delete']['reqBody'], headers?: Methods6['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['delete']['resBody'], BasicHeaders, Methods6['delete']['status']>(prefix, PATH3, DELETE, option).json(),
      /**
       * Todo-コメントの複数削除を行う。
       * @returns Successful operation
       */
      $delete: (option: { body: Methods6['delete']['reqBody'], headers?: Methods6['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['delete']['resBody'], BasicHeaders, Methods6['delete']['status']>(prefix, PATH3, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    todos_tags: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          /**
           * あるIDに登録されたTodos-タグを取得する。
           * @returns Successful operation
           */
          get: (option?: { headers?: Methods9['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * あるIDに登録されたTodos-タグを取得する。
           * @returns Successful operation
           */
          $get: (option?: { headers?: Methods9['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * あるIDを持つTodos-タグの削除を行う。
           * @returns Successful operation
           */
          delete: (option: { query: Methods9['delete']['query'], headers?: Methods9['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods9['delete']['resBody'], BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * あるIDを持つTodos-タグの削除を行う。
           * @returns Successful operation
           */
          $delete: (option: { query: Methods9['delete']['query'], headers?: Methods9['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods9['delete']['resBody'], BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つTodos-タグを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods9['put']['reqBody'], query: Methods9['put']['query'], headers?: Methods9['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つTodos-タグを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods9['put']['reqBody'], query: Methods9['put']['query'], headers?: Methods9['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods9['delete']['query'] } | { method: 'put'; query: Methods9['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのTodos-タグを取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * 登録されているすべてのTodos-タグを取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      /**
       * Todo-タグの登録を行う。
       * @returns Successful operation
       */
      post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * Todo-タグの登録を行う。
       * @returns Successful operation
       */
      $post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      /**
       * Todo-タグの複数削除を行う。
       * @returns Successful operation
       */
      delete: (option: { body: Methods8['delete']['reqBody'], headers?: Methods8['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods8['delete']['resBody'], BasicHeaders, Methods8['delete']['status']>(prefix, PATH4, DELETE, option).json(),
      /**
       * Todo-タグの複数削除を行う。
       * @returns Successful operation
       */
      $delete: (option: { body: Methods8['delete']['reqBody'], headers?: Methods8['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods8['delete']['resBody'], BasicHeaders, Methods8['delete']['status']>(prefix, PATH4, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
