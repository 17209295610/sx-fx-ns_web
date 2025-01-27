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
          <h1 class="text-6xl font-bold mb-8 text-white">凤翔泥塑历史文化</h1>
          <p class="text-2xl text-white/90 font-light">
            千年匠心 • 文化传承 • 艺术精髓
          </p>
        </div>
      </div>
    </div>

    <!-- 泥塑起源 -->
    <div id="origin" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <!-- 标题部分 -->
        <div class="text-center mb-16">
          <el-tag type="success" class="mb-4 text-lg px-6 py-2" effect="plain"
            >传统技艺</el-tag
          >
          <h2 class="text-4xl font-bold mb-6">泥塑起源</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <!-- 内容部分 -->
        <div class="space-y-12">
          <!-- 概述部分 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative group">
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"
              ></div>
              <div class="relative">
                <el-carousel
                  :interval="4000"
                  type="card"
                  height="400px"
                  class="rounded-xl shadow-lg overflow-hidden"
                >
                  <el-carousel-item
                    v-for="(image, index) in craftImages"
                    :key="index"
                  >
                    <el-image
                      :src="image.url"
                      fit="cover"
                      class="w-full h-full"
                      :preview-src-list="craftImages.map((img) => img.url)"
                    >
                      <template #placeholder>
                        <div
                          class="flex items-center justify-center h-full bg-gray-100"
                        >
                          <el-icon class="text-4xl text-gray-400 animate-spin"
                            ><Loading
                          /></el-icon>
                        </div>
                      </template>
                    </el-image>
                    <div
                      class="absolute bottom-4 left-4 right-4 bg-black/70 px-4 py-2 rounded-lg"
                    >
                      <p class="text-white/90 text-sm">
                        {{ image.description }}
                      </p>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

            <div class="space-y-6">
              <div
                class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3
                  class="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2"
                >
                  <el-icon class="text-primary"><Collection /></el-icon>
                  历史渊源
                </h3>
                <div class="space-y-4">
                  <p class="text-gray-600 leading-relaxed">
                    凤翔泥塑起源于陕西省宝鸡市凤翔区，是中国著名的民间工艺品。其历史可追溯至新石器时代的仰韶文化时期，距今已有6000多年历史。考古发现表明，早在先秦时期，凤翔地区就已经出现了具有艺术价值的陶俑和泥塑作品。
                  </p>
                  <p class="text-gray-600 leading-relaxed">
                    作为关中文化的重要组成部分，凤翔泥塑深深植根于当地的历史文化土壤中，吸收了周秦文化的精髓，并在漫长的发展过程中形成了独具特色的艺术风格。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 特点分析 -->
          <div class="bg-white rounded-xl shadow-md p-8">
            <h3 class="text-2xl font-bold mb-6 text-center">艺术特征</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="(feature, index) in originFeatures"
                :key="index"
                class="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div class="flex flex-col items-center text-center">
                  <el-icon class="text-primary text-3xl mb-4"
                    ><component :is="feature.icon"
                  /></el-icon>
                  <h4 class="font-bold text-lg mb-2">{{ feature.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ feature.content }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 制作工艺 -->
          <div class="bg-white rounded-xl shadow-md p-8">
            <h3 class="text-2xl font-bold mb-6 text-center">传统工艺</h3>
            <el-steps :active="7" finish-status="success" align-center>
              <el-step
                v-for="(step, index) in craftSteps"
                :key="index"
                :title="step.title"
                :description="step.description"
              />
            </el-steps>
          </div>

          <!-- 文化价值 -->
          <el-card class="bg-primary/5 border-none">
            <template #header>
              <div class="flex items-center gap-2">
                <el-icon class="text-xl"><Star /></el-icon>
                <span class="font-bold">文化价值</span>
              </div>
            </template>
            <div class="space-y-3">
              <p
                v-for="(value, index) in culturalValues"
                :key="index"
                class="flex items-start gap-2 text-gray-600"
              >
                <el-icon class="text-primary mt-1"><Check /></el-icon>
                <span>{{ value }}</span>
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div id="development" class="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <!-- 标题部分 -->
        <div class="text-center mb-12">
          <el-tag type="primary" class="mb-4 text-lg px-6 py-2" effect="plain"
            >历史沿革</el-tag
          >
          <h2 class="text-3xl font-bold mb-4">发展历程</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <!-- 时间线内容 -->
        <el-timeline>
          <el-timeline-item
            v-for="(stage, index) in developmentStages"
            :key="index"
            :type="stage.type"
            size="large"
            :hollow="true"
          >
            <el-card
              class="mb-8 hover:shadow-lg transition-shadow duration-300"
            >
              <template #header>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <el-icon class="text-2xl text-primary"
                      ><component :is="stage.icon"
                    /></el-icon>
                    <div>
                      <h3 class="text-xl font-bold">{{ stage.title }}</h3>
                      <p class="text-sm text-gray-500">{{ stage.period }}</p>
                    </div>
                  </div>
                  <el-tag :type="stage.type" effect="dark" round>{{
                    stage.period
                  }}</el-tag>
                </div>
              </template>

              <div class="flex flex-col lg:flex-row gap-6">
                <!-- 图片展示 -->
                <div class="lg:w-2/5">
                  <el-image
                    :src="stage.image"
                    fit="contain"
                    :preview-src-list="[stage.image]"
                    class="w-full rounded-lg shadow-md bg-gray-50"
                    style="aspect-ratio: 4/3"
                  >
                    <template #placeholder>
                      <div class="flex items-center justify-center h-full">
                        <el-icon class="text-3xl text-gray-300 animate-spin"
                          ><Loading
                        /></el-icon>
                      </div>
                    </template>
                    <template #error>
                      <div class="flex items-center justify-center h-full">
                        <el-icon class="text-3xl text-gray-300"
                          ><Picture
                        /></el-icon>
                      </div>
                    </template>
                  </el-image>
                </div>

                <!-- 内容介绍 -->
                <div class="lg:w-3/5 space-y-4">
                  <!-- 概述 -->
                  <div class="prose">
                    <p class="text-gray-600 leading-relaxed">
                      {{ stage.content }}
                    </p>
                  </div>

                  <!-- 特点列表 -->
                  <div class="space-y-3">
                    <h4
                      class="font-semibold text-primary flex items-center gap-2"
                    >
                      <el-icon><Star /></el-icon>
                      时期特点
                    </h4>
                    <el-row :gutter="12">
                      <el-col
                        :span="12"
                        v-for="(feature, idx) in stage.features"
                        :key="idx"
                      >
                        <div
                          class="bg-gray-50 p-3 rounded-lg mb-3 hover:bg-gray-100 transition-colors"
                        >
                          <div class="flex items-start gap-2">
                            <el-icon class="text-primary mt-1"
                              ><Check
                            /></el-icon>
                            <span class="text-gray-600 text-sm">{{
                              feature
                            }}</span>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>

                  <!-- 重要事件 -->
                  <div class="space-y-3">
                    <h4
                      class="font-semibold text-primary flex items-center gap-2"
                    >
                      <el-icon><Timer /></el-icon>
                      重要事件
                    </h4>
                    <el-collapse accordion>
                      <el-collapse-item
                        v-for="(event, idx) in stage.events"
                        :key="idx"
                        :title="event"
                      >
                        <div class="text-gray-600 text-sm p-2">
                          {{ stage.eventDetails?.[idx] || "暂无详细信息" }}
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>

                  <!-- 补充说明 -->
                  <div v-if="stage.additional" class="mt-4">
                    <el-alert
                      :title="stage.additional"
                      type="info"
                      :closable="false"
                      class="bg-primary/5"
                    />
                  </div>
                </div>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>

    <!-- 文化底蕴部分 -->
    <div id="culture" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <!-- 标题部分 -->
        <div class="text-center mb-16">
          <el-tag type="info" class="mb-4 text-lg px-6 py-2" effect="plain"
            >文化底蕴</el-tag
          >
          <h2 class="text-4xl font-bold mb-6">文化渊源</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <!-- 文化内容展示 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 历史文化 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div class="relative h-64">
              <el-image
                :src="cultureBg.history"
                fit="cover"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">历史文化</h3>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Location /></el-icon>
                  <span class="text-gray-600"
                    >地处关中平原西部，是周秦文化的重要发祥地</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Collection /></el-icon>
                  <span class="text-gray-600"
                    >拥有数千年历史文化积淀，文物古迹众多</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Document /></el-icon>
                  <span class="text-gray-600"
                    >历史上曾是重要的文化艺术中心之一</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- 民俗文化 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div class="relative h-64">
              <el-image
                :src="cultureBg.custom"
                fit="cover"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">民俗文化</h3>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Calendar /></el-icon>
                  <span class="text-gray-600"
                    >与传统节日紧密相连，特别是春节期间最为热闹</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Present /></el-icon>
                  <span class="text-gray-600"
                    >泥塑作品常作为节日礼品和装饰品使用</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span class="text-gray-600"
                    >承载着人们对美好生活的祝愿和向往</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- 艺术特色 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <div class="relative h-64">
              <el-image
                :src="cultureBg.art"
                fit="cover"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">艺术特色</h3>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Brush /></el-icon>
                  <span class="text-gray-600">造型夸张生动，风格独特鲜明</span>
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><PictureFilled /></el-icon>
                  <span class="text-gray-600"
                    >色彩艳丽明快，具有浓郁的民间艺术特色</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span class="text-gray-600"
                    >工艺精湛，体现了非遗文化的精髓</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 传承人展示 -->
    <div id="inheritors" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <!-- 标题部分 -->
        <div class="text-center mb-16">
          <el-tag type="warning" class="mb-4 text-lg px-6 py-2" effect="plain"
            >匠心传承</el-tag
          >
          <h2 class="text-4xl font-bold mb-6">技艺传承人</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <!-- 传承人卡片展示 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 胡深 -->
          <el-card
            class="inheritor-card hover:shadow-2xl transition-all duration-500"
            :body-style="{ padding: '0' }"
          >
            <div class="relative overflow-hidden">
              <el-image
                :src="inheritors[0].image"
                class="w-full aspect-[4/3] object-cover transform hover:scale-110 transition-transform duration-500"
                fit="cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">胡深</h3>
                <p class="text-sm text-white/80">国家级非遗传承人</p>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">
                从艺七十多年，被誉为"中国泥塑第一村"六营村中最有名气的泥塑老艺人。1995年被联合国教科文组织授予"民间工艺美术大师"称号。
              </p>
              <el-divider content-position="left">主要成就</el-divider>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Trophy /></el-icon>
                  <span>作品被选为2002年、2003年国家生肖邮票主图案</span>
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span>2005年被中国艺术研究院聘为"民间艺术创作研究员"</span>
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span>作品被中国国家博物馆及中国农业博物馆收藏</span>
                </li>
              </ul>
            </div>
          </el-card>

          <!-- 胡小红 -->
          <el-card
            class="inheritor-card hover:shadow-2xl transition-all duration-500"
            :body-style="{ padding: '0' }"
          >
            <div class="relative overflow-hidden">
              <el-image
                :src="inheritors[1].image"
                class="w-full aspect-[4/3] object-cover transform hover:scale-110 transition-transform duration-500"
                fit="cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">胡小红</h3>
                <p class="text-sm text-white/80">省级非遗传承人</p>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">
                出身于泥塑世家，自幼跟随父亲胡深学习泥塑技艺。致力于凤翔泥塑的传承与创新。
              </p>
              <el-divider content-position="left">主要成就</el-divider>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Trophy /></el-icon>
                  <span>陕西省工艺美术大师</span>
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span
                    >创立凤翔县胡深世家泥塑专业合作社，带动20余户农户参与生产</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span>获评"首批省级非遗工坊"称号</span>
                </li>
              </ul>
            </div>
          </el-card>

          <!-- 韩建斌 -->
          <el-card
            class="inheritor-card hover:shadow-2xl transition-all duration-500"
            :body-style="{ padding: '0' }"
          >
            <div class="relative overflow-hidden">
              <el-image
                :src="inheritors[2].image"
                class="w-full aspect-[4/3] object-cover transform hover:scale-110 transition-transform duration-500"
                fit="cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">韩建斌</h3>
                <p class="text-sm text-white/80">新一代传承人</p>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">
                胡深外孙，凤翔泥塑第六代传人。形成了夸张憨萌的个人艺术风格。
              </p>
              <el-divider content-position="left">主要成就</el-divider>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Trophy /></el-icon>
                  <span>陕西省工艺美术大师，获国家级奖项57项</span>
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span>推动"凤翔泥塑走进校园"项目，入选十佳优秀案例</span>
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span>作品被国家一级博物馆收藏</span>
                </li>
              </ul>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Component } from "vue";
