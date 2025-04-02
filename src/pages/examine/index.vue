<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
    <div><h1 class="text-2xl font-medium mb-2">我要考核</h1><p class="text-gray-500">选择一个考核开始测试您的知识掌握程度</p></div>
    <div class="hidden md:block">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-primary hover:opacity-90">
        <div class="i-lucide-book-open mr-2 h-4 w-4"></div>
        查看学习资料
      </button>
    </div>
  </div>
  <div class="mb-8">
    <h2 class="text-lg font-medium mb-4 flex items-center">
      <div class="i-lucide-clock mr-2 h-5 w-5 text-blue-600"></div>
      进行中的考核
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border  shadow-sm bg-blue-50 border-blue-200 hover:shadow-md transition-shadow" v-for="item in 2" :key="item">
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-blue-100 text-blue-700">药品知识</div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-blue-100 text-blue-700">进行中</div>
          </div>
          <h3 class="text-lg font-medium mb-2">药品知识专项测试</h3>
          <p class="text-sm text-gray-600 mb-4">测试药品研发、临床试验和上市后监测等相关知识</p>
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="flex items-center text-sm">
              <div class="i-lucide-clock h-4 w-4 mr-1 text-blue-600"></div>
              <span>45分钟</span>
            </div>
            <div class="flex items-center text-sm">
              <div class="i-lucide-file-text h-4 w-4 mr-1 text-blue-600"></div>
              <span>30题</span>
            </div>
            <div class="flex items-center text-sm">
              <div class="i-lucide-calendar h-4 w-4 mr-1 text-blue-600"></div>
              <span>截止2025-04-10</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-sm text-blue-700"><span class="font-medium">继续完成考核</span></div>
            <button @click="router.push('/exam/1')" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700">
              继续考核
              <div class="i-lucide-arrow-right ml-2 h-4 w-4"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-8">
    <h2 class="text-lg font-medium mb-4 flex items-center">
      <div class="i-lucide-file-text mr-2 h-5 w-5 text-purple-600"></div>
      可参加的考核
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border  shadow-sm hover:shadow-md transition-shadow" v-for="item in 2" :key="item">
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-purple-100 text-purple-700">医疗法规</div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-green-100 text-green-700">可参加</div>
          </div>
          <h3 class="text-lg font-medium mb-2">医疗法规基础知识考核</h3>
          <p class="text-sm text-gray-600 mb-4">考核医疗机构管理条例和执业医师法等相关法律法规的基础知识</p>
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="flex items-center text-sm">
              <div class="i-lucide-clock h-4 w-4 mr-1"></div>
              <span>30分钟</span>
            </div>
            <div class="flex items-center text-sm">
              <div class="i-lucide-file-text h-4 w-4 mr-1"></div>
              <span>20题</span>
            </div>
            <div class="flex items-center text-sm">
              <div class="i-lucide-calendar h-4 w-4 mr-1"></div>
              <span>截止2025-04-15</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500"><span class="font-medium">准备好了吗？开始考核吧</span></div>
            <button @click="router.push('/exam/1')" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white h-10 px-4 py-2 bg-purple-600 hover:bg-purple-700">
              开始考核
              <div class="i-lucide-arrow-right ml-2 h-4 w-4"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-8">
    <h2 class="text-lg font-medium mb-4 flex items-center">
      <div class="i-lucide-circle-check-big mr-2 h-5 w-5 text-green-600"></div>
      已完成的考核
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border  shadow-sm hover:shadow-md transition-shadow" v-for="item in 1" :key="item">
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-purple-100 text-purple-700">规章制度</div>
            <div class="fx-cer gap-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-purple-100 text-purple-700">已完成</div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-green-100 text-green-700">通过</div>
            </div>
          </div>
          <h3 class="text-lg font-medium mb-2">规章制度合规考核</h3>
          <p class="text-sm text-gray-600 mb-4">考核医院内部规章制度和合规要求的掌握程度</p>
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="flex items-center text-sm">
              <div class="i-lucide-clock h-4 w-4 mr-1"></div>
              <span>30分钟</span>
            </div>
            <div class="flex items-center text-sm">
              <div class="i-lucide-file-text h-4 w-4 mr-1"></div>
              <span>20题</span>
            </div>
            <div class="flex items-center text-sm">
              <div class="i-lucide-award h-4 w-4 mr-1 text-green-600"></div>
              <span class="text-green-600 font-medium">85分</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500"><span class="font-medium">查看详细分析</span></div>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-transparent border border-purple-200 text-purple-700 hover:bg-purple-50">
              查看分析
              <div class="i-lucide-arrow-right ml-2 h-4 w-4"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-8">
    <h2 class="text-lg font-medium mb-4 flex items-center">
      <div class="i-lucide-circle-alert mr-2 h-5 w-5 text-gray-600"></div>
      已过期的考核
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border  shadow-sm hover:shadow-md transition-shadow" v-for="item in 3" :key="item">
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-gray-200 text-gray-700">医疗法规</div>
            <div class="fx-cer gap-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 bg-gray-100 text-gray-700">已过期</div>
            </div>
          </div>
          <h3 class="text-lg font-medium mb-2">医疗法规进阶考核</h3>
          <p class="text-sm text-gray-600 mb-4">考核医疗法规的深入理解和实际应用能力</p>
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="flex items-center text-sm text-gray-500">
              <div class="i-lucide-clock h-4 w-4 mr-1"></div>
              <span>30分钟</span>
            </div>
            <div class="flex items-center text-sm text-gray-500">
              <div class="i-lucide-file-text h-4 w-4 mr-1"></div>
              <span>20题</span>
            </div>
            <div class="flex items-center text-sm text-gray-500">
              <div class="i-lucide-calendar h-4 w-4 mr-1 text-gray-500"></div>
              <span>已过期</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500"><span>此考核已过期</span></div>
            <button class="inline-flex items-center cursor-not-allowed justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border bg-white/10 h-10 px-4 py-2 border-gray-200 text-gray-500">
              已过期
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>

</style>