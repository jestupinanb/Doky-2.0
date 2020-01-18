import { FETCH_SALTOS_REQUEST, FETCH_SALTOS_FAILURE, FETCH_SALTOS_SUCCESS } from "../types/saltos"
import { ServiciosDispController } from "../../database/controllers/serviciosDisponibles_controller"
import saltos from "../reducers/saltos"

export const fetchSaltosRequest = () =>{
    return{
        type:FETCH_SALTOS_REQUEST
    }
}

export const fetchSaltosSuccess = saltos =>{
    return{
        type:FETCH_SALTOS_SUCCESS,
        payload:saltos
    }
}

export const fetchSaltosFailure = error =>{
    return{
        type:FETCH_SALTOS_FAILURE,
        payload:error
    }
}

export const fetchSaltos = () =>{
    return async (dispatch)=>{
        dispatch(fetchSaltosRequest())
        try {   
            var serviciosDispController = new ServiciosDispController();
            const saltos = await serviciosDispController.readServicioSalto();
            dispatch(fetchSaltosSuccess(saltos))
        } catch (error) {
            console.log("error")
            dispatch(fetchSaltosFailure(error.message))
        }
    }
}