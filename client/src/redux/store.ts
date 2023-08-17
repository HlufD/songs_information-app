import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import songReducer from "./features/songSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    songs: songReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export type RootStateType = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;
