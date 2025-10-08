import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { clientFetch } from '../../utils/clientFetch'

import { LaunchPadState } from './types'

const initialState: LaunchPadState = {
  data: [],
  status: 'idle',
}

export const getLaunchPads = createAsyncThunk('getLaunchPads', async () => {
  const response = await clientFetch('https://api.spacexdata.com/v4/launchpads')
  return response.data
})

const launchPadsSlice = createSlice({
  name: 'launchPads',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLaunchPads.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getLaunchPads.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
  },
})

export default launchPadsSlice.reducer
