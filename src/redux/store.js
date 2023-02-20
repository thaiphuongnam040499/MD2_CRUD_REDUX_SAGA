import { createStore,applyMiddleware } from "redux";
import createReduxMiddleware from "redux-saga"
import { rootReducer } from "./reducer";
import { rootSaga } from "../saga";
// tạo đối tượng sagaMiddleware
const sagaMiddleware = createReduxMiddleware();
// cấu hình store chấp nhận sagaMiddleware là middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// chạy rootSaga để lắng nghe các actions
sagaMiddleware.run(rootSaga)
export default store;