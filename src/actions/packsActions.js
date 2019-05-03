// @flow
import api from '../utils/api';

export const GET_PACKS_REQUEST = 'GET_PACKS_REQUEST';
export const GET_PACKS_SUCCESS = 'GET_PACKS_SUCCESS';
export const GET_PACKS_FAIL = 'GET_PACKS_FAIL';
export const ADD_NEW_PACK_REQUEST = 'ADD_NEW_PACK_REQUEST';
export const ADD_NEW_PACK_SUCCESS = 'ADD_NEW_PACK_SUCCESS';
export const ADD_NEW_PACK_FAIL = 'ADD_NEW_PACK_FAIL';

export function getPacksFail() {
    return {
        type: GET_PACKS_FAIL
    };
}

export function getPacksRequest() {
    return {
        type: GET_PACKS_REQUEST
    };
}

export function getPacksSuccess(payload) {
    return {
        type: GET_PACKS_SUCCESS,
        payload: payload.packs
    };
}

export function getPacksFetch() {
    return (dispatch) => {
        dispatch(getPacksRequest());

        api.packs.all(false, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => dispatch(getPacksSuccess(response)))
            .catch(() => dispatch(getPacksFail()));
    };
}

export function addNewPackFail() {
    return {
        type: ADD_NEW_PACK_FAIL
    };
}

export function addNewPackRequest() {
    return {
        type: ADD_NEW_PACK_REQUEST
    };
}

export function addNewPackSuccess(payload) {
    return {
        type: ADD_NEW_PACK_SUCCESS,
        payload: payload.pack
    };
}

export function addNewPackFetch(payload) {
    return (dispatch) => {
        dispatch(addNewPackRequest());

        payload = {pack: payload}

        api.packs.new(payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => dispatch(addNewPackSuccess(response)))
            .catch(() => dispatch(addNewPackFail()));
    };
}