import { 
    SET_TRAINING_PACK,
    TRUE_ANSWER_REQUEST,
    TRUE_ANSWER_SUCCESS,
    TRUE_ANSWER_FAIL,
    FALSE_ANSWER_REQUEST,
    FALSE_ANSWER_SUCCESS,
    FALSE_ANSWER_FAIL
  } from '../actions/trainingActions'
  
  const initialState = {
    games: [
        {
            id: 0,
            title: 'Тест',
            description: 'Вам будет показано слово на английском, требуется выбрать верное из показанных вариантов',
            link: '/test'
        }
    ]
  }
  
  export function trainingReducer(state = initialState, action) {
    switch (action.type) {
      case SET_TRAINING_PACK:
        return { 
          ...state, 
          loading: true 
        }

      case TRUE_ANSWER_REQUEST:
        return {
          ...state
        }  
  
      case TRUE_ANSWER_SUCCESS:
        return {
          ...state
        }

      case TRUE_ANSWER_FAIL:
        return {
          ...state
        }  

      case FALSE_ANSWER_REQUEST:
        return {
          ...state
        }  
        
      case FALSE_ANSWER_SUCCESS:
        return {
          ...state
        }

      case FALSE_ANSWER_FAIL:
        return {
          ...state
        }  

      default:
        return state
    }
  }
  