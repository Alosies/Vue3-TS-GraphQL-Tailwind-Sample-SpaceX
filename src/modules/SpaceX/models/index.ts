import { LaunchesPastQuery, LaunchQuery } from '@/graphql/generated'

export type LaunchList = LaunchesPastQuery['launchesPast']
export type LaunchSummaryFromList = NonNullable<LaunchList>[0]
export type LaunchDetail = LaunchQuery['launch']
export type ShipDataFromLauch = NonNullable<NonNullable<LaunchDetail>['ships']>[0]
