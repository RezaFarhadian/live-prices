import axios, { AxiosResponse } from "axios"
import { call, put, takeLatest } from "redux-saga/effects"
import { AssetsState, saveAssets } from "../features/assets/assetsSlice"

function getInitialData() {
  return axios.get("https://api.coincap.io/v2/assets")
  .then((res: AxiosResponse<any, any>) => {
    return res.data
  })
}

function* fetchInitialData(): any {
  const getAssets: any = yield call(getInitialData)
  
  const assets: AssetsState = getAssets.data.map((asset: any) => {
    return {
      id: asset.id,
      name: asset.name,
      priceUsd: asset.priceUsd
    }
  })

  yield put(saveAssets(assets))
}

export function* watchFetchInitialData(): any {
  yield takeLatest("FETCH_INITIAL_DATA", fetchInitialData)
}
