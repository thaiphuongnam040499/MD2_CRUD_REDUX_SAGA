import { combineReducers } from "redux";
import users from "./users";
import student from "./students";
export const rootReducer = combineReducers({users,student})