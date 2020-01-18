import { FETCH_VETERINARIAS_REQUEST, FETCH_VETERINARIAS_SUCCESS, FETCH_VETERINARIAS_FAILURE } from "../types/veterinarias";

const initialState = {
    veterinarias: [],
    loading: false,
    error: ''
}

const veterinarias = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VETERINARIAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_VETERINARIAS_SUCCESS:
            return {
                ...state,
                loading: false,
                veterinarias: action.payload
            }
        case FETCH_VETERINARIAS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default veterinarias   