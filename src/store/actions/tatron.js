export const THEATER_REQUEST = 'THEATER_REQUEST';
export const THEATER_SUCCESS = 'THEATER_SUCCESS';
export const THEATER_FAIL = 'THEATER_FAIL';

export function theaterRequest() {
    return {
        type: THEATER_REQUEST, payload: {}
    }
}

export const THEATER_PUT_REQUEST = 'THEATER_PUT_REQUEST';
export const THEATER_PUT_SUCCESS = 'THEATER_PUT_SUCCESS';
export const THEATER_PUT_FAIL = 'THEATER_PUT_FAIL';

export function theaterputRequest(data) {
    return {
        type: THEATER_PUT_REQUEST, payload: {data}
    }
}

export const THEATER_POST_REQUEST = 'THEATER_POST_REQUEST';
export const THEATER_POST_SUCCESS = 'THEATER_POST_SUCCESS';
export const THEATER_POST_FAIL = 'THEATER_POST_FAIL';

export function theaterpostRequest(data) {
    return {
        type: THEATER_POST_REQUEST, payload: {data}
    }
}