import {
  ArrowRight,
  Picture,
  Clock,
  Collection,
  Present,
  Promotion,
  Check,
  Timer,
  Star,
  Calendar,
  Document,
  Loading,
  Medal,
  Trophy,
  Location,
  Brush,
  PictureFilled,
} from "@element-plus/icons-vue";
import TheFooter from "@/components/layout/TheFooter.vue";

interface DevelopmentStage {
  period: string;
  title: string;
  content: string;
  type: "primary" | "success" | "warning" | "info";
  icon: Component;
  image: string;
  features: string[];
  events: string[];
  additional?: string;
  eventDetails?: string[];
}

// 使用 URL 构造函数导入图片
const bannerBg = new URL(
  "../assets/images/history/banner-bg.jpg",
  import.meta.url
).href;
const originImg = new URL("@/assets/images/history/origin.jpg", import.meta.url)
  .href;

const inheritors = ref([
  {
    name: "胡深",
    title: "国家级非物质文化遗产传承人",
    image: new URL("../assets/images/inheritors/hushen.jpg", import.meta.url)
      .href,
    description:
      '从艺六十多年，被誉为"中国泥塑第一村"六营村中最有名气的泥塑老艺人。',
    achievements: [
      '1995年获联合国教科文组织"民间工艺美术大师"称号',
      "作品被选为国家生肖邮票图案",
      "多次获得国家级奖项",
    ],
  },
  {
    name: "胡小红",
    title: "陕西省工艺美术大师",
    image: new URL(
      "../assets/images/inheritors/huxiaohong.jpg",
      import.meta.url
    ).href,
    description: "出身于泥塑世家，自幼跟随父亲胡深学习泥塑技艺。",
    achievements: [
      "荣获宝鸡市西秦巧娘一等奖",
      "成立凤翔县胡深世家泥塑专业合作社",
      '被授予"首批省级非遗扶贫就业工坊"',
    ],
  },
  {
    name: "韩建斌",
    title: "陕西省工艺美术大师",
    image: new URL(
      "../assets/images/inheritors/hanjianbin.jpg",
      import.meta.url
    ).href,
    description: "凤翔泥塑胡深世家第六代传人，形成了夸张憨萌的个人艺术风格。",
    achievements: [
      '推动"凤翔泥塑走进校园"项目',
      "创作作品110余件，获国家级奖项57项",
      "作品被国家一级博物馆收藏",
    ],
  },
]);

