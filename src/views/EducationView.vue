<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <!-- 顶部横条 -->
    <div class="relative h-[500px] bg-primary overflow-hidden">
      <!-- 背景图片 -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-40"
        :style="{ backgroundImage: `url(${bannerBg})` }"
      ></div>
      <!-- 渐变遮罩 -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"
      ></div>
      <!-- 内容区域 -->
      <div class="container mx-auto px-4 h-full flex items-center relative">
        <div class="max-w-3xl">
          <div class="inline-block bg-primary/80 px-4 py-2 rounded-lg mb-6">
            <span class="text-white/90 text-lg">科普教育</span>
          </div>
          <h1 class="text-6xl font-bold mb-8 text-white">非遗科普动画</h1>
          <p class="text-2xl text-white/90 font-light">
            生动有趣 • 寓教于乐 • 传承文化
          </p>
        </div>
      </div>
    </div>

    <!-- 其他内容 -->
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">科普动画</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 凤翔泥塑的故事 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <video
              controls
              class="w-full h-full object-cover"
              :src="storyVideo"
            >
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">凤翔泥塑的故事</h3>
            <p class="text-gray-600">
              深入了解凤翔泥塑的历史渊源，感受千年非遗文化的传承与发展。
            </p>
          </div>
        </div>

        <!-- 凤翔泥塑的魅力 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <video controls class="w-full h-full" :src="charmVideo">
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">凤翔泥塑的魅力</h3>
            <p class="text-gray-600">
              探索凤翔泥塑的艺术特色，领略非遗文化的独特魅力。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 添加banner背景图片
const bannerBg = new URL(
  "@/assets/images/banners/education.jpg",
  import.meta.url
).href;

// 导入视频资源
import storyVideo from "@/assets/Video/凤翔泥塑的故事.mp4";
import charmVideo from "@/assets/Video/凤翔泥塑的魅力.mp4";

// 视频封面图（如果有的话）
// const storyPoster = new URL(
//   "@/assets/images/video-covers/story-poster.jpg",
//   import.meta.url
// ).href;
// const charmPoster = new URL(
//   "@/assets/images/video-covers/charm-poster.jpg",
//   import.meta.url
// ).href;
</script>
