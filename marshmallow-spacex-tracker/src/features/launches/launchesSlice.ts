import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { clientFetch } from '../../utils/clientFetch'
import { LaunchesState } from './types'

const initialState: LaunchesState = {
  data: [],
  status: 'idle',
}

export const getLaunches = createAsyncThunk('getLaunches', async () => {
  const response = await clientFetch('https://api.spacexdata.com/v4/launches')
  return response.data
})

const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLaunches.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
  },
})

export default launchesSlice.reducer
