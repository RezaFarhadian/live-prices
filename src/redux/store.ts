import { configureStore } from "@reduxjs/toolkit"
import assetsReducer from "./features/assets/assetsSlice"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    assets: assetsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
