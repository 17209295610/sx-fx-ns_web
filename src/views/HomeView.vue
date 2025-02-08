<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- 顶部轮播图部分 -->
    <div class="relative w-full bg-gray-900">
      <!-- 两侧虚化遮罩 -->
      <div
        class="absolute left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-20"
      ></div>
      <div
        class="absolute right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-20"
      ></div>

      <el-carousel
        :height="carouselHeight"
        :interval="5000"
        arrow="always"
        class="carousel-container"
      >
        <el-carousel-item v-for="(slide, index) in carouselSlides" :key="index">
          <div
            class="relative h-full w-full flex items-center justify-center overflow-hidden"
          >
            <div
              v-if="!imageLoaded[index]"
              class="absolute inset-0 bg-gray-100 animate-pulse"
            ></div>
            <div
              class="absolute inset-0 bg-cover bg-center blur-md opacity-30"
              :style="{ backgroundImage: `url(${slide.image})` }"
            ></div>

            <!-- 主图片容器 -->
            <div class="relative z-10 h-full flex items-center justify-center">
              <img
                :src="slide.image"
                :alt="slide.title"
                class="h-full w-auto object-cover"
                @load="handleImageLoad(index)"
              />
            </div>

            <!-- 文字内容 -->
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white z-20"
            >
              <div class="container mx-auto">
                <h2 class="text-4xl font-bold mb-3">{{ slide.title }}</h2>
                <p class="text-xl text-white/90">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 动漫形象展示 -->
    <div class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">品牌动漫形象</h2>
          <p class="text-gray-600 text-lg">传统与现代的完美融合</p>
          <div class="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              v-for="character in characters.slice(0, 2)"
              :key="character.name"
              class="character-card group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <!-- 角标装饰 -->
              <div class="corner-decoration top-left"></div>
              <div class="corner-decoration top-right"></div>
              <div class="corner-decoration bottom-left"></div>
              <div class="corner-decoration bottom-right"></div>

              <div
                class="relative w-full h-[400px] bg-gradient-to-b from-gray-50/50 to-white/30"
              >
                <img
                  :src="character.image"
                  :alt="character.name"
                  class="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                class="p-8 text-center bg-gradient-to-b from-white to-gray-50"
              >
                <h3
                  class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors"
                >
                  {{ character.name }}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ character.description }}
                </p>
                <div class="mt-6 flex justify-center gap-3">
                  <el-tag
                    v-for="tag in character.tags"
                    :key="tag"
                    class="px-4 py-1 rounded-full text-sm"
                    effect="plain"
                  >
                    {{ tag }}
                  </el-tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 文化亮点部分 -->
    <div class="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">文化亮点</h2>
          <p class="text-gray-600 text-lg">传统与创新的完美融合</p>
          <div class="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in culturalFeatures"
            :key="index"
            class="feature-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="feature.image"
                :alt="feature.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <div class="text-sm font-medium">{{ feature.category }}</div>
              </div>
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors"
              >
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                {{ feature.description }}
              </p>
              <div class="flex justify-between items-center">
                <el-tag size="small" :type="feature.tagType" effect="light">
                  {{ feature.tag }}
                </el-tag>
                <el-button type="primary" text class="flex items-center">
                  了解更多
                  <el-icon
                    class="ml-1 group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight />
                  </el-icon>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Collection,
  Medal,
  Present,
  ArrowRight,
} from "@element-plus/icons-vue";
import { ref, onMounted, onUnmounted } from "vue";
// 直接导入图片
import img1 from "../assets/images/Anime_image/祥泥仔1.jpg";
import img2 from "../assets/images/Anime_image/祥泥仔2.jpg";
import tradition from "../assets/images/Anime_image/features/传统制作工艺.jpg";
import innovation from "../assets/images/Anime_image/features/创新工艺.jpg";
import experience from "../assets/images/Anime_image/features/文化体验基地.jpg";

// 计算轮播图高度
const carouselHeight = ref("600px");

// 根据窗口大小调整轮播图高度
const updateCarouselHeight = () => {
  const isMobile = window.innerWidth < 1024;
  const headerHeight = isMobile ? 60 : 100;
  const height = Math.min(
    window.innerHeight - headerHeight,
    isMobile ? window.innerHeight * 0.6 : 800
  );
  console.log(
    "当前计算高度:",
    height,
    "窗口高度:",
    window.innerHeight,
    "移动端:",
    isMobile
  );
  carouselHeight.value = `${height}px`;
};

// 监听窗口大小变化
onMounted(() => {
  updateCarouselHeight();
  window.addEventListener("resize", updateCarouselHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateCarouselHeight);
});