// 导入图片
import xianqin from "@/assets/images/Historical_photo/xianqin.jpg";
import mingqing from "@/assets/images/Historical_photo/mingqing.jpg";
import ershi from "@/assets/images/Historical_photo/20.jpg";
import xiandai from "@/assets/images/Historical_photo/xiandai.jpg";

const developmentStages = ref<DevelopmentStage[]>([
  {
    period: "先秦时期",
    title: "最早起源",
    content: `凤翔泥塑的历史可以追溯到先秦时期，植根于先秦文化沃土。这一时期的泥塑作品主要用于祭祀和生活装饰，体现了早期艺术的朴素特征。考古发现表明，当时的工匠们已经掌握了基本的制陶和泥塑技术，为后世凤翔泥塑的发展奠定了基础。`,
    type: "primary",
    icon: "Collection",
    image: xianqin,
    features: [
      "以实用性和祭祀功能为主，体现先民生活智慧",
      "造型朴素自然，展现原始审美特征",
      "工艺技法以手工捏制为主，注重实用性",
      "题材多以生活器物和祭祀用品为主",
    ],
    events: [
      "出土大量陶俑和泥塑器物，证实早期泥塑艺术的存在",
      "发现多处先秦时期制陶作坊遗址，展示制作工艺的发展",
      "形成初步的制作工艺体系，为后世发展打下基础",
    ],
    additional:
      "这一时期的泥塑作品虽然形态简单，但已经展现出独特的艺术魅力，是研究先秦时期民间艺术的重要实物资料。",
  },
  {
    period: "明清时期",
    title: "艺术繁荣",
    content:
      "明清时期是凤翔泥塑发展的黄金时期，形成了独特的艺术风格和完整的制作工艺。泥塑作品造型夸张简拙，乡土气息浓郁，完美展现了民间艺术的独特魅力。这一时期的作品题材丰富，技艺精湛，影响深远。",
    type: "success",
    icon: "Present",
    image: mingqing,
    features: [
      "形成独特的艺术风格体系",
      "制作工艺趋于成熟完善",
      "题材内容更加丰富多样",
    ],
    events: [
      "形成完整的传统制作工艺",
      "出现专业的泥塑艺人群体",
      "建立起独特的艺术风格",
    ],
  },
  {
    period: "20世纪",
    title: "产业发展",
    content:
      "二十世纪，特别是七八十年代开始，凤翔泥塑走向产业化经营道路。六营村成为主要生产地，年销售量达到数十万件。这一时期的发展为凤翔泥塑的传承和创新奠定了坚实基础，推动了传统工艺与现代市场的结合。",
    type: "warning",
    icon: "Promotion",
    image: ershi,
    features: ["规模化生产模式形成", "产品种类不断丰富", "销售网络逐步扩大"],
    events: [
      "六营村成为泥塑生产中心",
      "传统工艺得到规范化传承",
      "产品销售范围不断扩大",
    ],
  },
  {
    period: "现代",
    title: "创新传承",
    content:
      "在新时代背景下，凤翔泥塑在保持传统特色的同时不断创新，融入现代生活元素，焕发出新的生命力。通过技艺传承和艺术创新，凤翔泥塑展现出更强的生命力，成为非物质文化遗产保护的典范。",
    type: "info",
    icon: "Clock",
    image: xiandai,
    features: ["传统与现代元素融合", "创新设计理念引入", "文化价值得到提升"],
    events: [
      "入选国家级非物质文化遗产名录",
      "建立完善的传承保护体系",
      "开展多样化的文化传播活动",
    ],
  },
]);

