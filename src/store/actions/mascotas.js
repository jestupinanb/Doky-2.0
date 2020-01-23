import { FETCH_MASCOTAS_SUCCESS, FETCH_MASCOTAS_FAILURE, FETCH_MASCOTAS_REQUEST } from "../types/mascotas"
import { UserController } from "../../database/controllers/user_controller"

export const mascotasSuccess = mascotas => {
    return {
        type: FETCH_MASCOTAS_SUCCESS,
        payload: mascotas
    }
}

export const mascotasFailure = error => {
    return {
        type: FETCH_MASCOTAS_FAILURE,
        payload: error
    }
}

export const mascotasRequest = () => {
    return {
        type: FETCH_MASCOTAS_REQUEST
    }
}

export const fetchMascotas = () => {
    return async (dispatch) => {
        const userController = new UserController();
        dispatch(mascotasRequest())
        try {
            const mascotasinfo = await userController.getInformacionMascotas();
            dispatch(mascotasSuccess(mascotasinfo))
        } catch (error) {
            dispatch(mascotasFailure(error.message))
        }
    }
}