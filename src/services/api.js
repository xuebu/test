import { post, get } from './httpClient'
export default {
    /** 登入 */

    login: ({ userId, password }) => {
      return post('/login', { userId, password })
    }
}

