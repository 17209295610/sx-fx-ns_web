<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- 顶部横幅 -->
    <div class="relative h-[500px] bg-primary overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-40"
        :style="{ backgroundImage: `url(${bannerBg})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"
      ></div>
      <div class="container mx-auto px-4 h-full flex items-center relative">
        <div class="max-w-3xl">
          <div class="inline-block bg-primary/80 px-4 py-2 rounded-lg mb-6">
            <span class="text-white/90 text-lg">非物质文化遗产</span>
          </div>
          <h1 class="text-6xl font-bold mb-8 text-white">凤翔泥塑制作工艺</h1>
          <p class="text-2xl text-white/90 font-light">
            匠心传承 • 十一道工序 • 精益求精
          </p>
        </div>
      </div>
    </div>

    <!-- 简介部分 -->
    <div
      class="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
    >
      <!-- 背景装饰 -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(199,93,56,0.1),rgba(255,255,255,0)_50%)]"
      ></div>

      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- 标题部分 -->
          <div class="text-center mb-20">
            <span
              class="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full mb-6 text-base font-medium"
            >
              千年工艺
            </span>
            <h2 class="text-4xl font-bold mb-8">凤翔泥塑制作工艺</h2>
            <p class="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              凤翔泥塑是陕西省非物质文化遗产，千百年来以其独特的艺术魅力传承至今。制作工艺精湛细腻，需经过十一道严格工序，每一步都凝聚着匠人的智慧与匠心。
            </p>
          </div>

          <!-- 内容部分 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 精湛工艺卡片 -->
            <div
              class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div class="mb-4">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <el-icon class="text-3xl text-primary"><Tools /></el-icon>
                </div>
              </div>
              <div class="text-center">
                <h3 class="text-lg font-bold mb-3 text-gray-900">传统技艺</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  十一道精细工序，每一步都严格把控，传承百年匠心，展现非遗魅力。
                </p>
              </div>
            </div>

            <!-- 工序特点卡片 -->
            <div
              class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div class="mb-4">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <el-icon class="text-3xl text-primary"
                    ><Collection
                  /></el-icon>
                </div>
              </div>
              <div class="text-center">
                <h3 class="text-lg font-bold mb-3 text-gray-900">工序特点</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  每一道工序都蕴含着匠人的执着与追求，从泥料选取到造型塑形，从细节雕琢到色彩点染，层层把关，精益求精。传统与创新的碰撞，让每件作品都成为独特的艺术珍品。
                </p>
              </div>
            </div>

            <!-- 文化价值卡片 -->
            <div
              class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div class="mb-4">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <el-icon class="text-3xl text-primary"><Medal /></el-icon>
                </div>
              </div>
              <div class="text-center">
                <h3 class="text-lg font-bold mb-3 text-gray-900">文化价值</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  凤翔泥塑承载着深厚的文化底蕴，是中国传统艺术的瑰宝。它不仅展现了民间艺术的独特魅力，更是非物质文化遗产的重要组成部分，见证着中华文明的传承与发展。
                </p>
              </div>
            </div>
          </div>

          <!-- 分隔装饰 -->
          <div class="relative h-32 flex items-center justify-center">
            <div class="flex items-center gap-4">
              <div
                class="w-16 h-px bg-gradient-to-r from-transparent to-primary/20"
              ></div>
              <div
                class="w-3 h-3 rounded-full border-2 border-primary/20"
              ></div>
              <div
                class="w-16 h-px bg-gradient-to-l from-transparent to-primary/20"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 工序展示部分 -->
    <div class="py-16">
      <div class="container mx-auto px-4">
        <!-- 工序标题 -->
        <div class="text-center mb-12">
          <div class="inline-block bg-primary/10 px-4 py-1 rounded-full mb-4">
            <span class="text-primary font-medium">制作流程</span>
          </div>
          <h2 class="text-4xl font-bold mb-6">匠心工艺 • 十一道工序</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <!-- 工序时间轴展示 -->
        <div class="max-w-6xl mx-auto">
          <el-timeline>
            <el-timeline-item
              v-for="(step, index) in craftingSteps"
              :key="index"
              :type="index % 2 === 0 ? 'primary' : 'success'"
              size="large"
              :hollow="true"
            >
              <el-card class="process-card" shadow="hover">
                <div class="flex flex-col lg:flex-row gap-8">
                  <!-- 左侧：图片展示 -->
                  <div class="lg:w-2/5">
                    <div class="relative rounded-lg overflow-hidden">
                      <!-- 序号标记 -->
                      <div class="absolute top-4 left-4 z-10">
                        <div
                          class="bg-white/90 backdrop-blur text-primary px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                          第{{ index + 1 }}步
                        </div>
                      </div>

                      <!-- 图片容器 -->
                      <div class="aspect-[4/3] relative">
                        <el-image
                          :src="step.image"
                          fit="contain"
                          class="absolute inset-0 w-full h-full object-contain bg-gray-100"
                        />
                      </div>

                      <!-- 标题遮罩 -->
                      <div class="bg-primary py-3 px-4">
                        <h3 class="text-white text-lg font-bold text-center">
                          {{ step.title }}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <!-- 右侧：内容展示 -->
                  <div class="lg:w-3/5 flex flex-col justify-center space-y-6">
                    <!-- 工序描述 -->
                    <el-card
                      shadow="hover"
                      class="border-none bg-gradient-to-r from-primary/5 to-transparent"
                    >
                      <template #header>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-3">
                            <el-tag
                              :type="index % 2 === 0 ? 'primary' : 'success'"
                              effect="dark"
                              class="text-base px-4 py-1"
                              round
                            >
                              工序描述
                            </el-tag>
                          </div>
                        </div>
                      </template>
                      <p class="text-gray-600 text-lg leading-relaxed">
                        {{ step.description }}
                      </p>
                      <div class="mt-4 text-sm text-primary">
                        <strong>要点：</strong>{{ step.keyPoints }}
                      </div>
                      <!-- 添加耗时和难度展示 -->
                      <div
                        class="mt-4 flex items-center justify-between text-sm border-t border-gray-100 pt-4"
                      >
                        <div class="flex items-center gap-2">
                          <el-icon class="text-primary"><Timer /></el-icon>
                          <span class="text-gray-600"
                            >制作耗时：{{ step.duration }}</span
                          >
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="text-gray-600">难度：</span>
                          <div class="flex">
                            <el-icon
                              v-for="n in step.difficulty"
                              :key="n"
                              class="text-primary"
                            >
                              <Star />
                            </el-icon>
                          </div>
                        </div>
                      </div>
                    </el-card>

                    <!-- 工艺要点 -->
                    <el-card shadow="hover" class="border-none">
                      <template #header>
                        <div class="flex items-center gap-3">
                          <el-tag
                            :type="index % 2 === 0 ? 'primary' : 'success'"
                            effect="dark"
                            class="text-base px-4 py-1"
                            round
                          >
                            工艺要点
                          </el-tag>
                          <div class="h-px flex-grow bg-primary/10"></div>
                        </div>
                      </template>
                      <div class="space-y-4">
                        <div
                          v-for="(detail, i) in step.details"
                          :key="i"
                          class="flex items-start gap-3 group"
                        >
                          <div
                            class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                          >
                            <el-icon class="text-primary"><Check /></el-icon>
                          </div>
                          <div class="flex-1">
                            <el-text
                              class="text-gray-600 text-base"
                              :type="index % 2 === 0 ? 'primary' : 'success'"
                            >
                              {{ detail }}
                            </el-text>
                          </div>
                        </div>
                      </div>
                    </el-card>
                  </div>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <!-- 工艺特色 -->
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">工艺特色</h2>
            <div class="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(feature, index) in craftFeatures"
              :key="index"
              class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4"
              >
                <el-icon class="text-2xl text-primary">
                  <component :is="feature.icon" />
                </el-icon>
              </div>
              <h3 class="text-lg font-bold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Collection,
  Tools,
  Medal,
  Check,
  Timer,
  Star,
} from "@element-plus/icons-vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";

