import {
    FILMS_REQUEST,
    FILMS_SUCCESS,
    FILMS_FAIL,
    FILMS_GET_REQUEST,
    FILMS_GET_SUCCESS,
    FILMS_GET_FAIL,
    FILMS_PUT_REQUEST,
    FILMS_PUT_SUCCESS,
    FILMS_PUT_FAIL,
    FILMS_POST_REQUEST,
    FILMS_POST_SUCCESS,
    FILMS_POST_FAIL,
    FILMS_REMOVE_REQUEST,
    FILMS_REMOVE_SUCCESS,
    FILMS_REMOVE_FAIL
} from "../actions/film";
import {takeLatest, call, put} from "redux-saga/effects";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(FILMS_REQUEST, handleFilms);
    yield takeLatest(FILMS_GET_REQUEST, handlegetFilms);
    yield takeLatest(FILMS_PUT_REQUEST, handleputFilms);
    yield takeLatest(FILMS_POST_REQUEST, handlepostFilms);
    yield takeLatest(FILMS_REMOVE_REQUEST, handleremoveFilms);
}


function* handlegetFilms(action) {
    try {
        const {data} = yield call(Api.gettwoFilm, action.payload.data);
        yield put({
            type: FILMS_GET_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: FILMS_GET_FAIL,
            message: e.message
        })
    }
}

function* handleFilms(action) {
    try {
        const {data} = yield call(Api.getFilm, action.payload.theatreId);
        yield put({
            type: FILMS_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: FILMS_FAIL,
            message: e.message
        })
    }
}

function* handleputFilms(action) {
    try {
        const {data} = yield call(Api.getputFilm, action.payload.data);
        yield put({
            type: FILMS_PUT_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: FILMS_PUT_FAIL,
            message: e.message
        })
    }
}

function* handlepostFilms(action) {
    try {
        const {data} = yield call(Api.getpostFilm, action.payload.data);
        yield put({
            type: FILMS_POST_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: FILMS_POST_FAIL,
            message: e.message
        })
    }
}

function* handleremoveFilms(action) {
    try {
        const {data} = yield call(Api.removeFilm, action.payload.id);
        yield put({
            type: FILMS_REMOVE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        console.warn(e);
        yield put({
            type: FILMS_REMOVE_FAIL,
            message: e.message
        })
    }
}