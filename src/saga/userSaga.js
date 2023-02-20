import { call, put } from 'redux-saga/effects'
import * as useService from '../api/useService'
import { act_action_success } from '../redux/actions';
import * as actionTypes from '../constants/actionTypes';
export function* getAllUsers() {
    try {
        console.log("step2 useSaga nhận actions act_getAll_user");
        // gọi axios USER_GET, nhận kết quả trả về
        let listUser = yield call(useService.USER_GET)
        console.log("useSaga nhận kết quả từ useService, listUser", listUser);
        // success : chuyển listUser sang reducer
        yield put(act_action_success(actionTypes.USER_SUCCESS ,listUser))
    } catch (error) {
        // error
        console.log(error);
    }

}