import {fork, all} from 'redux-saga/effects';
import tatron from "./tatron";
import users from "./user";
import film from "./film";


export default function* watchers() {
    yield all([
        tatron,
        users,
        film
    ].map(fork))
}