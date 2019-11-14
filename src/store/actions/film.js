export const FILMS_REQUEST = 'FILMS_REQUEST';
export const FILMS_SUCCESS = 'FILMS_SUCCESS';
export const FILMS_FAIL = 'FILMS_FAIL';

export function filmsRequest(theatreId) {
    return {
        type: FILMS_REQUEST, payload: {theatreId}
    }
}

export const FILMS_GET_REQUEST = 'FILMS_GET_REQUEST';
export const FILMS_GET_SUCCESS = 'FILMS_GET_SUCCESS';
export const FILMS_GET_FAIL = 'FILMS_GET_FAIL';

export function filmsgetRequest(data) {
    return {
        type: FILMS_GET_REQUEST, payload: {data}
    }
}


export const FILMS_PUT_REQUEST = 'FILMS_PUT_REQUEST';
export const FILMS_PUT_SUCCESS = 'FILMS_PUT_SUCCESS';
export const FILMS_PUT_FAIL = 'FILMS_PUT_FAIL';

export function filmsputRequest(data) {
    return {
        type: FILMS_PUT_REQUEST, payload: {data}
    }
}


export const FILMS_POST_REQUEST = 'FILMS_POST_REQUEST';
export const FILMS_POST_SUCCESS = 'FILMS_POST_SUCCESS';
export const FILMS_POST_FAIL = 'FILMS_POST_FAIL';

export function filmspostRequest(data) {
    return {
        type: FILMS_POST_REQUEST, payload: {data}
    }
}


export const FILMS_REMOVE_REQUEST = 'FILMS_REMOVE_REQUEST';
export const FILMS_REMOVE_SUCCESS = 'FILMS_REMOVE_SUCCESS';
export const FILMS_REMOVE_FAIL = 'FILMS_REMOVE_FAIL';

export function filmsremoveRequest(id) {
    return {
        type: FILMS_REMOVE_REQUEST, payload: {id}
    }
}