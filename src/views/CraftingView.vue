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
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            凤翔泥塑是陕西省非物质文化遗产，具有悠久的历史传承。其制作工艺精湛，需要经过十一道严格的工序，每一道工序都凝聚着匠人的智慧与匠心，展现了传统手工艺的精妙之处。
          </p>
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
                        <div class="flex items-center gap-3">
                          <el-tag
                            :type="index % 2 === 0 ? 'primary' : 'success'"
                            effect="dark"
                            class="text-base px-4 py-1"
                            round
                          >
                            工序描述
                          </el-tag>
                          <div class="h-px flex-grow bg-primary/10"></div>
                        </div>
                      </template>
                      <p class="text-gray-600 text-lg leading-relaxed">
                        {{ step.description }}
                      </p>
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

                    <!-- 补充信息 -->
                    <div class="flex gap-4">
                      <el-tag
                        :type="index % 2 === 0 ? 'info' : 'warning'"
                        class="flex-1 !flex items-center justify-center py-2"
                        effect="plain"
                      >
                        <el-icon class="mr-1"><Timer /></el-icon>
                        工序耗时：约 {{ step.duration || "1-2" }} 小时
                      </el-tag>
                      <el-tag
                        :type="index % 2 === 0 ? 'info' : 'warning'"
                        class="flex-1 !flex items-center justify-center py-2"
                        effect="plain"
                      >
                        <el-icon class="mr-1"><Tools /></el-icon>
                        难度系数：{{ step.difficulty || "中等" }}
                      </el-tag>
                    </div>
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
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Picture, Check, Tools, Timer } from "@element-plus/icons-vue";
import TheFooter from "@/components/layout/TheFooter.vue";

// 添加banner背景图片
const bannerBg = new URL(
  "../assets/images/crafting/banner-bg.jpg",
  import.meta.url
).href;

const craftingSteps = ref([
  {
    title: "造型",
    description: "第一步是制作泥塑的原型，这是最基础也是最关键的工序。",
    image: new URL("../assets/images/Process_diagrams/1.jpg", import.meta.url)
      .href,
    details: ["根据设计构思塑造形态", "精心雕琢细节特征", "确保造型比例协调"],
  },
  {
    title: "翻模",
    description: "将原型制作成模具，为后续批量生产做准备。",
    image: new URL("../assets/images/Process_diagrams/2.jpg", import.meta.url)
      .href,
    details: ["制作石膏模具", "保证模具完整性", "细节准确复制"],
  },
  {
    title: "入模",
    description: "将泥料注入模具中，确保泥料充分填满每个细节。",
    image: new URL("../assets/images/Process_diagrams/3.jpg", import.meta.url)
      .href,
    details: ["泥料均匀注入", "避免气泡产生", "确保成型完整"],
  },
  {
    title: "触摸",
    description: "对成型后的作品进行初步修整和手感处理。",
    image: new URL("../assets/images/Process_diagrams/4.jpg", import.meta.url)
      .href,
    details: ["表面修整处理", "触感细节调整", "保持造型完整"],
  },
  {
    title: "插铁钎",
    description: "在需要的位置插入铁钎，增强作品结构强度。",
    image: new URL("../assets/images/Process_diagrams/5.jpg", import.meta.url)
      .href,
    details: ["准确定位插入", "加固作品结构", "确保安全稳固"],
  },
  {
    title: "合货",
    description: "将分件制作的部分进行组合，形成完整作品。",
    image: new URL("../assets/images/Process_diagrams/6.jpg", import.meta.url)
      .href,
    details: ["精准对位组合", "接合处理平整", "保证整体性"],
  },
  {
    title: "挂粉",
    description: "在作品表面均匀涂抹白粉，为上色做准备。",
    image: new URL("../assets/images/Process_diagrams/7.jpg", import.meta.url)
      .href,
    details: ["白粉均匀涂抹", "打造光滑底色", "为上色打基础"],
  },
  {
    title: "勾线",
    description: "用笔勾勒作品的轮廓和细节线条。",
    image: new URL("../assets/images/Process_diagrams/8.jpg", import.meta.url)
      .href,
    details: ["准确勾画轮廓", "突出造型特征", "强化艺术效果"],
  },
  {
    title: "上色",
    description: "为作品着色，赋予作品丰富的色彩层次。",
    image: new URL("../assets/images/Process_diagrams/9.jpg", import.meta.url)
      .href,
    details: ["选用优质颜料", "色彩层次分明", "体现艺术效果"],
  },
  {
    title: "上漆",
    description: "涂抹保护漆，提升作品光泽度和保护效果。",
    image: new URL("../assets/images/Process_diagrams/10.jpg", import.meta.url)
      .href,
    details: ["均匀涂抹保护漆", "增加作品光泽", "延长保存时间"],
  },
  {
    title: "成品",
    description: "最终完成品，展现凤翔泥塑的独特魅力。",
    image: new URL("../assets/images/Process_diagrams/11.jpg", import.meta.url)
      .href,
    details: ["成品质量检查", "艺术效果评估", "完美呈现作品"],
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
