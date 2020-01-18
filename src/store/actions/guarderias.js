import { FETCH_GUARDERIAS_REQUEST, FETCH_GUARDERIAS_FAILURE, FETCH_GUARDERIAS_SUCCESS } from "../types/guarderias"
import { ServiciosDispController } from "../../database/controllers/serviciosDisponibles_controller"

export const fetchGuarderiasRequest = () =>{
    return{
        type:FETCH_GUARDERIAS_REQUEST
    }
}

export const fetchGuarderiasSuccess = guarderias =>{
    return{
        type:FETCH_GUARDERIAS_SUCCESS,
        payload:guarderias
    }
}

export const fetchGuarderiasFailure = error =>{
    return{
        type:FETCH_GUARDERIAS_FAILURE,
        payload:error
    }
}

export const fetchGuarderias = () =>{
    return async (dispatch)=>{
        dispatch(fetchGuarderiasRequest())
        try {
            var serviciosDispController = new ServiciosDispController();
            const guarderias = await serviciosDispController.readServicioGuarderia();
            dispatch(fetchGuarderiasSuccess(guarderias))
        } catch (error) {
            console.log("error")
            dispatch(fetchGuarderiasFailure(error.message))
        }
    }
}