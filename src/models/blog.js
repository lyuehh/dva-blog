import { create, remove, update, query } from '../services/post'

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout))

export default {
  namespace: 'blog',
  state: {
    posts: [],
    loading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/blog') {
          dispatch({
            type: 'query'
          })
        }
      })
    }
  },

  effects: {
    *query({ payload }, { call, put }) {
      yield put({ type: 'loading' })
      yield call(delay, 500);
      const { data } = yield call(query)
      if (data) {
        yield put({
          type: 'querySucc',
          payload: data
        })
      }
    }
  },

  reducers: {
    loading(state) {
      return { ...state, loading: true }
    },
    query(state) {
      return state
    },
    addPost(state, action) {
      return { ...state, posts: state.posts.concat(action.payload) }
    },
    querySucc(state, action) {
      return { ...state, posts: action.payload, loading: false }
    }
  }
}
