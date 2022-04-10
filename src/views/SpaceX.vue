<template>
  <div class="justify-center max-w-5xl mt-10 p-4">
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">SpaceX Launches</h1>
    <LaunchList />
  </div>
</template>
<script setup lang="ts">
import LaunchList from '@/modules/SpaceX/components/Launch/LaunchList.vue'
</script>
