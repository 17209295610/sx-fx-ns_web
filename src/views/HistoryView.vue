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

    <!-- 页面导航面包屑 -->
    <Breadcrumb />

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
        <div class="timeline relative">
          <div class="space-y-16">
            <div
              v-for="(stage, index) in developmentStages"
              :key="stage.period"
              class="timeline-item flex"
              :class="[
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
                'items-center',
              ]"
            >
              <!-- 图片部分 -->
              <div class="w-1/2 px-4 hidden md:block">
                <div class="relative overflow-hidden rounded-lg shadow-lg">
                  <!-- 添加装饰图标 -->
                  <div
                    class="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2"
                  >
                    <el-icon class="text-2xl text-white"
                      ><component :is="stage.icon"
                    /></el-icon>
                  </div>
                  <el-image
                    :src="stage.image"
                    class="w-full aspect-[4/5] object-cover object-center transform hover:scale-110 transition-all duration-500"
                    fit="cover"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  ></div>
                  <!-- 添加年代标记 -->
                  <div class="absolute bottom-4 left-4 text-white">
                    <h4 class="text-xl font-bold flex items-center gap-2">
                      <el-icon><Calendar /></el-icon>
                      {{ stage.period }}
                    </h4>
                    <p class="text-sm mt-1 text-white/80">{{ stage.title }}</p>
                  </div>
                </div>
              </div>

              <!-- 内容部分 -->
              <div
                class="w-full md:w-1/2 px-4 bg-white rounded-lg shadow-lg p-6 relative flex flex-col justify-between h-full"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0 }"
                :delay="index * 200"
              >
                <!-- 添加装饰边框 -->
                <div
                  class="absolute -inset-[2px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg -z-10"
                ></div>

                <div class="text-lg font-bold text-primary mb-2">
                  <el-tag :type="stage.type" effect="plain" class="mr-2">{{
                    stage.period
                  }}</el-tag>
                  {{ stage.title }}
                </div>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  <template
                    v-for="(part, idx) in stage.content.split('。')"
                    :key="idx"
                  >
                    <span v-if="part">
                      {{ part
                      }}<span v-if="idx < stage.content.split('。').length - 2"
                        >。</span
                      >
                    </span>
                  </template>
                </p>

                <!-- 详情部分 -->
                <el-collapse>
                  <el-collapse-item>
                    <template #title>
                      <span
                        class="text-primary font-medium flex items-center gap-2"
                      >
                        <el-icon><Document /></el-icon>
                        查看详情
                      </span>
                    </template>
                    <div class="features">
                      <h4 class="font-bold mb-2 flex items-center gap-2">
                        <el-icon class="text-primary"><Star /></el-icon>
                        特点：
                      </h4>
                      <ul class="space-y-2">
                        <li
                          v-for="feature in stage.features"
                          :key="feature"
                          class="flex items-start gap-2"
                        >
                          <el-icon class="text-primary mt-1"><Check /></el-icon>
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                    <div class="events">
                      <h4 class="font-bold mt-4 mb-2 flex items-center gap-2">
                        <el-icon class="text-primary"><Timer /></el-icon>
                        重要事件：
                      </h4>
                      <ul class="space-y-2">
                        <li
                          v-for="event in stage.events"
                          :key="event"
                          class="flex items-start gap-2 hover:bg-primary/5 p-2 rounded-lg transition-colors"
                        >
                          <el-icon class="text-primary mt-1"><Timer /></el-icon>
                          {{ event }}
                        </li>
                      </ul>
                      <div
                        class="mt-4 pt-4 border-t border-gray-100 bg-gray-50 p-4 rounded-lg"
                      >
                        <p
                          class="text-sm text-gray-500 italic hover:text-primary transition-colors"
                          v-for="detail in stage.eventDetails"
                          :key="detail"
                        >
                          {{ detail }}
                        </p>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>

                <!-- 添加底部装饰 -->
                <div
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
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
                <p class="text-sm text-white/80">
                  <span class="bg-primary/80 px-2 py-0.5 rounded"
                    >国家级非遗传承人</span
                  >
                </p>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-primary font-bold">从艺年限：</span>
                <span class="text-gray-700">70余年</span>
              </div>
              <p class="text-gray-600">
                被誉为<span class="text-primary font-medium"
                  >"中国泥塑第一村"</span
                >六营村中最有名气的泥塑老艺人。
                <span class="text-primary/90"
                  >1995年被联合国教科文组织授予"民间工艺美术大师"称号</span
                >， 是凤翔泥塑艺术的杰出代表。其作品<span
                  class="text-primary/90"
                  >多次被选为国家生肖邮票主图案</span
                >， 充分展现了凤翔泥塑的艺术魅力。
              </p>
              <el-divider content-position="left">主要成就</el-divider>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Trophy /></el-icon>
                  <span
                    >作品<span class="text-primary font-medium">连续两年</span
                    >被选为国家生肖邮票主图案（2002-2003年）</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span
                    >2005年被<span class="text-primary font-medium"
                      >中国艺术研究院</span
                    >聘为"民间艺术创作研究员"</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span
                    >作品被<span class="text-primary font-medium"
                      >中国国家博物馆</span
                    >及<span class="text-primary font-medium"
                      >中国农业博物馆</span
                    >永久收藏</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Present /></el-icon>
                  <span
                    >荣获<span class="text-primary font-medium"
                      >中国民间工艺美术最高奖"山花奖"</span
                    ></span
                  >
                </li>
              </ul>
              <div class="mt-4 pt-4 border-t border-gray-100">
                <p class="text-sm text-gray-500 italic">
                  "泥塑艺术是我的生命，传承创新是我的责任。" —— 胡深
                </p>
              </div>
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
                <p class="text-sm text-white/80">
                  <span class="bg-warning/80 px-2 py-0.5 rounded"
                    >省级非遗传承人</span
                  >
                </p>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-warning font-bold">从艺年限：</span>
                <span class="text-gray-700">30余年</span>
              </div>
              <p class="text-gray-600">
                出身于<span class="text-primary font-medium">泥塑世家</span
                >，自幼跟随父亲胡深学习泥塑技艺。
                <span class="text-primary/90">致力于传统工艺的创新发展</span>，
                将现代设计理念与传统技艺相结合，开创了<span
                  class="text-primary font-medium"
                  >新时代凤翔泥塑</span
                >的发展方向。
              </p>
              <el-divider content-position="left">主要成就</el-divider>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Trophy /></el-icon>
                  <span
                    >荣获<span class="text-primary font-medium"
                      >陕西省工艺美术大师</span
                    >称号</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span
                    >创立<span class="text-primary font-medium"
                      >凤翔县胡深世家泥塑专业合作社</span
                    >，带动20余户农户参与生产，促进产业发展</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span
                    >工作室获评<span class="text-primary font-medium"
                      >"首批省级非遗工坊"</span
                    >称号</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Present /></el-icon>
                  <span
                    >多次参与<span class="text-primary font-medium"
                      >国际文化交流活动</span
                    >，促进凤翔泥塑走向世界</span
                  >
                </li>
              </ul>
              <div class="mt-4 pt-4 border-t border-gray-100">
                <p class="text-sm text-gray-500 italic">
                  "创新是传统文化发展的动力，让古老技艺焕发新生。" —— 胡小红
                </p>
              </div>
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
                <p class="text-sm text-white/80">
                  <span class="bg-success/80 px-2 py-0.5 rounded"
                    >新一代传承人</span
                  >
                </p>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-success font-bold">从艺年限：</span>
                <span class="text-gray-700">15余年</span>
              </div>
              <p class="text-gray-600">
                作为<span class="text-primary font-medium"
                  >凤翔泥塑第六代传人</span
                >， 继承了祖辈的精湛技艺，同时开创了<span
                  class="text-primary font-medium"
                  >夸张憨萌</span
                >的个人艺术风格。 致力于<span class="text-primary/90"
                  >泥塑艺术的教育推广</span
                >，让更多年轻人了解和热爱这门传统技艺。
              </p>
              <el-divider content-position="left">主要成就</el-divider>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Trophy /></el-icon>
                  <span
                    >荣获<span class="text-primary font-medium"
                      >陕西省工艺美术大师</span
                    >称号，斩获<span class="text-primary font-medium"
                      >57项国家级奖项</span
                    ></span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Medal /></el-icon>
                  <span
                    >发起<span class="text-primary font-medium"
                      >"凤翔泥塑走进校园"</span
                    >项目，入选文化和旅游部<span
                      class="text-primary font-medium"
                      >非遗传承人群研培计划十佳优秀案例</span
                    ></span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Star /></el-icon>
                  <span
                    >创新作品<span class="text-primary font-medium"
                      >《欢乐童年》系列</span
                    >被多家国家一级博物馆收藏</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <el-icon class="text-primary mt-1"><Present /></el-icon>
                  <span
                    >开设<span class="text-primary font-medium"
                      >泥塑艺术工作室</span
                    >，培养新一代传承人才</span
                  >
                </li>
              </ul>
              <div class="mt-4 pt-4 border-t border-gray-100">
                <p class="text-sm text-gray-500 italic">
                  "让传统艺术走进现代生活，让年轻人爱上泥塑文化。" —— 韩建斌
                </p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <BackToTop />
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
import BackToTop from "@/components/common/BackToTop.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";

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
    title: "泥塑艺术萌芽",
    content: `凤翔泥塑的起源可以追溯到先秦时期，最早出现于民间祭祀活动。这一时期的泥塑作品主要用于祭祀和装饰，体现了先民们朴素的艺术追求和宗教信仰。`,
    type: "primary",
    icon: Calendar,
    image: xianqin,
    features: [
      "以祭祀用途为主",
      "融合巫术文化元素",
      "造型朴素自然",
      "体现先民审美",
      "具有地域特色",
    ],
    events: [
      "出土大量陶俑和泥塑器物",
      "发现earliest凤翔泥塑遗址",
      "形成独特的制作工艺",
      "与周秦文化深度融合",
    ],
    eventDetails: [
      "考古发现表明，早在春秋战国时期，凤翔地区就有了成熟的制陶工艺",
      "出土文物中包含大量具有地方特色的泥塑作品",
      "泥塑艺术与当地民俗文化紧密相连",
    ],
  },
  {
    period: "明清时期",
    title: "技艺成熟发展",
    content: `明清时期是凤翔泥塑的重要发展阶段，这一时期形成了独特的"凤翔泥塑"艺术风格。工艺技法不断创新，题材更加丰富多样，成为陕西民间艺术的重要代表。`,
    type: "success",
    icon: Present,
    image: mingqing,
    features: [
      "工艺技法精进",
      "形成独特风格",
      "题材广泛多样",
      "色彩运用成熟",
      "市场需求扩大",
    ],
    events: [
      "六营村泥塑作坊兴起",
      "形成完整的传承体系",
      "创作技法不断革新",
      "市场规模持续扩大",
    ],
    eventDetails: [
      "六营村成为凤翔泥塑的重要产地，形成了独特的'六营派'艺术风格",
      "传统工艺与时代特色相结合，创新表现手法",
      "泥塑作品在民间广受欢迎，成为重要的民间艺术品",
    ],
  },
  {
    period: "20世纪",
    title: "创新与发展",
    content: `20世纪是凤翔泥塑的创新发展时期。在保持传统特色的基础上，积极吸收现代艺术元素，
    不断拓展创作题材和表现手法。这一时期涌现出一批杰出的泥塑艺人，为艺术传承做出重要贡献。`,
    type: "warning",
    icon: Promotion,
    image: ershi,
    features: [
      "传统与现代融合",
      "艺术创新突破",
      "名家辈出创作",
      "题材更加丰富",
      "工艺持续改进",
    ],
    events: [
      "成立泥塑艺术研究所",
      "举办首届泥塑艺术展",
      "获得多项国家级奖项",
      "建立专业培训体系",
    ],
    eventDetails: [
      "1956年成立凤翔泥塑研究所，系统整理传统工艺",
      "多位艺术家获得国家级荣誉称号",
      "作品多次入选国家重要展览，获得广泛认可",
    ],
  },
  {
    period: "现代发展",
    title: "传承与创新",
    content: `新时代的凤翔泥塑走上了传承创新之路。通过数字技术应用、文创产品开发、
    教育推广等多种方式，让传统工艺焕发新的生机。同时，积极探索产业化发展道路，
    推动非遗文化的保护与传承。`,
    type: "info",
    icon: Present,
    image: xiandai,
    features: [
      "数字技术应用",
      "文创产品开发",
      "教育基地建设",
      "产业化发展",
      "国际文化交流",
    ],
    events: [
      "入选国家级非遗名录",
      "建立数字化展馆",
      "开发系列文创产品",
      "成立传承人培训基地",
    ],
    eventDetails: [
      "2008年入选第二批国家级非物质文化遗产名录",
      "建立凤翔泥塑博物馆，实现数字化展示",
      "开发多系列文创产品，推动产业化发展",
      "与多所高校合作，建立人才培养基地",
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
.timeline {
  @apply relative;
}

.timeline::before {
  content: "";
  @apply absolute left-1/2 top-0 bottom-0 w-px bg-primary/20;
  transform: translateX(-50%);
}

.timeline-item {
  @apply relative z-10 py-8;
}

.timeline-item > div {
  @apply w-full;
}

/* 时间轴连接点 */
.timeline-item::after {
  content: "";
  @apply absolute w-4 h-4 bg-primary rounded-full z-10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 时间轴横线 */
.timeline-item::before {
  content: "";
  @apply absolute h-px bg-primary/20;
  top: 50%;
  width: 50px;
  left: calc(50% - 25px);
}

/* 移动端样式 */
@media (max-width: 768px) {
  .timeline-item {
    @apply flex-col gap-6;
  }

  .timeline-item::after {
    @apply left-4;
  }

  .timeline-item::before {
    @apply hidden;
  }

  .timeline::before {
    @apply left-4;
  }
}

/* 图片悬停效果 */
.timeline-item .el-image {
  @apply transition-all duration-500;
}

.timeline-item:hover .el-image {
  @apply scale-105;
}
</style>
