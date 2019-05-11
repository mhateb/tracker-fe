// @flow
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_NOT_FOUND = 'USER_NOT_FOUND'

export function loginRequest(payload) {
    return {
        type: LOGIN_REQUEST,
        payload: payload
    };
}

export function registerRequest(payload) {
    return {
        type: REGISTER_REQUEST,
        payload: payload
    };
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}