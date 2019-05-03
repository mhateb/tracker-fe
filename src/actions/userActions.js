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
        payload: payload.user
    };
}

export function loginFetch(payload) {
    return (dispatch) => {
        dispatch(loginRequest(true));

        payload = {user: payload}

        api.users.login(payload)
            .then((response) => {
                dispatch(loginRequest(false));

                return response;
            })
            .then((response) => dispatch(loginSuccess(response)))
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
        payload: payload.user
    };
}

export function registerFetch(payload) {
    return (dispatch) => {
        dispatch(registerRequest(true));
        payload = {user: payload}

        api.users.register(payload)
            .then((response) => {
                dispatch(registerRequest(false));

                return response;
            })
            .then((response) => dispatch(registerSuccess(response)))
            .catch(() => dispatch(registerFail(true)));
    };
}