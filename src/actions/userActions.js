// @flow
import api from '../utils/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export function loginFail(bool) {
    return {
        type: LOGIN_FAIL,
        isFail: bool
    };
}

export function loginRequest(bool) {
    return {
        type: LOGIN_REQUEST,
        isLoading: bool
    };
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
}

export function loginFetch(payload) {
    return (dispatch) => {
        dispatch(loginRequest(true));

        api.users.login(payload)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(loginRequest(false));

                return response;
            })
            .then((response) => response.json())
            .then((payload) => dispatch(loginSuccess(payload)))
            .catch(() => dispatch(loginFail(true)));
    };
}

export function registerFail(bool) {
    return {
        type: REGISTER_FAIL,
        isFail: bool
    };
}

export function registerRequest(bool) {
    return {
        type: REGISTER_REQUEST,
        isLoading: bool
    };
}

export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload
    };
}

export function registerFetch(payload) {
    return (dispatch) => {
        dispatch(registerRequest(true));

        api.users.register(payload)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(registerRequest(false));

                return response;
            })
            .then((response) => response.json())
            .then((payload) => dispatch(registerSuccess(payload)))
            .catch(() => dispatch(registerFail(true)));
    };
}