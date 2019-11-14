
export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';

export function usersRequest(data) {
    return {
        type: USERS_REQUEST, payload: {data}
    }
}


export const USERS_REMOVE_REQUEST = 'USERS_REMOVE_REQUEST';
export const USERS_REMOVE_SUCCESS = 'USERS_REMOVE_SUCCESS';
export const USERS_REMOVE_FAIL = 'USERS_REMOVE_FAIL';

export function usersremoveRequest(id) {
    return {
        type: USERS_REMOVE_REQUEST, payload: {id}
    }
}