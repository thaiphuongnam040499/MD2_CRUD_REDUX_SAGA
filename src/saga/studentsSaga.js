import { call, put } from "redux-saga/effects"
import * as studensService from "../api/studensService"
import { act_action_success } from "../redux/actions"
import * as actionTypes from "../constants/actionTypes"
export function* getStudents() {
    try {
        let listStudent = yield call(studensService.STUDENT_GET)
        console.log(listStudent);
        yield put(act_action_success(actionTypes.STUDENT_SUCCESS, listStudent))
    } catch (error) {
        console.log(error);
    }


}