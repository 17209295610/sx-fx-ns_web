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
      <!-- 分类选择区域 -->
      <div class="mb-16">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold mb-4">文创产品系列</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            传统与现代的完美融合，让非遗文化融入生活的每个角落
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="group relative px-6 py-3 rounded-full transition-all duration-300"
            :class="[
              activeCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-primary/10',
            ]"
          >
            <!-- 分类名称 -->
            <span class="relative z-10 font-medium">{{ category.name }}</span>

            <!-- 悬浮提示 -->
            <div
              class="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
              <div
                class="bg-gray-900 text-white text-sm p-2 rounded-lg shadow-lg"
              >
                <p>{{ category.description }}</p>
                <div
                  class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"
                ></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- 当前分类描述 -->
      <div class="mb-12 text-center">
        <div
          class="inline-block bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 px-8 py-4 rounded-2xl"
        >
          <p class="text-gray-700 text-lg">
            {{ categories.find((c) => c.id === activeCategory)?.description }}
          </p>
        </div>
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
          <div class="relative overflow-hidden aspect-[4/3]">
            <el-image
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              fit="cover"
            >
              <template #placeholder>
                <div
                  class="flex items-center justify-center h-full bg-gray-100"
                >
                  <el-icon class="text-3xl text-gray-300"><Picture /></el-icon>
                </div>
              </template>
            </el-image>
            <!-- 分类标签 -->
            <div class="absolute top-4 left-4">
              <el-tag
                :type="product.tagType"
                effect="light"
                class="text-sm font-medium"
              >
                {{ product.category }}
              </el-tag>
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="p-6">
            <h3
              class="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
            >
              {{ product.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ product.description }}
            </p>
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

      <!-- 敬请期待卡片 -->
      <div
        class="group bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center"
      >
        <el-icon class="text-4xl text-gray-400 mb-4"><Plus /></el-icon>
        <h3 class="text-xl font-bold text-gray-400 mb-2">更多产品</h3>
        <p class="text-gray-500">敬请期待...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Picture, Plus } from "@element-plus/icons-vue";

// 导入图片
import cup1 from "../assets/images/文创产品/杯具1.jpg";
import cup2 from "../assets/images/文创产品/杯具2.jpg";
import cup3 from "../assets/images/文创产品/杯具3.jpg";
import cup4 from "../assets/images/文创产品/杯具4.jpg";
import penHolder from "../assets/images/文创产品/笔筒.jpg";
import stationery from "../assets/images/文创产品/文具.jpg";
import stationery2 from "../assets/images/文创产品/文具2.jpg";
import stationery3 from "../assets/images/文创产品/文具3.jpg";
import brooch1 from "../assets/images/文创产品/胸针1.jpg";
import brooch2 from "../assets/images/文创产品/胸针2.jpg";
import fashion1 from "../assets/images/文创产品/时装1.jpg";
import fashion2 from "../assets/images/文创产品/时装2.jpg";
import fashion3 from "../assets/images/文创产品/时装3.jpg";
import fashion4 from "../assets/images/文创产品/时装4.jpg";
import phone1 from "../assets/images/文创产品/手机壳1.jpg";
import phone2 from "../assets/images/文创产品/手机壳2.jpg";

// 产品分类
const categories = [
  {
    id: "cups",
    name: "文创杯具",
    description:
      "匠心独运的艺术茶具，让每一次品茗都成为一场与传统文化的优雅对话",
  },
  {
    id: "fashion",
    name: "文创服饰",
    description:
      "将非遗元素融入现代时尚，让传统文化与潮流完美邂逅，展现东方美学新风貌",
  },
  {
    id: "accessories",
    name: "文创配饰",
    description: "精致典雅的艺术配饰，让传统文化成为日常生活中最独特的点缀",
  },
  {
    id: "stationery",
    name: "文创文具",
    description:
      "以传统工艺装点文房四宝，让每次书写都充满文化底蕴，激发无限创意灵感",
  },
];

const activeCategory = ref("cups");

