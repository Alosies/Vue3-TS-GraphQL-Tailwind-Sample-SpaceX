<template>
  <div class="max-w-2xl mt-10 grid justify-center items-center justify-items-center">
    <h3 class="text-4xl font-bold text-gray-800">Explore SpaceX Launches</h3>
    <button
      class="bg-gray-800 p-2 px-4 text-white rounded-full hover:bg-gray-900 my-8 text-xl font-bold"
      @click="handleclickToExplore"
    >
      Explore Past Launches
    </button>
    <div class="my-3">
      <div class="font-bold">Find launches by year</div>
      <div class="text-xs">Try: 2014, 2020 etc.</div>
    </div>
    <input
      v-model="launchYear"
      type="text"
      class="p-3 rounded-full my-3 text-center text-xl font-bold"
    />

    <SpaceXLaunchSearchList
      v-if="typeof launchYearInSearch === 'string'"
      :launch-year="launchYearInSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import MainRoutesName from '@/router/constants'
import { ref, watch, computed } from 'vue'
import { useMagicKeys } from '@vueuse/core' // This could be implementer even with the native @keyup listener for the current use case
import SpaceXLaunchSearchList from '@/modules/SpaceX/components/SpaceXLaunchSearchList.vue'

const router = useRouter()
const route = useRoute()
const launchYear = ref(null)
const launchYearInSearch = computed(() => route.query.launchYear)
const { enter } = useMagicKeys()

watch(enter, (v) => {
  if (v && launchYear.value) {
    router.push({
      query: {
        launchYear: launchYear.value,
      },
    })
    launchYear.value = null
  }
})

function handleclickToExplore() {
  router.push({
    name: MainRoutesName.Explore,
  })
}
</script>
