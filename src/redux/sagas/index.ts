import { all } from "redux-saga/effects";
import { watchFetchInitialData } from "./fetchInitialData";
import { watchStreamingPrices } from "./watchStreamingPrices";

export default function* rootSaga() {
  yield all([
    watchFetchInitialData(),
    watchStreamingPrices()
  ])
}
