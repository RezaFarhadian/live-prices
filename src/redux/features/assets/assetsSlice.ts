import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type AssetsState = {
  id: string
  name: string
  priceUsd: string
}[]

const initialState: AssetsState = []

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    saveAssets: (state, action: PayloadAction<AssetsState>) => {
      return action.payload
    },
    incomingPrices: (state, action: PayloadAction<any>) => {
      const stateClone = state
      const prices = action.payload

      for (const assetId in prices) {
        stateClone.map((asset: any) => {
          if (asset.id === assetId)
            asset.priceUsd = prices[assetId]

          return asset
        })
      }

      return stateClone
    }
  }
})

export const { saveAssets, incomingPrices } = assetsSlice.actions

export const selectAssets = (state: RootState) => state.assets

export default assetsSlice.reducer
