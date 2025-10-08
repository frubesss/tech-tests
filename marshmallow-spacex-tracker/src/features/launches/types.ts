import { Launch } from '../launch/types'
import { RequestStatus } from '../types'

export interface LaunchesState {
  data: Launch[]
  status: RequestStatus
}
