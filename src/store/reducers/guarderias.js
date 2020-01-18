import { FETCH_GUARDERIAS_REQUEST, FETCH_GUARDERIAS_SUCCESS, FETCH_GUARDERIAS_FAILURE } from "../types/guarderias";

const initialState = {
    guarderias: [],
    loading: false,
    error: ''
}

const guarderias = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GUARDERIAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GUARDERIAS_SUCCESS:
            return {
                ...state,
                loading: false,
                guarderias: action.payload
            }
        case FETCH_GUARDERIAS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default guarderias   