import {THEATER_SUCCESS} from "../actions/tatron";

const initialState = {
    theater: {},
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case THEATER_SUCCESS: {
            const theater = action.payload.data;
            return {
                ...state, theater,
            }
        }

        default: {
            return state
        }
    }
}
