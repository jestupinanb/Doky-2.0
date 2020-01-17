import { FETCH_PASEOS_REQUEST, FETCH_PASEOS_FAILURE, FETCH_PASEOS_SUCCESS } from "../types/paseos"
import { ServiciosDispController } from "../../database/controllers/serviciosDisponibles_controller"

export const fetchPaseosRequest = () =>{
    return{
        type:FETCH_PASEOS_REQUEST
    }
}

export const fetchPaseosSuccess = paseos =>{
    return{
        type:FETCH_PASEOS_SUCCESS,
        payload:paseos
    }
}

export const fetchPaseosFailure = error =>{
    return{
        type:FETCH_PASEOS_FAILURE,
        payload:error
    }
}

export const fetchPaseos = () =>{
    return async (dispatch)=>{
        dispatch(fetchPaseosRequest())
        try {
            var serviciosDispController = new ServiciosDispController();
            const paseos = await serviciosDispController.readServicioPaseo();
            dispatch(fetchPaseosSuccess(paseos))
        } catch (error) {
            console.log("error")
            dispatch(fetchPaseosFailure(error.message))
        }
    }
}