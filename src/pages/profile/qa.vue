<template>
  <div class="p-6">
    <h1 class="text-2xl font-medium mb-6">我的答疑</h1>
    <div class="border-t pt-6">
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <div class="i-lucide-message-square h-6 w-6 text-purple-600"></div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium">总会话数</h3>
                    <p class="text-sm text-gray-500">所有答疑会话</p>
                  </div>
                </div>
                <div class="text-2xl font-bold text-purple-600">4</div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <div class="i-lucide-bot h-6 w-6 text-blue-600"></div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium">总消息数</h3>
                    <p class="text-sm text-gray-500">所有答疑消息</p>
                  </div>
                </div>
                <div class="text-2xl font-bold text-blue-600">40</div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <div class="i-lucide-calendar h-6 w-6 text-green-600"></div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium">最近活动</h3>
                    <p class="text-sm text-gray-500">最近的答疑</p>
                  </div>
                </div>
                <div class="text-2xl font-bold text-green-600">3月28日</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">全部会话 (4)</h2>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors text-white h-10 px-4 py-2 bg-purple-600 hover:bg-purple-700">
              <div class="i-lucide-message-square h-4 w-4 mr-2"></div>
              新建会话
            </button>
          </div>
          <div class="space-y-4">
            <div v-for="item in 4" :key="item">
              <div class="rounded-lg border text-black bg-white shadow-sm hover:shadow-md transition-shadow group">
                <div class="p-6">
                  <div class="flex items-start">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3">
                      <img class="aspect-square h-full w-full" src="https://fakeimg.pl/200x200/6B7280/fff" />
                    </span>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <h3 class="font-medium truncate text-gray-800">医疗法规咨询</h3>
                        </div>
                        <div class="flex items-center ml-2">
                          <span class="text-xs text-gray-500 whitespace-nowrap">3月28日</span>
                          <button
                            class="inline-flex items-center bg-transparent justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-purple-50 hover:text-purple-500 h-8 w-8 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="i-lucide-ellipsis-vertical h-4 w-4"></div>
                          </button>
                        </div>
                      </div>
                      <p class="text-sm truncate mt-1 text-gray-500">医疗法规要求所有医疗机构必须遵守《医疗机构管理条例》和《执业医师法》等相关法律法规。</p>
                      <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <div class="flex items-center text-xs text-gray-500">
                          <div class="i-lucide-message-square h-3.5 w-3.5 mr-1"></div>
                          <span>12 条消息</span>
                          <span class="mx-2">•</span>
                          <div class="i-lucide-clock h-3.5 w-3.5 mr-1"></div>
                          <span>最近活动: 2025-03-28</span>
                        </div>
                        <button
                          class="inline-flex items-center bg-transparent justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-9 rounded-md px-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                          查看会话
                          <div class="i-lucide-arrow-right ml-1 h-3.5 w-3.5"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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