import { SHOW_SIDE_DRAWER } from "../types/page";

const initialState ={
    sideDrawer:false
}

const page = (state=initialState,action)=>{
    switch (action.type) {
        case SHOW_SIDE_DRAWER:
            return {
                ...state,
                sideDrawer:!state.sideDrawer
            }
        default:
            return state
    }
}

export default page