const culturalAspects = ref([
  {
    title: "地理与人文环境",
    content:
      "凤翔区地处关中平原西部，是周秦文化的发祥地之一，拥有丰富的历史遗迹和文化遗产。",
    image: new URL("../assets/images/culture/geography.jpg", import.meta.url)
      .href,
  },
  {
    title: "民俗信仰",
    content:
      "与当地民俗信仰及传统节日密切相关，在春节等重要节日中扮演重要角色。",
    image: new URL("../assets/images/culture/custom.jpg", import.meta.url).href,
  },
  {
    title: "艺术特色",
    content: "造型夸张简拙，色彩鲜艳夺目，具有浓厚的地方特色和生活气息。",
    image: new URL("../assets/images/culture/art.jpg", import.meta.url).href,
  },
]);

// 添加起源特点数据
const originFeatures = ref([
  {
    icon: "Location",
    title: "地理基础",
    content:
      "凤翔区位于关中平原西部，拥有优质黄土资源，为泥塑艺术发展提供了得天独厚的自然条件",
  },
  {
    icon: "Collection",
    title: "文化传承",
    content: "深厚的周秦文化底蕴，融合了民间艺术的精髓，形成独特的艺术风格体系",
  },
  {
    icon: "Brush",
    title: "工艺特色",
    content: "传统手工制作工艺，包含选土、和泥、捏塑等多道工序，技艺精湛",
  },
  {
    icon: "PictureFilled",
    title: "艺术风格",
    content: "造型生动夸张，色彩艳丽明快，具有浓郁的乡土气息和民间艺术特色",
  },
]);

