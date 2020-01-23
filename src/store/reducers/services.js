import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS } from "../types/services"

const initialState={
    loading:false,
    services:[],
    error:''
}

const services = (state=initialState,action) => {
    switch(action.type){
        case FETCH_SERVICES_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_SERVICES_FAILURE:
            return{
                ...state,
                services:[],
                loading:false,
                error:action.payload
            }
        case FETCH_SERVICES_SUCCESS:
            return{
                ...state,
                loading:false,
                services:action.payload,
                error:''
            }
        default:
            return state
    }
}

export default services