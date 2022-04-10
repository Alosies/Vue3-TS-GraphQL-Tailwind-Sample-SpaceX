/* eslint-disable no-underscore-dangle */
import { useToast } from 'vue-toastification'
import type { Ref } from 'vue'
import { watch, computed } from 'vue'
import _isArray from 'lodash/isArray'

type ResultData =
  | {
      __typename?: string | undefined
    }
  | null
  | undefined

interface graphToastArguments {
  result?:
    | Readonly<Ref<Readonly<ResultData[] | undefined | null>>>
    | Readonly<Ref<Readonly<ResultData>>>
  error: Ref<import('@apollo/client/errors').ApolloError | null>
  dataName?: string
}

function useGraphToasts(data: graphToastArguments) {
  const toast = useToast()
  const { result, error, dataName } = data

  const dataNameForDisplay = computed(() => {
    if (dataName) return dataName
    const data = result?.value
    if (!data) return 'data'
    if (_isArray(data)) {
      return data?.[0]?.__typename
    }
    return (data as ResultData)?.__typename
  })

  const successMessage = computed(() => `Successfully loaded ${dataNameForDisplay.value}`)

  const failureMessage = computed(
    () => `Error loading ${dataNameForDisplay.value}. Please try gain later`,
  )

  watch(
    () => result,
    (newVal) => {
      if (newVal) {
        if (Array.isArray(newVal) && newVal.length === 0) {
          toast.error('Could not find any data')
          return
        }
        toast.success(successMessage.value)
      }
    },
  )

  watch(error, (newVal) => {
    if (newVal) {
      toast.error(failureMessage.value)
    }
  })
}

export default useGraphToasts
