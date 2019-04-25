// @flow
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/userActions'

const initialState = {
  username: '',
  token: '',
  loading: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true }

    case LOGIN_SUCCESS:
      return { ...state, loading: false, username: action.payload.username, token: action.payload.token }

    case LOGIN_FAIL:
      return { ...state, loading: false }

    default:
      return state
  }
}
