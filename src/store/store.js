import { createStore,applyMiddleware } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
import createSagaMiddleware from 'redux-saga';
import { reducer } from "./reducers/reducer";
import mainSaga from "./saga/saga";

const sagaMiddleWare= createSagaMiddleware();


export const store = createStore(reducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(mainSaga);