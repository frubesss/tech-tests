import { LaunchesState } from './launches/types'
import { LaunchPadState } from './launchPads/types'
import { LaunchState } from './launch/types'

export default interface State {
  launches: LaunchesState
  launchPads: LaunchPadState
  launch: LaunchState
}

export type RequestStatus = 'idle' | 'loading' | 'succeeded'
