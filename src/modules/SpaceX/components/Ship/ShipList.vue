<template>
  <div class="mt-5">
    <div v-if="(shipsToDisplay?.length || 0) > 0" class="grid gap-4">
      <h4 class="font-bold text-2xl my-4">Ships</h4>
      <div class="grid gap-4" :class="(shipsToDisplay?.length || 0) > 1 ? 'sm:grid-cols-2' : ''">
        <!-- TODO: Extract ShipsData to a component -->
        <div v-for="(ship, index) in shipsToDisplay" :key="index" class="bg-white">
          <img
            v-if="ship?.image"
            :src="ship?.image"
            :alt="`${ship?.name} Ship Image`"
            class="object-cover h-52 w-full"
          />
          <div class="p-3">
            <h5 class="font-bold text-xl">{{ ship?.name }}</h5>
            <p class="font-semibold">Home Port: {{ ship?.home_port }}</p>
          </div>
        </div>
      </div>
    </div>

    <SMissingDataNotifier v-else>
      No Data available regarding the ships for
      {{ context }}</SMissingDataNotifier
    >
  </div>
</template>

<script setup lang="ts">
import { SMissingDataNotifier } from '@/components/customComponents'
import { computed, defineProps } from 'vue'
import { ShipDataFromLauch } from '@/modules/SpaceX/models'

export interface Props {
  shipList: Utils.Maybe<ShipDataFromLauch[]>
  context: string
}

const props = defineProps<Props>()

const shipsToDisplay = computed(() => props.shipList?.filter((ship) => Boolean(ship?.image)))
</script>

<script lang="ts">
export default {
  name: 'LaunchDetail',
}
</script>
