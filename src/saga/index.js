import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import * as userSaga from "./userSaga";
import * as studentsSaga from "./studentsSaga"
export const rootSaga = function*(){
    yield all([
        takeLatest(actionTypes.USER_GET,userSaga.getAllUsers),
        takeLatest(actionTypes.STUDENT_GET, studentsSaga.getStudents)
    ])
}