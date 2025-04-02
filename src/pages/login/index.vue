<template>
  <!-- <Loading/> -->
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-50">
    <div class="h-2 bg-gradient-to-r from-purple-500 to-purple-700 w-full"></div>
    <div class="flex-1 flex flex-col md:flex-row">
      <div
        class="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 flex-col justify-center items-center relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div class="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-white blur-3xl"></div>
        </div>
        <div class="relative z-10 max-w-md text-center">
          <motion.div :initial="{ y: -20, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :transition="{ duration: 0.5 }"
            class="flex items-center justify-center mb-6">
            <div class="i-lucide-sparkles h-12 w-12 text-white mr-3"></div>
            <h1 class="text-4xl font-bold">培训助手</h1>
          </motion.div>
          <motion.div :initial="{ y: 20, opacity: 0 }" :animate="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.2 }">
            <h2 class="text-2xl font-medium mb-6">医疗法规培训与考核系统</h2>
            <p class="text-lg opacity-90 mb-8">提供专业的医疗法规培训、考核和答疑服务，助力医疗从业人员提升专业素养</p>
          </motion.div>
          <motion.div :initial="{ scale: 0.9, opacity: 0 }" :animate="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.4 }" class="grid grid-cols-3 gap-4 text-center">
            <div class="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 class="text-xl font-bold">专业培训</h3>
              <p class="text-sm opacity-80 mt-2">系统化的医疗法规培训课程</p>
            </div>
            <div class="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 class="text-xl font-bold">在线考核</h3>
              <p class="text-sm opacity-80 mt-2">全面评估知识掌握程度</p>
            </div>
            <div class="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 class="text-xl font-bold">智能答疑</h3>
              <p class="text-sm opacity-80 mt-2">AI辅助解答专业问题</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center p-6 rel">
        <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }"
          class="w-full max-w-md">
          <div class="md:hidden flex items-center justify-center mb-8">
            <div class="i-lucide-sparkles h-8 w-8 text-purple-600 mr-2"></div>
            <h1 class="text-2xl font-bold text-purple-700">培训助手</h1>
          </div>
          <div class="rounded-lg border bg-white text-black border-gray-200 shadow-lg">
            <div class="flex flex-col p-6 space-y-1">
              <h3 class="font-semibold tracking-tight text-2xl text-center">欢迎登录</h3>
              <p class="text-sm text-gray-500 text-center">请使用微信登录系统</p>
            </div>
            <div class="p-6 pt-0 flex flex-col items-center">
              <button @click="login"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full bg-green-500 hover:bg-green-600 text-white">
                <div class="h-5 w-5 mr-2 fill-current i-ic:sharp-wechat"></div>
                微信登录
              </button>
            </div>
            <div class="items-center p-6 pt-0 flex flex-col space-y-4">
              <div class="text-sm text-center text-gray-500">请点击微信登录系统</div>
            </div>
          </div>
        </motion.div>
        <div class="text-center text-sm text-gray-500 absolute bottom-6 left-1/2 -translate-x-1/2">
          <div class="flex items-center justify-center mb-2">
            <div class="i-lucide-lock h-4 w-4 mr-1 text-gray-400"></div>
            <span>安全登录，保障账户信息</span>
          </div>
          <p>© 2025 培训助手 - 医疗法规培训与考核系统</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v"
import { generateMockUserData } from "@/utils";
import { useUserStore } from "@/store/userStore";
const router = useRouter()
const userStore = useUserStore()
const login = ()=>{
  const user = generateMockUserData()
  userStore.change(user)
  router.push('/')
}
</script>

<style scoped></style>