// 添加banner背景图片
const bannerBg = new URL(
  "../assets/images/crafting/banner-bg.jpg",
  import.meta.url
).href;

const craftingSteps = ref([
  {
    title: "选料",
    description: "精选优质黄土和红土，确保泥料纯净、韧性适中。",
    image: new URL("../assets/images/Process_diagrams/1.jpg", import.meta.url)
      .href,
    details: ["选用优质黄土和红土", "去除杂质和颗粒", "调配最佳黏度"],
    keyPoints: "泥料纯度和韧性直接影响成品质量",
    duration: "1-2小时",
    difficulty: 2,
  },
  {
    title: "和泥",
    description: "将泥料与水按比例调配，反复揉捏，使其均匀细腻。",
    image: new URL("../assets/images/Process_diagrams/2.jpg", import.meta.url)
      .href,
    details: ["精确控制水土比例", "反复揉捏除气泡", "达到最佳塑性"],
    keyPoints: "泥料的均匀性决定作品的稳定性",
    duration: "2-3小时",
    difficulty: 2,
  },
  {
    title: "打坯",
    description: "根据作品设计手工塑形，形成基本轮廓。",
    image: new URL("../assets/images/Process_diagrams/3.jpg", import.meta.url)
      .href,
    details: ["构建基本骨架", "塑造主体轮廓", "预留细节空间"],
    keyPoints: "需要准确把握比例和造型",
    duration: "3-4小时",
    difficulty: 3,
  },
  {
    title: "修胚",
    description: "精细修整作品造型，完善细节。",
    image: new URL("../assets/images/Process_diagrams/4.jpg", import.meta.url)
      .href,
    details: ["修整表面纹理", "完善局部细节", "确保整体协调"],
    keyPoints: "考验工匠的技艺水平",
    duration: "4-6小时",
    difficulty: 4,
  },
  {
    title: "晾干",
    description: "自然阴干，控制干燥速度和程度。",
    image: new URL("../assets/images/Process_diagrams/5.jpg", import.meta.url)
      .href,
    details: ["选择适宜环境", "控制干燥速度", "避免开裂变形"],
    keyPoints: "温度和湿度的控制至关重要",
    duration: "48-72小时",
    difficulty: 1,
  },
  {
    title: "合货",
    description: "将分件制作的部分进行组合。",
    image: new URL("../assets/images/Process_diagrams/6.jpg", import.meta.url)
      .href,
    details: ["精准对位组合", "加固连接处", "保持整体平衡"],
    keyPoints: "需要确保各部件完美契合",
    duration: "2-3小时",
    difficulty: 3,
  },
  {
    title: "挂粉",
    description: "在作品表面均匀涂抹白粉底层。",
    image: new URL("../assets/images/Process_diagrams/7.jpg", import.meta.url)
      .href,
    details: ["调配白粉浆料", "均匀涂抹底层", "打造光滑表面"],
    keyPoints: "底层处理影响后续上色效果",
    duration: "2-3小时",
    difficulty: 2,
  },
  {
    title: "勾线",
    description: "勾勒作品的轮廓和细节线条。",
    image: new URL("../assets/images/Process_diagrams/8.jpg", import.meta.url)
      .href,
    details: ["选用专业工具", "精准勾画线条", "突出造型特征"],
    keyPoints: "线条的流畅度体现作品韵味",
    duration: "3-4小时",
    difficulty: 4,
  },
  {
    title: "上色",
    description: "使用传统颜料着色，赋予作品生命力。",
    image: new URL("../assets/images/Process_diagrams/9.jpg", import.meta.url)
      .href,
    details: ["调配传统颜料", "分层上色技法", "把控色彩搭配"],
    keyPoints: "色彩运用需要丰富经验",
    duration: "5-6小时",
    difficulty: 4,
  },
  {
    title: "上漆",
    description: "涂抹保护漆，提升作品光泽度。",
    image: new URL("../assets/images/Process_diagrams/10.jpg", import.meta.url)
      .href,
    details: ["选用优质漆料", "控制漆层厚度", "确保均匀光亮"],
    keyPoints: "漆层保护决定作品寿命",
    duration: "2-3小时",
    difficulty: 2,
  },
  {
    title: "成品",
    description: "最终完成品，展现匠心工艺。",
    image: new URL("../assets/images/Process_diagrams/11.jpg", import.meta.url)
      .href,
    details: ["全面品质检查", "修复瑕疵之处", "确认完美呈现"],
    keyPoints: "最后检验确保作品品质",
    duration: "2-3小时",
    difficulty: 3,
  },
]);

