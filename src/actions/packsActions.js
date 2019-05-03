// @flow
import api from '../utils/api';

export const GET_PACKS_REQUEST = 'GET_PACKS_REQUEST';
export const GET_PACKS_SUCCESS = 'GET_PACKS_SUCCESS';
export const GET_PACKS_FAIL = 'GET_PACKS_FAIL';

export function getPacksFail(bool) {
    return {
        type: GET_PACKS_FAIL,
        isFail: bool
    };
}

export function getPacksRequest(bool) {
    return {
        type: GET_PACKS_REQUEST,
        isLoading: bool
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
            .then((response) => {
                dispatch(getPacksRequest());

                return response;
            })
            .then((response) => dispatch(getPacksSuccess(response)))
            .catch(() => dispatch(getPacksFail()));
    };
}