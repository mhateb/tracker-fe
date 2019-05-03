// @flow
import { 
  LOGIN_REQUEST,
  LOGIN_SUCCESS, 
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGOUT
} from '../actions/userActions'

const initialState = {
  username: localStorage.getItem('username') || '',
  token: localStorage.getItem('token') || '',
  loading: false,
  isFail: false,
  isSet: !!localStorage.getItem('username') && !!localStorage.getItem('token')
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true }

    case LOGIN_SUCCESS:
      localStorage.setItem('username', action.payload.email)
      localStorage.setItem('token', action.payload.token)

      return { 
        ...state,
        loading: false,
        username: action.payload.username, 
        token: action.payload.token,
        isSet: true,
        isFail: false
      }

    case LOGIN_FAIL:
      return {
        ...state, 
        loading: false, 
        isFail: true,
        isSet: false 
      }

    case REGISTER_REQUEST:
    return { 
      ...state, 
      loading: true 
    }

    case REGISTER_SUCCESS:
      localStorage.setItem('username', action.payload.email)
      localStorage.setItem('token', action.payload.token)

      return { 
        ...state, 
        loading: false, 
        username: action.payload.email, 
        token: action.payload.token,
        isSet: true,
        isFail: false
      }

    case REGISTER_FAIL:
      return { 
        ...state, 
        loading: false, 
        isFail: true,
        isSet: false 
      }  

    case USER_LOGOUT:
      localStorage.clear()

      return {
        ...state,
        username: '',
        token: '',
        isSet: false
      }  

    default:
      return state
  }
}