// 轮播图数据
const carouselSlides = ref([
  {
    image: new URL("@/assets/images/slides/slide1.jpg", import.meta.url).href,
    title: "凤翔泥塑",
    description: "千年工艺 • 非遗传承",
  },
  {
    image: new URL("@/assets/images/slides/slide2.jpg", import.meta.url).href,
    title: "传统技艺",
    description: "匠心独运 • 精雕细琢",
  },
  {
    image: new URL("@/assets/images/slides/slide3.jpg", import.meta.url).href,
    title: "文化传承",
    description: "守正创新 • 薪火相传",
  },
  {
    image: new URL("@/assets/images/slides/slide4.jpg", import.meta.url).href,
    title: "艺术创新",
    description: "融古通今 • 再创辉煌",
  },
]);

const characters = ref([
  {
    name: "祥泥宝",
    description: "凤翔泥塑的文化传承者，以可爱的造型和传统服饰展现非遗魅力。",
    image: img1,
    tags: ["文化传承", "传统服饰", "艺术形象"],
  },
  {
    name: "祥泥宝",
    description:
      "活泼灵动的创新形象，融合传统与现代元素，展现凤翔泥塑的创新活力。",
    image: img2,
    tags: ["创新设计", "活力形象", "文化创新"],
  },
]);

// 将 newsItems 改为 culturalFeatures
const culturalFeatures = ref([
  {
    title: "千年工艺传承",
    description: "凤翔泥塑技艺历经千年传承，形成了独特的艺术风格和制作工艺。",
    category: "传统技艺",
    image: tradition,
    tag: "非遗传承",
    tagType: "success",
  },
  {
    title: "创新工艺展示",
    description: "融合现代设计理念，让传统艺术焕发新生。",
    category: "创新发展",
    image: innovation,
    tag: "匠心独运",
    tagType: "primary",
  },
  {
    title: "文化体验基地",
    description: "设立泥塑文化体验中心，让游客零距离感受非遗魅力。",
    category: "文化传播",
    image: experience,
    tag: "互动体验",
    tagType: "warning",
  },
]);

const imageLoaded = ref([]);
const handleImageLoad = (index) => {
  imageLoaded.value[index] = true;
};
</script>

<style scoped>
/* 修改轮播图样式 */
.carousel-container {
  position: relative;
}

/* 优化箭头按钮位置和样式 */
:deep(.el-carousel__arrow) {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.7);
  transform: scale(1.2);
  transition: all 0.3s ease;
  z-index: 30;
}

:deep(.el-carousel__arrow--left) {
  left: 30px;
}

:deep(.el-carousel__arrow--right) {
  right: 30px;
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(0, 0, 0, 0.6);
  transform: scale(1.3);
}

/* 调整图片容器样式 */
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 确保图片保持原始比例 */
.el-carousel__item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
}

/* 图片过渡动画 */
.el-carousel__item img {
  transition: transform 0.6s ease;
}

.el-carousel__item.is-active img {
  transform: scale(1.02);
}

.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 1rem;
}

.character-card {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.corner-decoration {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--el-color-primary);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.character-card:hover .corner-decoration {
  width: 30px;
  height: 30px;
  opacity: 1;
}

.top-left {
  top: 10px;
  left: 10px;
  border-right: 0;
  border-bottom: 0;
}

.top-right {
  top: 10px;
  right: 10px;
  border-left: 0;
  border-bottom: 0;
}

.bottom-left {
  bottom: 10px;
  left: 10px;
  border-right: 0;
  border-top: 0;
}

.bottom-right {
  bottom: 10px;
  right: 10px;
  border-left: 0;
  border-top: 0;
}

/* 添加渐变背景动画 */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.character-card:hover {
  transform: translateY(-5px);
}

/* Element Plus 按钮样式优化 */
:deep(.el-button) {
  font-weight: 500;
}

:deep(.el-tag) {
  border-radius: 16px;
  font-weight: 500;
}

/* 新闻卡片样式 */
.news-card {
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.news-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--el-color-primary),
    var(--el-color-success)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.news-card:hover::before {
  transform: scaleX(1);
}

/* 标签样式优化 */
:deep(.el-tag) {
  border-radius: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 按钮悬停效果 */
.el-button.is-text:hover {
  background: transparent;
  color: var(--el-color-primary-light-3);
}

/* 移动端文字缩小 */
@media (max-width: 640px) {
  .el-carousel__item .text-content {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }

  .el-carousel__item h2 {
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .el-carousel__item p {
    font-size: 0.75rem;
    line-height: 1.2;
  }
}

/* 添加移动端横屏适配 */
@media (max-width: 640px) and (orientation: landscape) {
  .el-carousel__item img {
    object-position: center 30%;
  }
}
</style>
