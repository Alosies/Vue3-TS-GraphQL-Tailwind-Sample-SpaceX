<template>
  <div class="mt-5">
    <transition name="fade" mode="out-in">
      <section v-if="!isLoadingLaunch">
        <div class="flex mb-5">
          <div
            class="flex gap-1 bg-gray-700 hover:bg-gray-900 text-white p-3 py-1 rounded-md cursor-pointer"
            @click="handleClickOnBackButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </div>
        </div>
        <!-- when Launch is found -->
        <template v-if="launch">
          <h1 class="font-extrabold tracking-tigh text-3xl leading-10">
            {{ launch?.mission_name }}
          </h1>
          <p class="my-2 font-bold">Launch Date: {{ formatDate(launch?.launch_date_utc) }}</p>
          <p class="text-justify my-2">{{ launch.details }}</p>
          <ShipList v-bind="shipsListComponentProps" />
        </template>

        <!-- when Launch is not found -->
        <SMissingDataNotifier v-else>
          Could not find the launch data for launch id
          {{ launchId }}</SMissingDataNotifier
        >
        <!-- TODO: Add pagination to fetch more data -->
      </section>
      <!-- A better custom loader can be used below -->
      <SLoader v-else> Loading Launch Detail... </SLoader>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { SLoader, SMissingDataNotifier } from '@/components/customComponents'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { formatDate } from '@/modules/common/utilities'
import useGraphToasts from '@/graphql/composables'
import ShipList from '@/modules/SpaceX/components/Ship/ShipList.vue'
import type { Props as ShipListProps } from '@/modules/SpaceX/components/Ship/ShipList.vue'
import { useLazyQueryLaunch } from '../../composables/graph'

const route = useRoute()
const router = useRouter()
const { isLoadingLaunch, launch, loadLaunchData, errorInLaunchData } = useLazyQueryLaunch()

useGraphToasts({
  result: launch,
  error: errorInLaunchData,
})

const launchId = computed(() => route.params.launchId)

const shipsListComponentProps = computed((): ShipListProps => {
  return {
    context: `mission name ${launch.value?.mission_name}`,
    shipList: launch.value?.ships?.flatMap((v) => (v ? [v] : [])),
  }
})

function handleClickOnBackButton() {
  router.go(-1)
}

watch(
  launchId,
  () => {
    if (typeof launchId.value === 'string') {
      loadLaunchData(`${launchId.value}`)
    }
  },
  {
    immediate: true,
  },
)
</script>
