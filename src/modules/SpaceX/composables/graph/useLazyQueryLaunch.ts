import { useLaunchLazyQuery } from '@/graphql/generated'
import { useResult } from '@vue/apollo-composable'

export function useLazyQueryLaunch() {
  const { result, loading, load, document, error } = useLaunchLazyQuery({
    id: '',
  })
  const launch = useResult(result)

  function loadLaunchData(id: string) {
    load(document.value, { id })
  }

  return {
    launch,
    isLoadingLaunch: loading,
    loadLaunchData,
    errorInLaunchData: error,
  }
}