// 添加制作工艺步骤
const craftSteps = ref([
  {
    title: "选土",
    description: "选取优质黄土，去除杂质",
  },
  {
    title: "晒干",
    description: "将黄土晒干处理",
  },
  {
    title: "筛细",
    description: "将晒干的土筛细过滤",
  },
  {
    title: "和泥",
    description: "加水调制成泥胎",
  },
  {
    title: "捏塑",
    description: "手工塑造造型",
  },
  {
    title: "晾晒",
    description: "自然风干定型",
  },
  {
    title: "上彩",
    description: "绘制彩绘装饰",
  },
]);

// 添加文化价值描述
const culturalValues = ref([
  "作为非物质文化遗产，凤翔泥塑承载着丰富的历史文化信息，是研究古代社会生活的重要实物资料",
  "其独特的艺术风格和制作工艺，体现了中国传统手工艺术的精湛技术和审美特征",
  "泥塑作品题材广泛，反映了民间文化的多样性和生活气息",
  "传统工艺的传承对保护和发展中国传统文化具有重要意义",
]);

// 修改传统工艺展示图片的导入方式
import craft1 from "@/assets/images/历史文化_传统工艺展示/1.png";
import craft2 from "@/assets/images/历史文化_传统工艺展示/2.png";
import craft3 from "@/assets/images/历史文化_传统工艺展示/3.png";

