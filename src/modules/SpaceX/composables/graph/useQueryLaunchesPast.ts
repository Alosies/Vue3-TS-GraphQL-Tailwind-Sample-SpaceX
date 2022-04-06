import { useLaunchesPastQuery } from '@/graphql/generated'
import { useResult } from '@vue/apollo-composable'

export function useQueryLaunchesPast() {
  const { result, loading, error } = useLaunchesPastQuery()
  const launchesPast = useResult(result)

  return {
    launchesPast,
    isLoadingLaunchesPast: loading,
    errorInLaunchesPast: error,
  }
}
