import {
    THEATER_REQUEST,
    THEATER_SUCCESS,
    THEATER_FAIL,
    THEATER_PUT_REQUEST,
    THEATER_PUT_SUCCESS,
    THEATER_PUT_FAIL,
    THEATER_POST_REQUEST,
    THEATER_POST_SUCCESS,
    THEATER_POST_FAIL,
} from "../actions/tatron";
import { takeLatest, call, put } from "redux-saga/effects";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(THEATER_REQUEST, handleTheater);
    yield takeLatest(THEATER_PUT_REQUEST, handleputTheater);
    yield takeLatest(THEATER_POST_REQUEST, handlepostTheater)
}


function* handleTheater(action) {
    try {
        const { data } = yield call(Api.getTheater, action.payload.data);
        yield put({
            type: THEATER_SUCCESS,
            payload: { data }
        })
    } catch (e) {
        yield put({
            type: THEATER_FAIL,
            message: e.message
        })
    }
}

function* handleputTheater(action) {
    try {
        const { data } = yield call(Api.getputTheater, action.payload.data);
        yield put({
            type: THEATER_PUT_SUCCESS,
            payload: { data }
        })
    } catch (e) {
        yield put({
            type: THEATER_PUT_FAIL,
            message: e.message
        })
    }
}

function* handlepostTheater(action) {
    try {
        const { data } = yield call(Api.getpostTheater, action.payload.data);
        yield put({
            type: THEATER_POST_SUCCESS,
            payload: { data }
        })
    } catch (e) {
        yield put({
            type: THEATER_POST_FAIL,
            message: e.message
        })
    }
}