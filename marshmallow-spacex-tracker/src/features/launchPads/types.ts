import { RequestStatus } from '../types'

export interface LaunchPad {
  images: Images
  name: string
  full_name: string
  locality: string
  region: string
  latitude: number
  longitude: number
  launch_attempts: number
  launch_successes: number
  rockets: string[]
  timezone: string
  launches: string[]
  status: string
  details: string
  id: string
}

interface Images {
  large: string[]
}

export interface LaunchPadState {
  data: LaunchPad[]
  status: RequestStatus
}
