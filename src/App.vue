<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/layout/TheHeader.vue";
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
