<template>
  <div class="p-6">
    <div class="mb-8">
      <h1 class="text-2xl font-medium mb-2">欢迎回来，{{ shortenHash(state.name || '') }}</h1>
      <p class="text-gray-500">继续您的学习之旅，探索更多精彩内容</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="rounded-lg border shadow-sm bg-gradient-primary text-white">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-medium">继续学习</h2>
            <div class="i-lucide-book-open h-6 w-6"></div>
          </div>
          <p class="mb-4">医疗法规基础知识</p>
          <div class="w-full bg-white/20 h-2 rounded-full mb-2">
            <div class="bg-white h-2 rounded-full" style="width: 75%;">
            </div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span>已完成 75%</span>
            <button
              class="bg-transparent inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md text-white p-0 hover:bg-transparent hover:text-white/80">
              继续学习
              <div class="i-lucide-arrow-right ml-1 h-4 w-4"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-medium">学习统计</h2>
            <div class="i-lucide-trending-up h-6 w-6 text-purple-500"></div>
          </div>
          <div class="text-3xl font-bold mb-1">12.5<span class="text-base font-normal text-gray-500">小时</span></div>
          <p class="text-gray-500 text-sm">本月学习时长</p>
          <div class="mt-4 text-sm text-gray-500">比上月增长 <span class="text-green-500 font-medium">23%</span></div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-medium">即将到期</h2>
            <div class="i-lucide-clock h-6 w-6 text-orange-500"></div>
          </div>
          <div class="text-3xl font-bold mb-1">5<span class="text-base font-normal text-gray-500">天</span></div>
          <p class="text-gray-500 text-sm">医疗法规考核截止日期</p>
          <div class="mt-4">
            <button
              class="inline-flex bg-transparent items-center hover:bg-orange-50 justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-orange-500 border-orange-200">立即参加考核</button>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-2xl font-medium mb-6">我要培训</h1>
    <div class="border-t border-border pt-4 mb-8">
      <h2 class="text-lg text-purple-600 mb-4">请选择培训主题</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a class="" v-for="item in topics" :key="item.id">
          <div
            class="rounded-lg border text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white border-gray-100">
            <div class="flex items-center p-6">
              <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4" :class="item.color">
                <div class="h-6 w-6" :class="item.iconClass"></div>
              </div>
              <span class="text-lg font-medium">{{ item.name }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-medium">热门课程</h2>
        <button
          class="inline-flex items-center bg-transparent hover:bg-purple-50 justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-purple-600">
          查看全部
          <div class="i-lucide-arrow-right ml-1 h-4 w-4"></div>
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="rounded-lg border bg-white text-card-foreground shadow-sm overflow-hidden"
          v-for="item in popularCourses" :key="item.id">
          <div class="h-3 bg-gradient-to-r from-purple-500 to-orange-500"></div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">{{ item.category }}</span>
              <span class="flex items-center text-gray-500 text-xs">
                <div class="i-lucide-clock h-3 w-3 mr-1"></div>
                {{ item.duration }}
              </span>
            </div>
            <h3 class="font-medium mb-3">{{ item.title }}</h3>
            <div class="w-full bg-gray-100 h-1.5 rounded-full mb-2">
              <div class="bg-purple-600 h-1.5 rounded-full" :style="{ width: `${item.progress}%` }"></div>
            </div>
            <div class="text-xs text-gray-500">已完成 {{ item.progress }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const { state } = userStore
import {shortenHash} from '@/utils'
import { getTopCategories } from '@/api'

interface Topic {
  id: string
  name: string
  description: string
  icon: string
  parent_id: string
  parent: null
  direct_childs: any[]
  created_at: number
  updated_at: number
  color?: string
  iconClass?: string
}

interface PopularCourse {
  id: string
  title: string
  category: string
  duration: string
  progress: number
}

interface ApiResponse {
  code: number
  message: string
  data: {
    total: number
    total_page: number
    pagesize: number
    list: Topic[]
  }
}

const topics = ref<Topic[]>([])
const popularCourses = ref<PopularCourse[]>([])

// Mock color and icon classes for topics
const colorClasses = [
  'bg-blue-100 text-blue-600',
  'bg-purple-100 text-purple-600',
  'bg-green-100 text-green-600',
  'bg-orange-100 text-orange-600',
  'bg-red-100 text-red-600',
  'bg-yellow-100 text-yellow-600'
]

const iconClasses = [
  'i-lucide-book',
  'i-lucide-graduation-cap',
  'i-lucide-brain',
  'i-lucide-lightbulb',
  'i-lucide-target',
  'i-lucide-award'
]

onMounted(async () => {
  try {
    const response = await getTopCategories({
      page: 1,
      pagesize: 20
    }) as ApiResponse
    
    if (response.code === 0) {
      // Add mock color and icon classes to each topic
      topics.value = response.data.list.map((topic, index) => ({
        ...topic,
        color: colorClasses[index % colorClasses.length],
        iconClass: iconClasses[index % iconClasses.length]
      }))
    }
  } catch (error) {
    console.error('Failed to fetch topics:', error)
  }
})
</script>

<style scoped></style>