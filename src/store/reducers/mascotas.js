import { FETCH_MASCOTAS_REQUEST, FETCH_MASCOTAS_FAILURE, FETCH_MASCOTAS_SUCCESS } from "../types/mascotas"

const initialState={
    loading:false,
    mascotas:[],
    error:''
}

const mascotas = (state=initialState,action) => {
    switch(action.type){
        case FETCH_MASCOTAS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_MASCOTAS_FAILURE:
            return{
                ...state,
                mascotas:[],
                loading:false,
                error:action.payload
            }
        case FETCH_MASCOTAS_SUCCESS:
            return{
                ...state,
                loading:false,
                mascotas:action.payload,
                error:''
            }
        default:
            return state
    }
}

export default mascotas