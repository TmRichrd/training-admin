<template>
  <header
    class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm md:px-6">
    <div class="flex items-center">
      <button
        class="inline-flex items-center bg-transparent justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-purple-100 hover:text-purple-600 h-10 w-10 mr-2 md:hidden">
        <div class="i-lucide-menu h-5 w-5"></div>
      </button>
      <div class="hidden md:block">
        <h1 class="text-xl font-medium text-purple-600">培训助手</h1>
      </div>
      <div class="relative ml-4 hidden md:block">
        <div class="i-lucide-search absolute left-2.5 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2"></div>
        <input
          class="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-purple-500 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 w-[200px] rounded-full bg-gray-50 pl-8 md:w-[260px]"
          placeholder="搜索..." type="search">
      </div>
    </div>
    <div class="flex items-center gap-3 md:gap-6 cursor-pointer">
      <button
        class="inline-flex bg-transparent hover:bg-purple-50 hover:text-purple-500 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  h-10 w-10 relative">
        <div class="i-lucide-bell h-5 w-5"></div>
        <div
          class="border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 p-0 text-xs text-white">
          3</div>
      </button>
      <div
        class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 flex items-center gap-2 rounded-full">
        <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border border-purple-200">
          <img :src="state.avatar" class="aspect-square h-full w-full" />
        </span>
        <span class="hidden md:inline-block">{{ state.name }}</span>
        <div class="i-lucide-chevron-down h-4 w-4 hidden md:inline-block"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const { state } = userStore
</script>

<style scoped></style>