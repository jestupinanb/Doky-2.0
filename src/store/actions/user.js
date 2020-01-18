import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "../types/user"
import { UserController } from "../../database/controllers/user_controller"

export const userSuccess = users =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const usersFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const usersRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsers = () =>{
    return async (dispatch) =>{
        dispatch(usersRequest())
        let userController = new UserController();
        const user = userController.getUserId();
        if(user){
            try{
                const userData = await userController.getTipoUsuario(user.uid);
                dispatch(userSuccess(userData))
            }catch(error){
                dispatch(usersFailure(error.message))
            }
        }else{
            dispatch(userSuccess(null))
        }
    }
}