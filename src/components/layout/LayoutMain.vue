<template>
  <div>
    <nav class="bg-gray-800 text-white">
      <div class="mx-auto px-8">
        <div class="relative flex items-center justify-between h-20">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div
              class="flex-shrink-0 flex items-center my-1 cursor-pointer"
              @click="$router.push('/')"
            >
              <img class="w-14 h-14" src="../../assets/logo.png" />
            </div>
            <div class="flex ml-10 items-center align-middle">
              <div class="flex space-x-4">
                <router-link
                  v-for="(menu, index) in menuItems"
                  :key="index"
                  :to="{ name: menu.routeName }"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  exact-active-class="bg-gray-900 text-white"
                  >{{ menu.name }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="flex justify-center">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import MainRoutesName from '@/router/constants'

interface MenuItem {
  name: string
  routeName: MainRoutesName
}

const menuItems: MenuItem[] = [
  { name: 'Home', routeName: MainRoutesName.Home },
  { name: 'Explore', routeName: MainRoutesName.Explore },
]
</script>
