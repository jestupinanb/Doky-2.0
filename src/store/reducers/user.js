import { FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "../types/user"

const initialState={
    loading:false,
    user:null,
    error:''
}

const user = (state=initialState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                user:null,
                loading:false,
                error:action.payload
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:''
            }
        default:
            return state
    }
}

export default user