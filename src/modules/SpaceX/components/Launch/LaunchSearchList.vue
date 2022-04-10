<template>
  <div class="my-5">
    <transition name="fade" mode="out-in">
      <section v-if="!isLoadingLaunches">
        <div v-if="launches?.length">
          <div class="font-bold mb-3">Launches from the year {{ launchYear }}</div>
          <section class="grid sm:grid-cols-2 gap-3">
            <LaunchSummaryCard
              v-for="launch in launches"
              :key="launch?.id || undefined"
              :launch="launch"
            />
          </section>
        </div>
        <SMissingDataNotifier v-else>
          <p>
            Could not load the launch data for the year
            {{ launchYear }}.
          </p>
          Note: The Free GraphQl API sometimes restricts consecutive searches for the same year.
        </SMissingDataNotifier>

        <!-- TODO: Add pagination to fetch more data -->
      </section>
      <!-- A better custom loader can be used below -->
      <SLoader v-else> Loading Launches... </SLoader>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { SLoader, SMissingDataNotifier } from '@/components/customComponents'

import useGraphToasts from '@/graphql/composables'
import { watch } from 'vue'
import { useLazyQueryLaunches } from '../../composables/graph'
import LaunchSummaryCard from './LaunchSummaryCard.vue'

const props = defineProps({
  launchYear: {
    type: String,
    default: null,
  },
})

const { errorInLaunches, isLoadingLaunches, launches, loadLaunchesData } = useLazyQueryLaunches()

watch(
  () => props.launchYear,
  (val) => {
    if (val) loadLaunchesData(val)
  },
  {
    immediate: true,
  },
)

useGraphToasts({
  result: launches,
  error: errorInLaunches,
  dataName: `Launches for the search`,
})
</script>