// 修改图片数据
const craftImages = ref([
  {
    url: craft1,
  },
  {
    url: craft2,
  },
  {
    url: craft3,
  },
]);

// 预加载图片
const preloadImages = () => {
  [xianqin, mingqing, ershi, xiandai].forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(() => {
  preloadImages();
});

// 修改文化背景图片导入方式
import bgGeography from "@/assets/images/历史文化_文化背景/地理人文环境.jpg";
import bgCustom from "@/assets/images/历史文化_文化背景/民俗信仰.jpg";
import bgArt from "@/assets/images/历史文化_文化背景/艺术特色.jpg";

// 修改文化背景图片对象
const cultureBg = {
  history: bgGeography,
  custom: bgCustom,
  art: bgArt,
};
</script>

<style scoped>
/* 保留所有必要的样式，删除重复的部分 */

/* 基础样式 */
.history-card {
  margin-left: 20px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 时间线样式 */
:deep(.el-timeline-item__node--large) {
  width: 16px;
  height: 16px;
}

:deep(.el-timeline-item__tail) {
  border-left: 2px solid var(--el-border-color-light);
}

/* 卡片样式 */
:deep(.el-card) {
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

:deep(.el-card__header) {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

:deep(.el-card__body) {
  padding: 16px 20px;
}

/* 图片相关样式 */
:deep(.el-image) {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

:deep(.el-image img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: auto;
}

:deep(.el-image-viewer__wrapper) {
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.9);
}

/* 内容间距 */
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.5rem;
}

/* 文本样式 */
.prose p {
  margin-bottom: 1.5em;
  line-height: 1.8;
  color: #4b5563;
}

.prose h4 {
  margin-bottom: 1rem;
  color: var(--el-color-primary);
}

/* 折叠面板样式 */
:deep(.el-collapse-item__header) {
  font-size: 14px;
  color: var(--el-text-color-primary);
}

/* 响应式样式 */
@media (max-width: 1024px) {
  .flex.flex-col.lg\:flex-row {
    flex-direction: column;
  }

  .lg\:w-2\/5,
  .lg\:w-3\/5 {
    width: 100%;
  }
}

/* 轮播图样式优化 */
:deep(.el-carousel__item) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.el-carousel__item--card) {
  border: none;
}

:deep(.el-carousel__item--card.is-active) {
  transform: translateX(0) scale(1.05);
  transition: all 0.4s ease;
}

:deep(.el-carousel__arrow) {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  transform: scale(1.2);
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(0, 0, 0, 0.5);
}

/* 图片容器样式 */
.el-image {
  transition: transform 0.3s ease;
}

.el-carousel__item:hover .el-image {
  transform: scale(1.05);
}

/* 图片说明文字渐变显示 */
.el-carousel__item .absolute {
  transform: translateY(100%);
  transition: transform 0.3s ease;
  opacity: 0;
}

.el-carousel__item:hover .absolute {
  transform: translateY(0);
  opacity: 1;
}

/* 卡片悬浮效果增强 */
.inheritor-card,
.timeline-card {
  transform: translateY(0);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.inheritor-card:hover,
.timeline-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 文化底蕴卡片渐变背景 */
.culture-card {
  position: relative;
  overflow: hidden;
}

.culture-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    var(--el-color-primary-light-7),
    var(--el-color-primary-light-9)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.culture-card:hover::before {
  opacity: 0.1;
}

/* 标题装饰 */
.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--el-color-primary), transparent);
}

