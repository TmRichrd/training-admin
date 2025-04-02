<template>
  <div class="p-4 md:p-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h1 class="text-2xl font-medium mb-2">药品知识专项测试</h1>
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
              药品知识专项测试 - 考试进行中
            </div>
            <div class="flex items-center text-green-600">
              <div class="i-lucide-clock h-5 w-5 mr-2 text-green-600"></div>
              剩余时间: 09:04
            </div>
          </h3>
        </div>
        <div class="p-6 pt-0">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>考试进度</span>
                <span>30%</span>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-purple-50 h-2">
                <div class="h-full w-full flex-1 bg-purple-500 transition-all" :style="{ width: '30%' }">
                </div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>剩余时间</span>
                <span>10%</span>
              </div>
              <div class="relative w-full overflow-hidden rounded-full bg-red-50 h-2">
                <div class="h-full w-full flex-1 bg-red-600 transition-all" :style="{ width: '10%' }">
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div>已答: 0/3 题</div>
            <div>当前: 第 1 题</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h2 class="text-lg font-medium mb-6">1、医疗法规考试题目一：临床试验申请（IND）提交后，FDA审评的标准时间是多久？</h2>
      <div class="grid gap-2 space-y-4">
        <div class="flex items-center space-x-2">
          <input type="radio" id="30" name="name" value="30"
            class="checked:bg-purple-600 appearance-none rel border border-purple-500 wh-4 rounded-full before:abs before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:rounded-full before:bg-white before:w-1 before:h-1">
          <label for="30">A、30天</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" id="60" name="name" value="60"
            class="checked:bg-purple-600 appearance-none rel border border-purple-500 wh-4 rounded-full before:abs before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:rounded-full before:bg-white before:w-1 before:h-1">
          <label for="60">B、60天</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" id="90" name="name" value="90"
            class="checked:bg-purple-600 appearance-none rel border border-purple-500 wh-4 rounded-full before:abs before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:rounded-full before:bg-white before:w-1 before:h-1">
          <label for="90">C、90天</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" id="120" name="name" value="120"
            class="checked:bg-purple-600 appearance-none rel border border-purple-500 wh-4 rounded-full before:abs before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:rounded-full before:bg-white before:w-1 before:h-1">
          <label for="120">D、120天</label>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <button
          class="inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white h-10 px-4 py-2 transition-colors hover:bg-purple-100 hover:text-purple-400">上一题</button>
        <div class="flex gap-2">
          <button
            class="inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white h-10 px-4 py-2">下一题</button>
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

</script>

<style scoped></style>