// 产品数据
const products = ref([
  // 杯具系列
  {
    id: 1,
    title: "祥瑞虎娃杯",
    description:
      "杯身饰以凤翔泥塑经典图案，虎娃形象灵动可爱，寓意守护平安。细腻的笔触勾勒出虎娃的灵动神态，色彩浓艳且层次丰富。",
    category: "文创杯具",
    tagType: "success",
    tags: ["传统图案", "实用器皿", "吉祥寓意"],
    image: cup1,
  },
  {
    id: 2,
    title: "传统纹样杯",
    description:
      "杯身融入传统纹样设计，简约而不失韵味。每一笔勾勒都传承着匠人的用心，让饮品更具文化气息。",
    category: "文创杯具",
    tagType: "success",
    tags: ["传统纹样", "日常实用", "文化传承"],
    image: cup2,
  },
  {
    id: 3,
    title: "艺术图腾杯",
    description:
      "将凤翔泥塑的艺术图腾融入杯身设计，黑红相间的色彩对比强烈，现代感与传统美的完美结合。",
    category: "文创杯具",
    tagType: "success",
    tags: ["现代设计", "艺术图腾", "东方美学"],
    image: cup3,
  },
  {
    id: 4,
    title: "禅意茶杯",
    description: "简约的东方美学设计，融入传统纹样，让品茶更具文化意境。",
    category: "文创杯具",
    tagType: "success",
    tags: ["禅意设计", "茶文化", "东方美学"],
    image: cup4,
  },

  // 文具系列
  {
    id: 5,
    title: "神兽笔筒",
    description:
      "以凤翔泥塑中常见的神兽造型为蓝本设计。神兽双目圆睁，威风凛凛，有着镇宅辟邪之意。",
    category: "文创文具",
    tagType: "primary",
    tags: ["传统神兽", "实用文具", "镇宅辟邪"],
    image: penHolder,
  },
  {
    id: 6,
    title: "传统文具套装",
    description: "融入凤翔泥塑元素的文具套装，让书写充满传统文化的韵味。",
    category: "文创文具",
    tagType: "primary",
    tags: ["文具套装", "传统元素", "实用设计"],
    image: stationery,
  },
  {
    id: 15,
    title: "创意文具组合",
    description: "将传统图案与现代文具完美结合，让书写充满艺术气息。",
    category: "文创文具",
    tagType: "primary",
    tags: ["创意设计", "实用文具", "艺术风格"],
    image: stationery2,
  },
  {
    id: 16,
    title: "文创办公套装",
    description: "以传统元素装点办公用品，让工作环境充满文化韵味。",
    category: "文创文具",
    tagType: "primary",
    tags: ["办公用品", "传统元素", "文化创新"],
    image: stationery3,
  },

  // 配饰系列
  {
    id: 7,
    title: "灵动公鸡胸针",
    description:
      "造型选取凤翔泥塑中的灵动公鸡，象征着新的开始与希望。胸针虽小，但工艺精湛。",
    category: "文创配饰",
    tagType: "warning",
    tags: ["精致配饰", "传统图案", "寓意美好"],
    image: brooch1,
  },
  {
    id: 8,
    title: "祥瑞胸针",
    description: "以传统祥瑞图案为设计灵感，精致小巧，适合日常佩戴。",
    category: "文创配饰",
    tagType: "warning",
    tags: ["传统图案", "日常佩戴", "祥瑞寓意"],
    image: brooch2,
  },

  // 服饰系列
  {
    id: 9,
    title: "民族风时装",
    description:
      "将凤翔泥塑的传统图案元素融入现代服装设计，展现东方美学与现代时尚的完美融合。",
    category: "文创服饰",
    tagType: "danger",
    tags: ["民族风格", "现代设计", "文化传承"],
    image: fashion1,
  },
  {
    id: 10,
    title: "艺术时装",
    description: "大胆的艺术设计与传统文化元素的碰撞，打造独特的时尚风格。",
    category: "文创服饰",
    tagType: "danger",
    tags: ["艺术设计", "时尚元素", "文化创新"],
    image: fashion2,
  },
  {
    id: 13,
    title: "运动卫衣",
    description: "将传统图案与现代运动服饰结合，让传统文化融入日常运动生活。",
    category: "文创服饰",
    tagType: "danger",
    tags: ["运动风格", "传统元素", "日常穿搭"],
    image: fashion3,
  },
  {
    id: 14,
    title: "休闲T恤",
    description: "以凤翔泥塑元素点缀休闲服装，打造独特的文化时尚风格。",
    category: "文创服饰",
    tagType: "danger",
    tags: ["休闲风格", "文化元素", "时尚设计"],
    image: fashion4,
  },

  // 手机壳系列
  {
    id: 11,
    title: "传统图案手机壳",
    description:
      "将凤翔泥塑的传统图案融入手机壳设计，让科技产品也能展现传统文化的魅力。",
    category: "文创配饰",
    tagType: "warning",
    tags: ["科技配饰", "传统图案", "日常实用"],
    image: phone1,
  },
  {
    id: 12,
    title: "艺术手机壳",
    description: "现代艺术设计与传统元素的结合，让手机壳成为一件随身艺术品。",
    category: "文创配饰",
    tagType: "warning",
    tags: ["艺术设计", "现代风格", "个性展现"],
    image: phone2,
  },
]);

// 根据当前分类筛选产品
const currentProducts = computed(() => {
  return products.value.filter((product) => {
    switch (activeCategory.value) {
      case "cups":
        return product.category === "文创杯具";
      case "fashion":
        return product.category === "文创服饰";
      case "accessories":
        return product.category === "文创配饰";
      case "stationery":
        return product.category === "文创文具";
      default:
        return true;
    }
  });
});

// 添加banner背景图片
const bannerBg = new URL(
  "../assets/images/banners/cultural-products.jpg",
  import.meta.url
).href;
</script>

<style scoped>
/* 优化标签样式 */
:deep(.el-tag) {
  @apply border-none shadow-sm;
}

/* 添加卡片悬停动画 */
.group:hover {
  @apply transform -translate-y-2;
}

/* 优化图片过渡效果 */
.el-image {
  @apply transition-transform duration-700;
}

.group:hover .el-image {
  @apply scale-110;
}

/* 添加图片悬停效果 */
.el-image {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 优化按钮样式 */
:deep(.el-button) {
  border-radius: 8px;
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

/* 分类标签栏动画 */
:deep(.category-tabs .el-tabs__item) {
  @apply relative overflow-hidden;
}

:deep(.category-tabs .el-tabs__item)::after {
  content: "";
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300;
}

:deep(.category-tabs .el-tabs__item.is-active)::after {
  @apply scale-x-100;
}
</style>
