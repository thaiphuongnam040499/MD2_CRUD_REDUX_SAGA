import * as actionTypes from "../constants/actionTypes"

export const act_getAll_user = () => {
    console.log("step1: vào actions act_getAll_user");
    return {
        type: actionTypes.USER_GET
    }
}
export const act_student = () => { 
    console.log("step1: vào actions act_student")
    return {
        type: actionTypes.STUDENT_GET
    }
}
export const act_post_user = (user) => {
    return {
        type: actionTypes.USER_POST,
        payload: user
    }
}
export const act_put_user = (user) => {
    return {
        type: actionTypes.USER_PUT,
        payload: user
    }
}
export const act_patch_user = (user) => {
    return {
        type: actionTypes.USER_PATCH,
        payload: user
    }
}
export const act_delete_user = (id) => {
    return {
        type: actionTypes.USER_DELETE,
        payload: id
    }
}

export const act_action_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}