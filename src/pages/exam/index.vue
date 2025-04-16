<template>
  <div class="p-4 md:p-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h1 class="text-2xl font-medium mb-2">{{ examData?.title }}</h1>
      </div>
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border bg-white hover:bg-purple-100 transition-all hover:text-purple-400 h-9 rounded-md px-3 mt-2 md:mt-0">
        退出考试
      </button>
    </div>
    <div class="mb-6">
      <div class="rounded-lg border shadow-sm bg-white">
        <div class="flex flex-col space-y-1.5 p-6 pb-2">
          <h3 class="font-semibold tracking-tight text-lg flex items-center justify-between">
            <div class="flex items-center">
              <div class="i-lucide-clock h-5 w-5 mr-2 text-purple-600"></div>
              {{ examData?.title }} - 考试进行中
            </div>
            <div class="flex items-center text-green-600">
              <div class="i-lucide-clock h-5 w-5 mr-2 text-green-600"></div>
              剩余时间: {{ formatTime(timeLeft) }}
            </div>
          </h3>
        </div>
        <div class="p-6 pt-0">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>考试进度</span>
                <span>{{ progress }}%</span>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-purple-50 h-2">
                <div class="h-full w-full flex-1 bg-purple-500 transition-all" :style="{ width: `${progress}%` }">
                </div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>剩余时间</span>
                <span>{{ timeProgress }}%</span>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-red-50 h-2">
                <div class="h-full w-full flex-1 bg-red-600 transition-all" :style="{ width: `${timeProgress}%` }">
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div>已答: {{ Object.keys(selectedAnswers).length }}/{{ examData?.question_items.length }} 题</div>
            <div>当前: 第 {{ currentQuestionIndex + 1 }} 题</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm" v-if="currentQuestion">
      <h2 class="text-lg font-medium mb-6">{{ currentQuestionIndex + 1 }}、{{ currentQuestion.question }}</h2>
      <div class="grid gap-2 space-y-4">
        <div v-for="(optionText, optionKey) in currentQuestion.options" :key="optionKey" class="flex items-center space-x-2">
          <input 
            :type="currentQuestion.question_type === 'single' ? 'radio' : 'checkbox'"
            :id="optionKey"
            :name="currentQuestion.id"
            :value="optionKey"
            :checked="selectedAnswers[currentQuestion.id]?.includes(optionKey)"
            @change="handleAnswerSelect(optionKey)"
            class="checked:bg-purple-600 appearance-none rel border border-purple-500 wh-4 rounded-full before:abs before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:rounded-full before:bg-white before:w-1 before:h-1">
          <label :for="optionKey">{{ optionKey }}、{{ optionText }}</label>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <button
          @click="goToPreviousQuestion"
          :disabled="currentQuestionIndex === 0"
          class="inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white h-10 px-4 py-2 transition-colors hover:bg-purple-100 hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed">
          上一题
        </button>
        <div class="flex gap-2">
          <button
            @click="goToNextQuestion"
            :disabled="currentQuestionIndex === (examData?.question_items.length || 0) - 1"
            class="inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white h-10 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed">
            下一题
          </button>
        </div>
      </div>
    </div>
    <div class="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
      <div class="flex items-start gap-2">
        <div class="i-lucide-circle-help h-5 w-5 text-blue-600 mt-0.5"></div>
        <div>
          <h3 class="font-medium text-blue-700">考试提示</h3>
          <ul class="mt-2 text-sm text-blue-700 space-y-1">
            <li>• 请在规定时间内完成所有题目</li>
            <li>• 可以通过题目导航快速跳转到任意题目</li>
            <li>• 提交前请确保已完成所有题目</li>
            <li>• 提交后将无法修改答案</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { takeExam, submitExam } from '@/api'

const route = useRoute()
const router = useRouter()

interface Question {
  id: string
  question: string
  options: Record<string, string>
  answer: string[]
  explanation: string
  difficulty: number
  question_type: 'single' | 'multiple'
  knowledge_point_ids: string[]
}

interface ExamData {
  id: string
  title: string
  description: string
  category_id: string
  questions: string[]
  question_items: Question[]
  total_score: number
  pass_score: number
  minutes: number
  type: string
}

const examData = ref<ExamData | null>(null)
const currentQuestionIndex = ref(0)
const selectedAnswers = ref<Record<string, string[]>>({})
const timeLeft = ref(0)
const timer = ref<number | null>(null)

const currentQuestion = computed(() => {
  if (!examData.value) return null
  return examData.value.question_items[currentQuestionIndex.value]
})

const progress = computed(() => {
  if (!examData.value) return 0
  return Math.round((currentQuestionIndex.value + 1) / examData.value.question_items.length * 100)
})

const timeProgress = computed(() => {
  if (!examData.value) return 0
  return Math.round((examData.value.minutes * 60 - timeLeft.value) / (examData.value.minutes * 60) * 100)
})

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

const startTimer = () => {
  if (!examData.value) return
  timeLeft.value = examData.value.minutes * 60
  timer.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      if (timer.value) clearInterval(timer.value)
      // Handle exam timeout
    }
  }, 1000)
}

const handleAnswerSelect = (option: string) => {
  if (!currentQuestion.value) return
  
  if (currentQuestion.value.question_type === 'single') {
    selectedAnswers.value[currentQuestion.value.id] = [option]
  } else {
    if (!selectedAnswers.value[currentQuestion.value.id]) {
      selectedAnswers.value[currentQuestion.value.id] = []
    }
    const index = selectedAnswers.value[currentQuestion.value.id].indexOf(option)
    if (index === -1) {
      selectedAnswers.value[currentQuestion.value.id].push(option)
    } else {
      selectedAnswers.value[currentQuestion.value.id].splice(index, 1)
    }
  }
}

const goToNextQuestion = async () => {
  if (!examData.value) return
  
  // If this is the last question, submit the exam
  if (currentQuestionIndex.value === examData.value.question_items.length - 1) {
    try {
      const response = await submitExam(examData.value.id)
      if (response.code === 0) {
        // Clear the timer
        if (timer.value) {
          clearInterval(timer.value)
        }
        // Go back to the previous page
        router.back()
      }
    } catch (error) {
      console.error('Failed to submit exam:', error)
    }
  } else {
    // Move to the next question
    currentQuestionIndex.value++
  }
}

const goToPreviousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
  }
}

const fetchExamData = async () => {
  try {
    const examId = route.params.id as string
    const response = await takeExam(examId)
    if (response.code === 0) {
      examData.value = response.data
      startTimer()
    }
  } catch (error) {
    console.error('Failed to fetch exam data:', error)
  }
}

onMounted(() => {
  fetchExamData()
})

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<style scoped></style>