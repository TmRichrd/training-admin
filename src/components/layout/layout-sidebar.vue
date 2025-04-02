<template>
  <div
    class="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 -translate-x-full">
    <div class="flex h-full flex-col overflow-hidden bg-white shadow-lg">
      <div class="h-16 flex items-center px-6 border-b border-gray-200 bg-gradient-primary">
        <div class="flex items-center gap-2">
          <div class="i-lucide:sparkles wh-6 text-white"></div>
          <h1 class="text-xl font-medium text-white">培训助手</h1>
        </div>
      </div>
      <!--  -->
      <div class="flex-1 overflow-y-auto py-2">
        <layout-menus>
          <layout-menu-item @toggle="handleToggleFold" :item="item" v-for="item in routers"
            :key="item.path"></layout-menu-item>
        </layout-menus>
      </div>
      <!--  -->
      <div class="border-t border-gray-200 p-4">
        <div class="rounded-md bg-purple-50 p-3 cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="i-lucide:award h-10 w-10 text-purple-600"></div>
            <div>
              <h3 class="font-medium text-purple-700">学习进度</h3>
              <div class="mt-1 text-xs text-purple-600">已完成 65% 的课程</div>
              <div class="mt-2 h-1.5 w-full rounded-full bg-purple-100">
                <div class="h-1.5 rounded-full bg-purple-600" style="width: 65%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const routers = ref([
  {
    path: "/dashboard",
    name: "我要培训",
    icon: "i-lucide:book-open",
    children: []
  },
  {
    path: "/examine",
    name: "我要考核",
    icon: "i-lucide-clipboard-check",
    children: []
  },
  {
    path: "/tutoring",
    name: "我要答疑",
    icon: "i-lucide-circle-help",
    children: []
  },
  {
    path: "/profile",
    name: "个人中心",
    icon: "i-lucide-user",
    fold: true,
    children: [
      {
        path: "/profile/training",
        name: "我的培训",
        icon: "i-lucide-book-marked"
      },
      {
        path: "/profile/examination",
        name: "我的考试",
        icon: "i-lucide-file-check"
      },
      {
        path: "/profile/qa",
        name: "我的答疑",
        icon: "i-lucide-message-square"
      },
      {
        path: "/profile/info",
        name: "我的信息",
        icon: "i-lucide-info"
      },
      {
        path: "/profile/change-password",
        name: "修改密码",
        icon: "i-lucide-lock"
      },
    ]
  },
])
const handleToggleFold = (fold: boolean, item: any) => {
  // item.fold = fold
}
</script>

<style scoped></style>