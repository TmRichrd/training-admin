<template>
  <div class="p-6">
    <h1 class="text-2xl font-medium mb-6">修改密码</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-border pt-6">
      <div class="lg:col-span-2">
        <div class="rounded-lg border text-card-foreground bg-white shadow-md hover:shadow-lg transition-shadow">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
              <div class="i-lucide-shield-check h-5 w-5 text-purple-600"></div>
              密码修改
            </h3>
            <p class="text-sm text-muted-foreground">请输入您的原密码和新密码，确保新密码足够安全</p>
          </div>
          <div class="p-6 pt-0">
            <form class="space-y-6">
              <div class="space-y-2">
                <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                  for="oldPassword">原密码：</label>
                <div class="relative">
                  <input autocomplete="off"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    id="oldPassword" type="password" value="" name="oldPassword">
                  <button
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 bg-transparent">
                    <div class="i-lucide-eye h-5 w-5"></div>
                  </button>
                </div>
              </div>
              <div class="space-y-2">
                <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                  for="oldPassword">新密码：</label>
                <div class="relative">
                  <input autocomplete="off"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    id="oldPassword" type="password" value="" name="oldPassword">
                  <button
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 bg-transparent">
                    <div class="i-lucide-eye h-5 w-5"></div>
                  </button>
                </div>
              </div>
              <div class="space-y-2">
                <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                  for="oldPassword">确认新密码：</label>
                <div class="relative">
                  <input autocomplete="off"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    id="oldPassword" type="password" value="" name="oldPassword">
                  <button
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 bg-transparent">
                    <div class="i-lucide-eye h-5 w-5"></div>
                  </button>
                </div>
              </div>
              <div class="pt-4">
                <button
                  class="inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background h-10 px-4 py-2 w-full bg-purple-600 hover:bg-purple-700 transition-all"
                  type="submit">确认修改</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="lg:col-span-1">
        <div
          class="rounded-lg border bg-card text-card-foreground bg-gradient-to-br from-purple-50 to-purple-50 shadow-md">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="font-semibold tracking-tight text-lg flex items-center gap-2">
              <div class="i-lucide-circle-alert h-5 w-5 text-purple-600"></div>
              密码安全提示
            </h3>
          </div>
          <div class="p-6 pt-0">
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2">
                <div class="rounded-full bg-purple-100 p-1 mt-0.5">
                  <div class="i-lucide-circle-check-big h-3 w-3 text-purple-600"></div>
                </div>
                <span>使用至少8个字符的密码</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="rounded-full bg-purple-100 p-1 mt-0.5">
                  <div class="i-lucide-circle-check-big h-3 w-3 text-purple-600"></div>
                </div>
                <span>包含大写和小写字母</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="rounded-full bg-purple-100 p-1 mt-0.5">
                  <div class="i-lucide-circle-check-big h-3 w-3 text-purple-600"></div>
                </div>
                <span>包含数字和特殊字符</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="rounded-full bg-purple-100 p-1 mt-0.5">
                  <div class="i-lucide-circle-check-big h-3 w-3 text-purple-600"></div>
                </div>
                <span>避免使用容易猜到的信息，如生日或姓名</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div></template>

<script setup lang="ts">

</script>

<style scoped></style>