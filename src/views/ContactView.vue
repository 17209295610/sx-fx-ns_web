<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <!-- 顶部横条 -->
    <div class="relative h-[400px] bg-primary overflow-hidden">
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
          <h1 class="text-5xl font-bold text-white mb-4">关于我们</h1>
          <p class="text-xl text-white/90">传承文化 • 创新发展 • 科技赋能</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <!-- 团队介绍 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">团队介绍</h2>
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <div class="max-w-3xl mx-auto space-y-6">
            <div class="flex items-center justify-center mb-8 text-primary">
              <el-icon class="text-6xl"><Avatar /></el-icon>
            </div>
            <p class="text-gray-600 leading-relaxed">
              "非泥莫属"团队来自咸阳职业技术学院信息工程学院，致力于将传统文化与现代技术相结合。
              我们运用新媒体技术和互联网平台，让凤翔泥塑这一非物质文化遗产焕发新的生机。
            </p>
            <div class="text-center text-sm text-gray-500 mt-4">
              <p>指导老师：XXX</p>
              <p>团队成员：XXX、XXX、XXX、XXX</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 项目说明 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">项目说明</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
            >
              <el-icon class="text-2xl text-primary">
                <component :is="feature.icon" />
              </el-icon>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- 联系方式 -->
      <div>
        <h2 class="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div
            v-for="contact in contacts"
            :key="contact.title"
            class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <el-icon class="text-3xl text-primary mb-4">
              <component :is="contact.icon" />
            </el-icon>
            <h3 class="font-bold mb-2">{{ contact.title }}</h3>
            <p class="text-gray-600">{{ contact.content }}</p>
          </div>
        </div>
      </div>

      <!-- 社交媒体账号 -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-12">关注我们</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- 微信公众号 -->
          <div
            class="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center justify-center mb-4">
              <el-icon class="text-4xl text-[#07C160]"><Promotion /></el-icon>
            </div>
            <h3 class="text-xl font-bold mb-2">微信公众号</h3>
            <p class="text-gray-600">关注"非泥莫属"公众号</p>
            <p class="text-primary font-medium mt-2">二维码待更新</p>
          </div>

          <!-- 小红书账号 -->
          <div
            class="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center justify-center mb-4">
              <el-icon class="text-4xl text-[#FE2C55]"><Platform /></el-icon>
            </div>
            <h3 class="text-xl font-bold mb-2">小红书号</h3>
            <p class="text-gray-600">关注"非泥莫属"小红书</p>
            <p class="text-primary font-medium mt-2">二维码待更新</p>
          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Location,
  Phone,
  Message,
  Monitor,
  Collection,
  Connection,
  Avatar,
  Promotion,
  Platform,
} from "@element-plus/icons-vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import Breadcrumb from "@/components/layout/Breadcrumb.vue";

// 项目特点
const features = [
  {
    icon: "Monitor",
    title: "数字化展示",
    description: "运用现代技术手段，全方位展示凤翔泥塑的艺术魅力和文化内涵。",
  },
  {
    icon: "Collection",
    title: "文化传承",
    description: "深入挖掘非遗文化价值，让传统工艺在新时代焕发生机。",
  },
  {
    icon: "Connection",
    title: "创新互动",
    description: "通过趣味游戏和科普动画，让文化传承更加生动有趣。",
  },
];

// 联系方式
const contacts = [
  {
    icon: "Location",
    title: "地址",
    content: "陕西省咸阳市咸阳职业技术学院信息工程学院",
  },
  {
    icon: "Phone",
    title: "电话",
    content: "17209295610",
  },
  {
    icon: "Message",
    title: "邮箱",
    content: "投稿：2798156978@qq.com",
  },
];

// 添加banner背景图片
const bannerBg = new URL("@/assets/images/banners/about.jpg", import.meta.url)
  .href;
</script>
