<template>
  <div class="flex h-full">
    <div class="w-80 flex-shrink-0 border-r border-gray-200 flex flex-col h-full bg-white">
      <div class="p-4 border-b">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-lg font-medium flex items-center">
            <div class="i-lucide-message-square mr-2 h-5 w-5 text-purple-600"></div>
            我要答疑
          </h1>
        </div>
        <div class="relative">
          <div class="i-lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"></div>
          <input
            v-model="searchQuery"
            class="flex h-10 w-full border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus:ring-purple-600 focus-visible:ring-ring focus-visible:ring-offset-1 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 pl-9 rounded-full bg-gray-50" />
        </div>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div class="p-2 space-y-2">
          <div v-for="category in categories" :key="category.id"
            @click="selectCategory(category)"
            class="p-3 rounded-lg cursor-pointer transition-colors"
            :class="selectedCategory?.id === category.id ? 'bg-purple-50' : 'hover:bg-gray-50'">
            <div class="flex items-start">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3">
                <img :src="category.icon" class="aspect-square h-full w-full" />
              </span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h3 class="font-medium truncate text-gray-800">{{ category.name }}</h3>
                  <span class="text-xs text-gray-500 whitespace-nowrap">{{ formatTime(category.created_at) }}</span>
                </div>
                <p class="text-sm truncate mt-1 text-gray-500">{{ category.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col h-full">
      <div class="p-4 border-b bg-white">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 mr-3">
              <img v-if="selectedCategory" class="aspect-square h-full w-full" :src="selectedCategory.icon">
            </span>
            <div>
              <h1 class="text-lg font-medium">{{ selectedCategory?.name || '选择分类' }}</h1>
              <p class="text-sm text-gray-500">{{ messages.length }} 条消息</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-4 bg-gradient-subtle">
        <div class="max-w-3xl mx-auto space-y-4">
          <motion.div v-for="(message, index) in messages" :key="index"
            :initial="{ opacity: 0, y: 10 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.3 }"
            class="flex group"
            :class="message.isUser ? 'justify-end' : 'justify-start'">
            <div class="flex items-start max-w-[80%]">
              <template v-if="!message.isUser">
                <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 mr-2">
                  <img v-if="selectedCategory" class="aspect-square h-full w-full" :src="selectedCategory.icon">
                </span>
              </template>
              <div class="relative">
                <div class="rounded-2xl px-4 py-2 mb-1"
                  :class="message.isUser ? 'bg-gradient-primary text-white' : 'bg-white shadow-sm'">
                  <div class="whitespace-pre-wrap">{{ message.content }}</div>
                </div>
                <div class="flex items-center text-xs text-gray-500 px-2">
                  <div class="i-lucide-clock h-3 w-3 mr-1"></div>
                  <span>{{ formatTime(message.timestamp) }}</span>
                </div>
              </div>
              <template v-if="message.isUser">
                <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 ml-2">
                  <img class="aspect-square h-full w-full" src="https://fakeimg.pl/200x200/6B7280/fff" />
                </span>
              </template>
            </div>
          </motion.div>
        </div>
      </div>
      <div class="p-4 border-t bg-white">
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <textarea
              v-model="inputMessage"
              @keydown.enter.prevent="handleSendMessage"
              placeholder="输入您的问题..."
              class="flex w-full border bg-white px-3 py-2 text-sm pr-24 min-h-[60px] max-h-[120px] resize-none rounded-2xl focus:ring-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-gray-200 focus:border-purple-300 focus:ring-purple-300"></textarea>
            <div class="absolute right-3 bottom-3 flex items-center space-x-2">
              <button
                @click="handleSendMessage"
                :disabled="!inputMessage.trim() || !selectedCategory"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium hover:bg-primary/90 h-8 w-8 rounded-full bg-purple-500 p-0 text-white hover:opacity-90 disabled:opacity-50">
                <div class="i-lucide-send h-4 w-4"></div>
              </button>
            </div>
          </div>
          <div class="mt-2 text-xs text-gray-500 text-center">按 Enter 发送，Shift + Enter 换行</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from "motion-v"
import { getTopCategories, askQuestion } from '@/api'

interface Category {
  id: string
  name: string
  description: string
  icon: string
  parent_id: string
  parent: null
  direct_childs: any[]
  created_at: number
  updated_at: number
}

interface Message {
  content: string
  isUser: boolean
  timestamp: number
}

const categories = ref<Category[]>([])
const selectedCategory = ref<Category | null>(null)
const messages = ref<Message[]>([])
const inputMessage = ref('')
const searchQuery = ref('')

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

const selectCategory = (category: Category) => {
  selectedCategory.value = category
  messages.value = []
}

const handleSendMessage = async () => {
  if (!inputMessage.value.trim() || !selectedCategory.value) return

  const userMessage = inputMessage.value.trim()
  messages.value.push({
    content: userMessage,
    isUser: true,
    timestamp: Date.now()
  })

  inputMessage.value = ''

  try {
    const response = await askQuestion({
      category_id: selectedCategory.value.id,
      question: userMessage,
      top_k: 3
    })

    if (response.code === 0) {
      messages.value.push({
        content: response.data.answer,
        isUser: false,
        timestamp: Date.now()
      })
    }
  } catch (error) {
    console.error('Failed to get answer:', error)
    messages.value.push({
      content: '抱歉，获取答案时出现错误，请稍后重试。',
      isUser: false,
      timestamp: Date.now()
    })
  }
}

onMounted(async () => {
  try {
    const response = await getTopCategories({
      page: 1,
      pagesize: 20
    })
    if (response.code === 0) {
      categories.value = response.data.list
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  }
})
</script>

<style scoped></style>