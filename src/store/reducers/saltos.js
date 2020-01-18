import { FETCH_SALTOS_REQUEST, FETCH_SALTOS_SUCCESS, FETCH_SALTOS_FAILURE } from "../types/saltos";

const initialState = {
    saltos: [],
    loading: false,
    error: ''
}

const saltos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SALTOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SALTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                saltos: action.payload
            }
        case FETCH_SALTOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default saltos   