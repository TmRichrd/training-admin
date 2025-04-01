<template>
  <div class="p-6">
    <h1 class="text-2xl font-medium mb-6">我的培训</h1>
    <div
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-t border-border pt-6">
      <div class="grid md:grid-cols-2 gap-4">
        <div class="rounded-lg border text-card-foreground shadow-sm bg-white" v-for="item in 2" :key="item">
          <div class="flex flex-col space-y-1.5 p-6 pb-2">
            <div class="flex items-center justify-between">
              <div
                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200">
                医疗法规</div>
              <div class="text-sm text-gray-500">2024-03-24 15:34:45</div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <h3 class="font-medium mb-2">临床药品研发到上市需要经过的步骤</h3>
            <div class="flex items-center text-sm text-gray-500">
              <div class="i-lucide-clock w-4 h-4 mr-1"></div>
              学习时长：3分45秒
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