import {
    USERS_FAIL,
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_REMOVE_REQUEST,
    USERS_REMOVE_SUCCESS,
    USERS_REMOVE_FAIL
} from "../actions/user";
import {takeLatest, call, put} from "redux-saga/effects";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(USERS_REQUEST, handleUsers);
    yield takeLatest(USERS_REMOVE_REQUEST, handleremoveUsers);
}


function* handleUsers(action) {
    try {
        const {data} = yield call(Api.getUsers, action.payload.data);
        yield put({
            type: USERS_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        console.warn(e);
        yield put({
            type: USERS_FAIL,
            message: e
        })
    }
}

function* handleremoveUsers(action) {
    try {
        const {data} = yield call(Api.removeUser, action.payload.id);
        yield put({
            type: USERS_REMOVE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        console.warn(e);
        yield put({
            type: USERS_REMOVE_FAIL,
            message: e.message
        })
    }
}