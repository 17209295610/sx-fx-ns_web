<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <!-- 页面导航 -->
    <Breadcrumb />

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

    <!-- 重新设计内容区域 -->
    <div class="container mx-auto px-4 py-16">
      <!-- 页面标题区域 -->
      <div class="text-center mb-16">
        <div class="inline-block bg-primary/10 px-4 py-1 rounded-full mb-4">
          <span class="text-primary font-medium">趣味科普</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">非遗动画展播</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          通过生动有趣的动画形式，带您了解凤翔泥塑的历史文化与制作工艺
        </p>
      </div>

      <!-- 视频展示区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- 凤翔泥塑的故事 -->
        <div
          class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <!-- 视频容器 -->
          <div class="relative aspect-w-16 aspect-h-9 bg-gray-900">
            <!-- 视频封面 -->
            <div
              class="absolute inset-0 bg-cover bg-center opacity-0 pointer-events-none"
              :style="{ backgroundImage: `url(${storyPoster})` }"
            >
              <!-- 播放按钮 -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <el-icon class="text-3xl text-white"><VideoPlay /></el-icon>
                </div>
              </div>
            </div>
            <video
              controls
              class="w-full h-full object-cover"
              :src="storyVideo"
              :poster="storyPoster"
            >
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <!-- 视频信息 -->
          <div class="p-6 space-y-4">
            <div class="flex items-center gap-3">
              <el-icon class="text-2xl text-primary"><Film /></el-icon>
              <h3 class="text-2xl font-bold">凤翔泥塑的故事</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              深入了解凤翔泥塑的历史渊源，感受千年非遗文化的传承与发展。
            </p>
          </div>
        </div>

        <!-- 凤翔泥塑的魅力 -->
        <div
          class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <!-- 视频容器 -->
          <div class="relative aspect-w-16 aspect-h-9 bg-gray-900">
            <!-- 视频封面 -->
            <div
              class="absolute inset-0 bg-cover bg-center opacity-0 pointer-events-none"
              :style="{ backgroundImage: `url(${charmPoster})` }"
            >
              <!-- 播放按钮 -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <el-icon class="text-3xl text-white"><VideoPlay /></el-icon>
                </div>
              </div>
            </div>
            <video
              controls
              class="w-full h-full object-cover"
              :src="charmVideo"
              :poster="charmPoster"
            >
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <!-- 视频信息 -->
          <div class="p-6 space-y-4">
            <div class="flex items-center gap-3">
              <el-icon class="text-2xl text-primary"><Film /></el-icon>
              <h3 class="text-2xl font-bold">凤翔泥塑的魅力</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              探索凤翔泥塑的艺术特色，领略非遗文化的独特魅力。
            </p>
          </div>
        </div>
      </div>

      <!-- 更多视频提示 -->
      <div class="text-center mt-16">
        <div class="inline-flex items-center gap-2 text-primary">
          <span>更多精彩内容</span>
          <el-icon class="animate-bounce"><ArrowDown /></el-icon>
        </div>
        <p class="text-gray-500 mt-2">敬请期待...</p>
      </div>
    </div>

    <!-- 知识点展示 -->
    <div class="knowledge-section py-16 bg-gray-50">
      <!-- ... -->
    </div>

    <!-- 互动问答部分 -->
    <div class="quiz-section py-16">
      <!-- ... -->
    </div>

    <!-- 学习资源下载 -->
    <div class="resources-section py-16 bg-gray-50">
      <!-- ... -->
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import { VideoPlay, Film, ArrowDown } from "@element-plus/icons-vue";

// 添加banner背景图片
const bannerBg = new URL(
  "@/assets/images/banners/education.jpg",
  import.meta.url
).href;

// 导入视频资源
import storyVideo from "@/assets/Video/凤翔泥塑的故事.mp4";
import charmVideo from "@/assets/Video/凤翔泥塑的魅力.mp4";

// 视频封面图
const storyPoster = new URL(
  "@/assets/images/video-covers/story-poster.jpg",
  import.meta.url
).href;
const charmPoster = new URL(
  "@/assets/images/video-covers/charm-poster.jpg",
  import.meta.url
).href;
</script>

<style scoped>
/* 视频卡片悬停效果 */
.group:hover {
  transform: translateY(-5px);
}

/* 播放按钮动画 */
.group:hover .play-button {
  transform: scale(1.1);
}

/* 视频控件样式优化 */
video::-webkit-media-controls {
  opacity: 1;
  transition: opacity 0.3s;
}

video::-webkit-media-controls-panel {
  background: rgba(0, 0, 0, 0.7);
}
</style>
