import {put, call, all, takeLatest, takeEvery, select} from 'redux-saga/effects';

import {getPack, getSelectedPack, getAllPacks} from './selectors';
import api from '../utils/api';

export default function* packsSaga() {
  yield all([
    takeLatest("GET_PACKS_REQUEST", fetchGetPacks),
    takeEvery("ADD_NEW_PACK_REQUEST", fetchAddNewPack),
    takeEvery("GET_WORDS_REQUEST", fetchGetWords),
    takeEvery("ADD_NEW_WORD_REQUEST", fetchAddNewWord),
    takeLatest("SET_PACK", setWordsToPack),
    takeEvery("REMOVE_PACK_REQUEST", fetchRemovePack),
    takeEvery("UPDATE_PACK_REQUEST", fetchUpdatePack),
    takeEvery("REMOVE_WORD_REQUEST", fetchRemoveWord),
  ]);
}

function* setWordsToPack(action) {
    const pack = yield select(getPack, action.payload)
    if (pack && !pack.isSetWords) {
        yield put({type: "GET_WORDS_REQUEST", payload: pack})
    } 
}

function* fetchRemoveWord(action) {
    const id = action.payload
    const selectedPack = yield select(getSelectedPack)

    const payload = { word: { id: id, pack_id: selectedPack.id }}

    try {
        yield call(api.words.delete, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        yield put({type: "REMOVE_WORD_SUCCESS", payload: payload.word})
    } catch (e) {
        yield put({type: "REMOVE_WORD_FAIL"})
        
    }
}

function* fetchUpdatePack(action) {
    const payload = { pack: action.payload }

    try {
        yield call(api.packs.update, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
        yield put({type: "UPDATE_PACK_SUCCESS", payload: payload.pack})
    } catch(e) {
        yield put({type: "UPDATE_PACK_FAIL"})
    }
}

function* fetchRemovePack(action) {
    try {
        const payload = { pack: action.payload }
        yield call(api.packs.delete, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
        yield put({type: "REMOVE_PACK_SUCCESS", payload: action.payload})
        const allPacks = yield select(getAllPacks)
        if (allPacks.length > 0) {
            yield put({type: "SET_PACK", payload: allPacks[0].id})
        } else {
            yield put({type: "SET_PACK", payload: null})
        }
    } catch(e) {
        yield put({type: "REMOVE_PACK_FAIL"})
    }
}

function* fetchGetPacks() {
    try {
        const response = yield call(api.packs.all, false, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});

        yield put({type: "GET_PACKS_SUCCESS", payload: response.packs})

        if (response.packs.length > 0) {
            yield put({type: "SET_PACK", payload: response.packs[0].id})
        }
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
    const selectedPack = yield select(getSelectedPack)
    const payload = { word: { ...action.payload, pack_id: selectedPack.id } }

    try {
        const response = yield call(api.words.new, payload, false, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        yield put({type: "ADD_NEW_WORD_SUCCESS", payload: response.word})
    } catch(e) {
        yield put({type: "ADD_NEW_WORD_FAIL"})
    }
}