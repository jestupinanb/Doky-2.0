import { FETCH_PASEOS_REQUEST, FETCH_PASEOS_SUCCESS, FETCH_PASEOS_FAILURE } from "../types/paseos";

const initialState = {
    paseos: [],
    loading: false,
    error: ''
}

const paseos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PASEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PASEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                paseos: action.payload
            }
        case FETCH_PASEOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default paseos