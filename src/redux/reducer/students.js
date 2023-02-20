import * as actionTypes from "../../constants/actionTypes"
const initialState = [];
const student =(state = initialState,action)=>{
    switch (action.type) {
        case actionTypes.STUDENT_GET:
           return [...action.payload]
        default:
            return state;
    }
}
export default student;