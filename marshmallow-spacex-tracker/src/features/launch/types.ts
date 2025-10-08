import { RequestStatus } from '../types'

export interface Launch {
  fairings: Fairings | null
  links: Links
  static_fire_date_utc: Date | null
  static_fire_date_unix: number | null
  net: boolean
  window: number | null
  rocket: string
  success: boolean | null
  failures: Failure[]
  details: null | string
  crew: string[]
  ships: string[]
  capsules: string[]
  payloads: string[]
  launchpad: string
  flight_number: number
  name: string
  date_utc: Date
  date_unix: number
  date_local: Date
  date_precision: string
  upcoming: boolean
  cores: Core[]
  auto_update: boolean
  tbd: boolean
  launch_library_id: null | string
  id: string
}

interface Core {
  core: null | string
  flight: number | null
  gridfins: boolean | null
  legs: boolean | null
  reused: boolean | null
  landingAttempt: boolean | null
  landingSuccess: boolean | null
  landingType: string | null
  landpad: string | null
}

interface Failure {
  time: number
  altitude: number | null
  reason: string
}

interface Fairings {
  reused: boolean | null
  recoveryAttempt: boolean | null
  recovered: boolean | null
  ships: string[]
}

interface Links {
  patch: Patch
  reddit: Reddit
  flickr: Flickr
  presskit: null | string
  webcast: null | string
  youtubeID: null | string
  article: null | string
  wikipedia: null | string
}

interface Flickr {
  original: string[]
}

interface Patch {
  small: null | string
  large: null | string
}

interface Reddit {
  campaign: null | string
  launch: null | string
  media: null | string
  recovery: null | string
}

export interface LaunchState {
  data: Launch | null
  status: RequestStatus
}
