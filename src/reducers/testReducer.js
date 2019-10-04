import { 
    TEST_INIT
  } from '../actions/testActions'
  
  const initialState = {
    words: []
  }
  
  export function testReducer(state = initialState, action) {
    switch (action.type) {
      case TEST_INIT:
        return { 
            ...state, 
            words: action.payload
        }
  
      default:
        return state
    }
  }
  