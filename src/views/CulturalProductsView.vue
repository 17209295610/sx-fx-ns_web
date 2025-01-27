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
            <span class="text-white/90 text-lg">文创产品</span>
          </div>
          <h1 class="text-6xl font-bold mb-8 text-white">非遗文创产品展示</h1>
          <p class="text-2xl text-white/90 font-light">
            传统创新 • 匠心独运 • 文化传承
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">文创产品</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <el-image
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-cover"
            fit="cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ product.title }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-primary font-bold">¥{{ product.price }}</span>
              <el-button type="primary" size="small">购买</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheFooter from "@/components/layout/TheFooter.vue";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "泥塑摆件",
    description: "现代风格的装饰摆件",
    price: 299,
    image: new URL("@/assets/images/文创产品/cultural-1.jpg", import.meta.url)
      .href,
  },
  {
    id: 2,
    title: "创意花瓶",
    description: "传统工艺与现代设计的结合",
    price: 399,
    image: new URL("@/assets/images/文创产品/cultural-2.jpg", import.meta.url)
      .href,
  },
];

// 添加banner背景图片
const bannerBg = new URL(
  "@/assets/images/banners/cultural-products.jpg",
  import.meta.url
).href;
</script>
