<template>
  <div class="flex h-full">
    <div class="w-80 flex-shrink-0 border-r border-gray-200 flex flex-col h-full bg-white">
      <div class="p-4 border-b">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-lg font-medium flex items-center">
            <div class="i-lucide-message-square mr-2 h-5 w-5 text-purple-600"></div>
            我要答疑
          </h1>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium text-white bg-purple-600 transition-colors hover:bg-primary/90 h-9 rounded-md px-3 hover:opacity-90">
            <div class="i-lucide-plus h-4 w-4 mr-1"></div>
            新会话
          </button>
        </div>
        <div class="relative">
          <div class="i-lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"></div>
          <input
            class="flex h-10 w-full border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus:ring-purple-600 focus-visible:ring-ring focus-visible:ring-offset-1 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 pl-9 rounded-full bg-gray-50" />
        </div>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div class="p-2 space-y-2">
          <div class="p-3 rounded-lg cursor-pointer transition-colors bg-purple-50">
            <div class="flex items-start">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3">
                <img src="https://fakeimg.pl/200x200/6B7280/fff" class="aspect-square h-full w-full" />
              </span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h3 class="font-medium truncate text-gray-800">新会话</h3>
                  <div class="flex items-center ml-2">
                    <span class="text-xs text-gray-500 whitespace-nowrap">16:02</span>
                    <button
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-transparent transition-colors h-8 w-8 ml-1 hover:bg-purple-100 hover:text-purple-500">
                      <div class="i-lucide-ellipsis-vertical h-4 w-4"></div>
                    </button>
                  </div>
                </div>
                <p class="text-sm truncate mt-1 text-gray-500">您好！我是您的医疗法规培训助手，请问有什么可以帮助您的？</p>
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
              <img class="aspect-square h-full w-full" src="https://fakeimg.pl/200x200/6B7280/fff">
            </span>
            <div>
              <h1 class="text-lg font-medium">医疗法规咨询</h1>
              <p class="text-sm text-gray-500">3 条消息</p>
            </div>

          </div>
          <buttton
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors h-10 w-10 hover:bg-purple-100 hover:text-purple-500">
            <div class="i-lucide-ellipsis-vertical h-5 w-5"></div>
          </buttton>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-4 bg-gradient-subtle">
        <div class="max-w-3xl mx-auto space-y-4">
          <div class="flex group justify-start">
            <div class="flex items-start max-w-[80%]">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 mr-2">
                <img class="aspect-square h-full w-full" src="https://fakeimg.pl/200x200/6B7280/fff">
              </span>
              <div class="relative">
                <div class="rounded-2xl px-4 py-2 mb-1 bg-white shadow-sm">
                  <div class="whitespace-pre-wrap">您好！我是您的医疗法规培训助手，请问有什么可以帮助您的？</div>
                </div>
                <div class="flex items-center text-xs text-gray-500 px-2">
                  <div class="i-lucide-clock h-3 w-3 mr-1"></div>
                  <span>14:30</span>
                  <div class="ml-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="hover:text-gray-700 bg-transparent">
                      <div class="i-lucide-thumbs-up h-3 w-3"></div>
                    </button>
                    <button class="hover:text-gray-700 bg-transparent">
                      <div class="i-lucide-thumbs-down h-3 w-3"></div>
                    </button>
                    <button class="hover:text-red-600 bg-transparent">
                      <div class="i-lucide-trash2 h-3 w-3"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex group justify-end">
            <div class="flex items-start max-w-[80%]">
              <div class="relative">
                <div class="rounded-2xl px-4 py-2 mb-1 bg-gradient-primary text-white">
                  <div class="whitespace-pre-wrap">我想了解医疗机构需要遵守哪些法规？</div>
                </div>
                <div class="flex items-center text-xs text-gray-500 px-2">
                  <div class="i-lucide-clock h-3 w-3 mr-1"></div>
                  <span>14:30</span>
                  <div class="ml-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="hover:text-red-600 bg-transparent">
                      <div class="i-lucide-trash2 h-3 w-3"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-t bg-white">
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <textarea placeholder="输入您的问题..."
              class="flex w-full border bg-white px-3 py-2 text-sm pr-24 min-h-[60px] max-h-[120px] resize-none rounded-2xl focus:ring-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-gray-200 focus:border-purple-300 focus:ring-purple-300"></textarea>
              <div class="absolute right-3 bottom-3 flex items-center space-x-2">
                <button class="inline-flex bg-transparent items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-8 w-8 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50">
                  <div class="i-lucide-paperclip h-4 w-4"></div>
                </button>
                <button class="inline-flex bg-transparent items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-8 w-8 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50">
                  <div class="i-lucide-image h-4 w-4"></div>
                </button>
                <button class="inline-flex bg-transparent items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-8 w-8 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50">
                  <div class="i-lucide-mic h-4 w-4"></div>
                </button>
                <button disabled class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium hover:bg-primary/90 h-8 w-8 rounded-full bg-purple-500 p-0 text-white hover:opacity-90 disabled:opacity-50">
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

</script>

<style scoped></style>