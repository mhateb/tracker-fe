// @flow
import api from '../utils/api';

export const GET_PACKS_REQUEST = 'GET_PACKS_REQUEST';
export const GET_PACKS_SUCCESS = 'GET_PACKS_SUCCESS';
export const GET_PACKS_FAIL = 'GET_PACKS_FAIL';
export const ADD_NEW_PACK_REQUEST = 'ADD_NEW_PACK_REQUEST';
export const ADD_NEW_PACK_SUCCESS = 'ADD_NEW_PACK_SUCCESS';
export const ADD_NEW_PACK_FAIL = 'ADD_NEW_PACK_FAIL';
export const SET_PACK = 'SET_PACK';
export const GET_WORDS_REQUEST = 'GET_WORDS_REQUEST';
export const GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS';
export const GET_WORDS_FAIL = 'GET_WORDS_FAIL';
export const ADD_NEW_WORD_REQUEST = 'ADD_NEW_WORD_REQUEST';
export const ADD_NEW_WORD_SUCCESS = 'ADD_NEW_WORD_SUCCESS';
export const ADD_NEW_WORD_FAIL = 'ADD_NEW_WORD_FAIL';

export function getPacksRequest() {
    return {
        type: GET_PACKS_REQUEST
    };
}

export function addNewPackRequest(payload) {
    return {
        type: ADD_NEW_PACK_REQUEST,
        payload: payload
    };
}

export function setPack(payload) {
    return {
        type: SET_PACK,
        payload: payload
    }
}

export function getWordsRequest(payload) {
    return {
        type: GET_WORDS_REQUEST,
        payload: payload
    }
}

export function addNewWordRequest(payload) {
    return {
        type: ADD_NEW_WORD_REQUEST,
        payload: payload
    }
}
