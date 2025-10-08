import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { clientFetch } from '../../utils/clientFetch'
import { LaunchState } from './types'

const initialState: LaunchState = {
  data: null,
  status: 'idle',
}

export const getLaunch = createAsyncThunk(
  'getLaunch',
  async (launchId: string) => {
    const response = await clientFetch(
      `https://api.spacexdata.com/v4/launches/${launchId}`
    )
    return response.data
  }
)

const launchSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLaunch.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getLaunch.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
  },
})

export default launchSlice.reducer
