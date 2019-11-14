import {USERS_REQUEST} from "../actions/user";

const initialState = {
    users: []
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case USERS_REQUEST: {
            const {users} = action.payload.data;
            return {
                ...state, users,
            }
        }

        default: {
            return state
        }
    }
}
