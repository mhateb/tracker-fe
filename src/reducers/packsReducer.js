// @flow
import { 
    GET_PACKS_REQUEST,
    GET_PACKS_SUCCESS,
    GET_PACKS_FAIL,
    ADD_NEW_PACK_REQUEST,
    ADD_NEW_PACK_SUCCESS,
    ADD_NEW_PACK_FAIL
  } from '../actions/packsActions'

const initialState = {
    selectedPack: null,
    items: [],
    loading: false,
    isAnyPacks: false,
    isSet: false,
    isFail: false
}

export function packsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PACKS_SUCCESS:
            return { 
                ...state,
                loading: false,
                isFail: false,
                isSet: true,
                items: action.payload,
                selectedPack: action.payload[0] || null,
                isAnyPacks: !!action.payload
            }

        case GET_PACKS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_PACKS_FAIL:
            return {
                ...state,
                loading: false,
                isFail: true
            }  
            
        case ADD_NEW_PACK_REQUEST:
            return {
                ...state,
                loading: true
            }    

        case ADD_NEW_PACK_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedPack: action.payload,
                isFail: false,
                items: [...state.items, action.payload]
            }    

        case ADD_NEW_PACK_FAIL:
            return {
                ...state,
                loading: false,
                isFail: true
            }    

        default:
          return state
      }
}
