import {
    FILMS_SUCCESS,
    FILMS_GET_SUCCESS,
    FILMS_REMOVE_REQUEST,
    FILMS_POST_REQUEST
} from "../actions/film";

const initialState = {
    films: [],
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case FILMS_SUCCESS: {
            const {films} = action.payload.data;
            return {
                ...state, films,
            }
        }

        case FILMS_GET_SUCCESS: {
            const {films} = action.payload.data;
            return {
                ...state, films,
            }
        }

        case FILMS_REMOVE_REQUEST: {
            const {id} = action.payload;
            let {films} = state;
            films = films.filter(d => d.id !== id);
            return {
                ...state, films,
            }
        }

        case FILMS_POST_REQUEST: {
            const {filmId} = action.payload;
            let {films} = state;
            return {
                ...state, films,[filmId]:films
            }
        }

        default: {
            return state
        }
    }
}
