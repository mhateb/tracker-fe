// @flow
import { 
    GET_PACKS_REQUEST,
    GET_PACKS_SUCCESS,
    GET_PACKS_FAIL,
    ADD_NEW_PACK_REQUEST,
    ADD_NEW_PACK_SUCCESS,
    ADD_NEW_PACK_FAIL,
    REMOVE_PACK_REQUEST,
    REMOVE_PACK_SUCCESS,
    REMOVE_PACK_FAIL,
    SET_PACK,
    GET_WORDS_REQUEST,
    GET_WORDS_SUCCESS,
    GET_WORDS_FAIL,
    ADD_NEW_WORD_REQUEST,
    ADD_NEW_WORD_SUCCESS,
    ADD_NEW_WORD_FAIL
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
                items: action.payload.map(item => { return {...item, words: [], isSetWords: false} }),
                selectedPack: {...action.payload[0], words: [], isSetWords: false} || {},
                isAnyPacks: action.payload.length > 0
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
            const payload = {...action.payload, words: []}

            return {
                ...state,
                loading: false,
                selectedPack: payload,
                isFail: false,
                items: [...state.items, payload],
                isAnyPacks: true
            }    

        case ADD_NEW_PACK_FAIL:
            return {
                ...state,
                loading: false,
                isFail: true
            }   

        case REMOVE_PACK_REQUEST:
            return {
                ...state,
                loading: true
            }   
            
        case REMOVE_PACK_SUCCESS: 
            const filtered = state.items.filter(item => item.id != action.payload.id)
            
            return {
                ...state,
                loading: false,
                isFail: false,
                items: filtered,
                isAnyPacks: filtered.length > 0,
            }
          
        case REMOVE_PACK_FAIL: {
            return {
                ...state,
                loading: false,
                isFail: true
            }
        }    
            
        case SET_PACK: 
            return {
                ...state,
                selectedPack: state.items.find(item => item.id == action.payload) || null
            }    

        case GET_WORDS_REQUEST:
            return {
                ...state,
                loading: true
            }
           
        case GET_WORDS_SUCCESS:
            return {
                ...state,
                loading: false,
                isFail: false,
                items: state.items.map(item => item.id == state.selectedPack.id 
                    ? {...item, words: action.payload, isSetWords: true}
                    : item
                ),
                selectedPack: {...state.selectedPack, words: action.payload, isSetWords: true}
            }   
            
        case GET_WORDS_FAIL: 
            return {
                ...state,
                loading: false,
                isFail: true
            }   
            
        case ADD_NEW_WORD_REQUEST:
            return {
                ...state,
                loading: true
            }    

        case ADD_NEW_WORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isFail: false,
                items: state.items.map(item => item.id == state.selectedPack.id 
                    ? {...item, words: [...item.words, action.payload]}
                    : item
                    ),
                selectedPack: {...state.selectedPack, words: [...state.selectedPack.words, action.payload]}   
            }    

        case ADD_NEW_WORD_FAIL:
            return {
                ...state,
                loading: false,
                isFail: true
            }
            
        default:
          return state
      }
}
