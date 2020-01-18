import { FETCH_VETERINARIAS_REQUEST, FETCH_VETERINARIAS_FAILURE, FETCH_VETERINARIAS_SUCCESS } from "../types/veterinarias"
import { ServiciosDispController } from "../../database/controllers/serviciosDisponibles_controller"

export const fetchVeterinariasRequest = () => {
    return {
        type: FETCH_VETERINARIAS_REQUEST
    }
}

export const fetchVeterinariasSuccess = veterinarias => {
    return {
        type: FETCH_VETERINARIAS_SUCCESS,
        payload: veterinarias
    }
}

export const fetchVeterinariasFailure = error => {
    return {
        type: FETCH_VETERINARIAS_FAILURE,
        payload: error
    }
}

export const fetchVeterinarias = () => {
    return async (dispatch) => {
        dispatch(fetchVeterinariasRequest())
        try {
            var serviciosDispController = new ServiciosDispController();
            const veterinarias = await serviciosDispController.readServicioVeterinaria();
            dispatch(fetchVeterinariasSuccess(veterinarias))
        } catch (error) {
            console.log("error")
            dispatch(fetchVeterinariasFailure(error.message))
        }
    }
}