const craftFeatures = ref([
  {
    icon: "Picture",
    title: "传统技艺",
    description: "十一道精细工序，传承百年匠心。",
  },
  {
    icon: "Picture",
    title: "工艺特色",
    description: "造型生动，色彩艳丽，富有民间特色。",
  },
  {
    icon: "Picture",
    title: "文化价值",
    description: "凝聚民间智慧，展现非遗魅力。",
  },
]);
</script>

<style scoped>
.process-card {
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.el-timeline-item__node--large) {
  width: 16px;
  height: 16px;
}

:deep(.el-timeline-item__tail) {
  border-left: 2px solid var(--el-border-color-lighter);
  left: 7px;
}

:deep(.el-card) {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #fff;
}

:deep(.el-card:hover) {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

:deep(.el-timeline) {
  padding-left: 20px;
}

:deep(.el-timeline-item__wrapper) {
  padding-left: 30px;
}

:deep(.el-card__body) {
  padding: 24px;
}

:deep(.el-image) {
  display: block;
  width: 100%;
  height: 100%;
}

:deep(.el-timeline-item__content) {
  overflow: visible;
}

:deep(.el-card.border-none) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

:deep(.el-card__header) {
  padding: 12px 20px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

:deep(.el-tag) {
  border: none;
}

:deep(.el-text) {
  line-height: 1.6;
}
</style>
