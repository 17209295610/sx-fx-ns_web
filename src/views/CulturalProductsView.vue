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
    <div class="container mx-auto px-4 py-16">
      <!-- 分类标签栏 -->
      <div class="mb-12">
        <el-tabs v-model="activeCategory" class="category-tabs">
          <el-tab-pane
            v-for="category in categories"
            :key="category.id"
            :label="category.name"
            :name="category.id"
          >
            <!-- 分类描述 -->
            <div class="text-center mb-8">
              <p class="text-gray-600">{{ category.description }}</p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 产品展示网格 -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="product in currentProducts"
          :key="product.id"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
        >
          <!-- 图片容器 -->
          <div class="relative overflow-hidden aspect-square">
            <div class="absolute inset-0 bg-gray-100 animate-pulse"></div>
            <el-image
              :src="product.image || '/placeholder.jpg'"
              :alt="product.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              fit="cover"
            >
              <template #placeholder>
                <div class="flex items-center justify-center h-full">
                  <el-icon class="text-3xl text-gray-300"><Picture /></el-icon>
                </div>
              </template>
            </el-image>
            <!-- 分类标签 -->
            <div class="absolute top-4 left-4">
              <el-tag :type="product.tagType" effect="light" class="text-sm">
                {{ product.category }}
              </el-tag>
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="p-6 space-y-4">
            <div>
              <h3
                class="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
              >
                {{ product.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ product.description }}
              </p>
            </div>

            <!-- 产品特色标签 -->
            <div class="pt-4 border-t border-gray-100">
              <div class="flex flex-wrap gap-2">
                <el-tag
                  v-for="tag in product.tags"
                  :key="tag"
                  size="small"
                  effect="plain"
                  class="text-xs"
                >
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 敬请期待卡片 -->
      <div
        class="group bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center"
      >
        <el-icon class="text-4xl text-gray-400 mb-4"><Plus /></el-icon>
        <h3 class="text-xl font-bold text-gray-400 mb-2">更多产品</h3>
        <p class="text-gray-500">敬请期待...</p>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Picture, Plus } from "@element-plus/icons-vue";
import TheFooter from "@/components/layout/TheFooter.vue";

// 产品分类
const categories = [
  {
    id: "daily",
    name: "生活用品",
    description: "让传统文化融入日常生活，体验非遗之美",
  },
  {
    id: "ornament",
    name: "文创饰品",
    description: "独特的艺术设计，让传统工艺焕发新生",
  },
  {
    id: "stationery",
    name: "文具用品",
    description: "精致实用的文创文具，让学习工作更有趣",
  },
  {
    id: "gift",
    name: "伴手礼品",
    description: "富有文化底蕴的精美礼品，传递美好祝福",
  },
];

const activeCategory = ref("daily");

// 示例产品数据
const products = ref([
  {
    id: 1,
    title: "泥塑笔筒",
    description:
      "传统工艺与现代办公的完美结合，让您的办公桌充满文化气息，每件作品都由非遗传承人手工制作",
    category: "文具用品",
    tagType: "success",
    tags: ["手工制作", "实用设计", "传统工艺", "文化创新"],
    image: "", // 暂时为空
  },
  {
    id: 2,
    title: "十二生肖挂饰",
    description:
      "精美的十二生肖泥塑挂件，融合传统造型与现代美学，每个生肖都蕴含着独特的文化寓意",
    category: "文创饰品",
    tagType: "warning",
    tags: ["非遗技艺", "文化传承", "艺术收藏", "传统文化"],
    image: "", // 暂时为空
  },
  // 添加更多示例产品
  {
    id: 3,
    title: "茶宠摆件",
    description:
      "将传统泥塑艺术与茶文化完美结合，为您的茶席增添文化气息，让品茶更具仪式感",
    category: "生活用品",
    tagType: "primary",
    tags: ["茶文化", "艺术摆件", "传统工艺", "生活美学"],
    image: "", // 暂时为空
  },
  {
    id: 4,
    title: "文创书签",
    description:
      "以凤翔泥塑元素为灵感，设计独特的书签系列，让阅读充满传统文化的韵味",
    category: "文具用品",
    tagType: "info",
    tags: ["创意设计", "文化元素", "实用文具", "艺术收藏"],
    image: "", // 暂时为空
  },
]);

// 根据当前分类筛选产品
const currentProducts = computed(() => {
  return products.value.filter((product) => {
    switch (activeCategory.value) {
      case "daily":
        return product.category === "生活用品";
      case "ornament":
        return product.category === "文创饰品";
      case "stationery":
        return product.category === "文具用品";
      case "gift":
        return product.category === "伴手礼品";
      default:
        return true;
    }
  });
});

// 添加banner背景图片
const bannerBg = new URL(
  "@/assets/images/banners/cultural-products.jpg",
  import.meta.url
).href;
</script>

<style scoped>
/* 添加图片悬停效果 */
.el-image {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 优化按钮样式 */
:deep(.el-button) {
  border-radius: 8px;
}

/* 标签样式优化 */
:deep(.el-tag) {
  border: none;
}

/* 分类标签栏样式 */
:deep(.category-tabs .el-tabs__nav) {
  display: flex;
  justify-content: center;
  border: none;
}

:deep(.category-tabs .el-tabs__item) {
  font-size: 1.1rem;
  padding: 0 2rem;
}

:deep(.category-tabs .el-tabs__active-bar) {
  background-color: var(--el-color-primary);
}
</style>
