import { LaunchesPastQuery } from '@/graphql/generated'

export type LaunchList = LaunchesPastQuery['launchesPast']
export type LaunchSummaryFromList = NonNullable<LaunchList>[0]
