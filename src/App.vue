<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-grow">
      <div class="app-container">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>

    <TheFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import { BackToTop } from "@/components/common";
</script>

<style>
@import "./styles/variables.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 全局加载动画 */
.loading-container {
  @apply fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50;
}

/* 优化字体显示 */
body {
  font-family: var(--font-family-secondary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-primary);
}
</style>