/* 时间线优化 */
:deep(.el-timeline-item__node--large) {
  width: 16px;
  height: 16px;
  left: -1px;
  background: linear-gradient(
    45deg,
    var(--el-color-primary),
    var(--el-color-success)
  );
}

:deep(.el-timeline-item__tail) {
  border-left: 2px solid var(--el-border-color-light);
  background: linear-gradient(
      to bottom,
      var(--el-border-color-light) 50%,
      transparent 0
    )
    repeat-y;
  background-size: 2px 8px;
}

/* 步骤条美化 */
:deep(.el-step__head.is-process) {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 4px var(--el-color-primary-light-8);
}

:deep(.el-step__title.is-process) {
  background: linear-gradient(
    90deg,
    var(--el-color-primary),
    var(--el-color-primary-light-3)
  );
  -webkit-background-clip: text;
  color: transparent;
}

/* 图片悬浮效果增强 */
.image-hover {
  overflow: hidden;
  border-radius: 12px;
}

.image-hover img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-hover:hover img {
  transform: scale(1.1) rotate(2deg);
}

/* 渐变分隔线 */
.gradient-divider {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--el-color-primary-light-5),
    transparent
  );
  margin: 2rem 0;
}

/* 文字渐变效果 */
.gradient-text {
  background: linear-gradient(
    45deg,
    var(--el-color-primary),
    var(--el-color-success)
  );
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
}

/* 卡片内容布局优化 */
.card-content {
  padding: 1.5rem;
  background: linear-gradient(180deg, white, var(--el-color-primary-light-9));
  border-radius: 0 0 12px 12px;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .inheritor-card:hover,
  .timeline-card:hover {
    transform: translateY(-4px);
  }

  .section-title::after {
    width: 80%;
    left: 10%;
  }
}
</style>
