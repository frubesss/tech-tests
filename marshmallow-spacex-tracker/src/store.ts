import { configureStore } from '@reduxjs/toolkit'

import launchesSlice from './features/launches/launchesSlice'
import launchPadsSlice from './features/launchPads/launchPadsSlice'
import LaunchSlice from './features/launch/launchSlice'

export default configureStore({
  reducer: {
    launches: launchesSlice,
    launchPads: launchPadsSlice,
    launch: LaunchSlice,
  },
})
