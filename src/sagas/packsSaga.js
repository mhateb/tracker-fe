import {put, call, all, takeLatest, takeEvery, select, take} from 'redux-saga/effects';

import {getPack} from './selectors';
import api from '../utils/api';

export default function* packsSaga() {
  yield all([
    takeLatest("GET_PACKS_REQUEST", fetchGetPacks),
    takeEvery("ADD_NEW_PACK_REQUEST", fetchAddNewPack),
    takeEvery("GET_WORDS_REQUEST", fetchGetWords),
    takeEvery("ADD_NEW_WORD_REQUEST", fetchAddNewWord),
    takeLatest("SET_PACK", setWordsToPack)
  ]);
}

function* setWordsToPack(action) {
    const pack = yield select(getPack, action.payload)
    if (!pack.words) {
        yield put({type: "GET_WORDS_REQUEST", payload: pack})
    } 
}

function* fetchGetPacks() {
    try {
        const response = yield call(api.packs.all, false, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});

        yield put({type: "GET_PACKS_SUCCESS", payload: response.packs})
        yield put({type: "GET_WORDS_REQUEST", payload: response.packs[0]})
        yield put({type: "SET_PACK", payload: response.packs[0].id})
    } catch (e) {
        yield put({type: "GET_PACKS_FAIL"});
    }
}

function* fetchAddNewPack(action) {
    const payload = { pack: action.payload }

    try {
        const response = yield call(api.packs.new, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});

        yield all([
            put({type: "ADD_NEW_PACK_SUCCESS", payload: response.pack}),
            put({type: "SET_PACK", payload: response.pack.id}),
        ])
    } catch (e) {
        yield put({type: "ADD_NEW_PACK_FAIL"})
    }
}

function* fetchGetWords(action) {
    const payload = { pack: action.payload }

    try {
        const response = yield call(api.words.all, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});

        yield put({type: "GET_WORDS_SUCCESS", payload: response.words})
    } catch(e) {
        yield put({type: "GET_WORDS_FAIL"})
    }
}

function* fetchAddNewWord(action) {
    const payload = { word: action.payload }

    try {
        const response = yield call(api.words.new, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        yield put({type: "ADD_NEW_WORD_SUCCESS", payload: response.word})
    } catch(e) {
        yield put({type: "ADD_NEW_WORD_FAIL"})
    }
}