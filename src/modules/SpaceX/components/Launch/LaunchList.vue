<template>
  <div class="my-5">
    <transition name="fade" mode="out-in">
      <section v-if="!isLoadingLaunchesPast" class="grid sm:grid-cols-2 gap-3">
        <LaunchSummaryCard
          v-for="launch in launchesPast"
          :key="launch?.id || undefined"
          :launch="launch"
        />
        <!-- TODO: Add pagination to fetch more data -->
      </section>
      <!-- A better custom loader can be used below -->
      <SLoader v-else> Loading Launches... </SLoader>
    </transition>
  </div>
</template>

<script setup lang="ts">
import SLoader from '@/components/customComponents/SLoader.vue'

import useGraphToasts from '@/graphql/composables'
import { useQueryLaunchesPast } from '../../composables/graph'
import LaunchSummaryCard from './LaunchSummaryCard.vue'

const { launchesPast, isLoadingLaunchesPast, errorInLaunchesPast } = useQueryLaunchesPast()

useGraphToasts({
  // result: launchesPast,
  error: errorInLaunchesPast,
  dataName: 'Past Launches',
})
</script>
