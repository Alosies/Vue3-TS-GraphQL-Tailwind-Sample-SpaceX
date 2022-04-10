<template>
  <div
    class="bg-white cursor-pointer rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
    @click="handleClickOnLaunch(launch)"
  >
    <img
      :src="launch?.ships?.[0]?.image || DEFAULT_IMAGE_PATH"
      :alt="`${launch?.mission_name} Ship Image`"
      class="object-cover h-52 w-full"
    />
    <div class="p-3">
      <h3 class="font-semibold text-lg">{{ launch?.mission_name }}</h3>
      <div>Launch Date: {{ formatDate(launch?.launch_date_utc) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/modules/common/utilities'
import { LaunchSummaryFromList } from '@/modules/SpaceX/models'
import { useRouter } from 'vue-router'
import MainRouteName from '@/router/constants'
import { PropType } from 'vue'

const DEFAULT_IMAGE_PATH = 'https://i.imgur.com/MtEgYbY.jpg'

defineProps({
  launch: {
    type: Object as PropType<LaunchSummaryFromList>,
    default: () => null,
  },
})

const router = useRouter()

function handleClickOnLaunch(launch: LaunchSummaryFromList) {
  router.push({
    name: MainRouteName.SPaceXLaunch,
    params: {
      launchId: launch?.id,
    },
  })
}
</script>
