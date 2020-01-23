import { FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST } from "../types/services"
import { ServiciosDispController } from "../../database/controllers/serviciosDisponibles_controller"

export const servicesSuccess = services => {
    return {
        type: FETCH_SERVICES_SUCCESS,
        payload: services
    }
}

export const servicesFailure = error => {
    return {
        type: FETCH_SERVICES_FAILURE,
        payload: error
    }
}

export const servicesRequest = () => {
    return {
        type: FETCH_SERVICES_REQUEST
    }
}

export const fetchServices = () => {
    return async (dispatch) => {
        dispatch(servicesRequest())
        const serviciosDispController = new ServiciosDispController();
        try {
            const servicios = await serviciosDispController.readServiciosIniciadosConsumidor();
            dispatch(servicesSuccess(servicios))
        } catch (error) {
            dispatch(servicesFailure(error.message))
        }
    }
}