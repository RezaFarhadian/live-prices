import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import socketChannel from "../socketChannel";
import { incomingPrices } from "../features/assets/assetsSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* updatePrices(action: PayloadAction<any>): any {
  yield put(incomingPrices(action.payload))
}

function* streamingPrices(): any {
  const channel = yield call(socketChannel)

  while (true) {
    const incoming = yield take(channel)

    yield put({
      type: "UPDATE_PRICES",
      payload: incoming
    })
  }
}

export function* watchStreamingPrices(): any {
  yield takeLatest("STREAMING_PRICES", streamingPrices)
  yield takeEvery("UPDATE_PRICES", updatePrices)
}
