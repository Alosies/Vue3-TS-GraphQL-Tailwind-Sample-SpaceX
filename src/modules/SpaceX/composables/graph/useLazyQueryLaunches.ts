import { useLaunchesLazyQuery } from '@/graphql/generated'
import { useResult } from '@vue/apollo-composable'

export function useLazyQueryLaunches() {
  const { result, loading, error, load, document } = useLaunchesLazyQuery()
  const launches = useResult(result)

  function loadLaunchesData(launchYear: string) {
    load(document.value, { launch_year: launchYear })
  }

  return {
    launches,
    isLoadingLaunches: loading,
    errorInLaunches: error,
    loadLaunchesData,
  }
}
