<template>
  <div class="p-6">
    <h1 class="text-2xl font-medium mb-6">我的考试</h1>
    <div class="border-t pt-6">
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <div class="i-lucide-award h-6 w-6 text-purple-600"></div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium">平均分数</h3>
                    <p class="text-sm text-gray-500">所有已完成考试</p>
                  </div>
                </div>
                <div class="text-2xl font-bold text-purple-600">75</div>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-purple-100 h-2 mt-4">
                <div class="h-full w-full flex-1 bg-purple-600 transition-all" style="width: 25%;"></div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <div class="i-lucide-circle-check-big h-6 w-6 text-green-600"></div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium">通过率</h3>
                    <p class="text-sm text-gray-500">已通过/总考试</p>
                  </div>
                </div>
                <div class="text-2xl font-bold text-green-600">50%</div>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-purple-100 h-2 mt-4">
                <div class="h-full w-full flex-1 bg-green-600 transition-all" style="width: 25%;"></div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <div class="i-lucide-timer h-6 w-6 text-blue-600"></div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium">即将到期</h3>
                    <p class="text-sm text-gray-500">未参加的考试</p>
                  </div>
                </div>
                <div class="text-2xl font-bold text-blue-600">1</div>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-purple-100 h-2 mt-4">
                <div class="h-full w-full flex-1 bg-blue-600 transition-all" style="width: 25%;"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-medium mb-4">全部考试 (4)</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="item in 2" :key="item">
              <div
                class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                <div class="p-6">
                  <div class="flex justify-between items-start mb-2">
                    <div
                      class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-blue-100 text-blue-700">
                      药品知识</div>
                    <div
                      class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-blue-100 text-blue-700">
                      进行中</div>
                  </div>
                  <h3 class="text-lg font-medium mb-3">医疗法规基础知识考核</h3>
                  <div class="grid grid-cols-2 gap-y-2 mb-4 text-sm">
                    <div class="flex items-center text-sm">
                      <div class="i-lucide-calendar h-4 w-4 mr-1 text-gray-500"></div>
                      <span>考试日期: 2024-03-24</span>
                    </div>
                    <div class="flex items-center text-sm">
                      <div class="i-lucide-clock h-4 w-4 mr-1 text-gray-500"></div>
                      <span>时长: 30分钟</span>
                    </div>
                    <div class="flex items-center text-sm">
                      <div class="i-lucide-file-text h-4 w-4 mr-1 text-gray-500"></div>
                      <span>题目: 20题</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="flex justify-between text-xs mb-1"><span>得分</span><span>85分</span></div>
                    <div class="relative w-full overflow-hidden rounded-full h-2 bg-blue-100">
                      <div class="h-full w-full flex-1 bg-blue-600 transition-all" :style="{ width: '85%' }"></div>
                    </div>
                    <div class="flex justify-between text-xs mt-1"><span>正确率: 85%</span><span>17/20</span></div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="text-xs text-gray-500"><span>考试日期: 2024-03-24</span></div>
                    <button
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700">
                      <div class="i-lucide-bar-chart ml-2 h-4 w-4"></div>
                      查看分析
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border text-black bg-white shadow-sm mt-8">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
              <div class="i-lucide-pie-chart h-5 w-5 text-purple-600"></div>
              考试分析
            </h3>
          </div>
          <div class="p-6 pt-0">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="flex flex-col">
                <span class="text-sm text-gray-500 mb-1">考试参与率</span>
                <div class="flex items-baseline">
                  <span class="text-3xl font-bold text-purple-600">50%</span>
                </div>
                <div class="text-xs text-gray-600 mt-1">已参加 2 / 4 场考试</div>
              </div>
              <div class="flex flex-col">
                <span class="text-sm text-gray-500 mb-1">最高分数</span>
                <div class="flex items-baseline">
                  <span class="text-3xl font-bold text-green-600">85</span>
                </div>
                <div class="text-xs text-gray-600 mt-1">医疗法规基础知识考核</div>
              </div>
              <div class="flex flex-col">
                <span class="text-sm text-gray-500 mb-1">平均答题正确率</span>
                <div class="flex items-baseline">
                  <span class="text-3xl font-bold text-blue-600">76%</span>
                </div>
                <div class="text-xs text-gray-600 mt-1">总体答题表现</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>