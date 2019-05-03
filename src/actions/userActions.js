// @flow
import api from '../utils/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export function loginFail() {
    return {
        type: LOGIN_FAIL,
    };
}

export function loginRequest() {
    return {
        type: LOGIN_REQUEST,
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
        dispatch(loginRequest());

        payload = {user: payload}

        api.users.login(payload)
            .then((response) => dispatch(loginSuccess(response)))
            .catch(() => dispatch(loginFail()));
    };
}

export function registerFail() {
    return {
        type: REGISTER_FAIL
    };
}

export function registerRequest() {
    return {
        type: REGISTER_REQUEST
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
        dispatch(registerRequest());
        payload = {user: payload}

        api.users.register(payload)
            .then((response) => dispatch(registerSuccess(response)))
            .catch(() => dispatch(registerFail()));
    };
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}