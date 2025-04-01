<template>
  <div class="p-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h1 class="text-2xl font-medium">我的信息</h1>
      <button
        class="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium hover:bg-primary/90 h-10 px-4 py-2 mt-2 md:mt-0 bg-gradient-primary hover:opacity-90">
        <div class="i-lucide-pen mr-2 h-4 w-4"></div>
        编辑信息
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        class="rounded-lg border text-card-foreground bg-white shadow-md hover:shadow-lg transition-shadow lg:col-span-1">
        <div class="p-6 pt-6 flex flex-col items-center">
          <div class="relative">
            <div class="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
              <div class="i-lucide-user h-12 w-12 text-purple-600"></div>
            </div>
            <span class="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-green-500 border-2 border-white"></span>
          </div>
          <h2 class="mt-4 text-xl font-medium">{{ userData.name }}</h2>
          <p class="text-gray-500">{{ userData.position }}</p>
          <p class="text-gray-500 text-sm">{{ userData.department }}</p>
          <div class="w-full mt-6">
            <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">培训完成度</span><span
                class="font-medium">{{ userData.completedCourses }}/{{ userData.totalCourses }}</span></div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-purple-600 h-2 rounded-full"
                :style="{ width: `${(userData.completedCourses / userData.totalCourses) * 100}%` }"></div>
            </div>
          </div>
          <div class="w-full mt-6 flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
              v-for="item in userData.skills" :key="item">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow lg:col-span-2">
        <div class="flex flex-col space-y-1.5 p-6">
          <div class="w-full">
            <div class="items-center justify-center rounded-md p-1 grid w-full grid-cols-2 bg-gray-100">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all text-black bg-white shadow-sm">基本信息</button>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all text-#64748B">证书与成就</button>
            </div>
            <div class="mt-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">电子邮箱</div>
                    <div class="font-medium">{{ userData.email }}</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">手机号码</div>
                    <div class="font-medium">{{ userData.phone }}</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">部门</div>
                    <div class="font-medium">{{ userData.department }}</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">职位</div>
                    <div class="font-medium">{{ userData.department }}</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">入职时间</div>
                    <div class="font-medium">{{ userData.joinDate }}</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">结业时间</div>
                    <div class="font-medium">{{ userData.graduationDate }}</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="rounded-full bg-purple-100 p-2">
                    <div class="i-lucide-mail h-5 w-5 text-purple-600"></div>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-500">员工编号</div>
                    <div class="font-medium">{{ userData.employeeId }}</div>
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
const userData = ref({
  name: "某某某",
  department: "销售部",
  email: "aaa@bbb.com",
  phone: "18600880088",
  joinDate: "2024-12-25",
  graduationDate: "2025-03-15",
  position: "销售代表",
  employeeId: "EMP20241225",
  skills: ["产品知识", "沟通技巧", "客户管理", "销售策略"],
  certifications: [
    { name: "医疗产品销售资格证", date: "2023-10-15" },
    { name: "药品知识培训证书", date: "2024-01-20" },
  ],
  completedCourses: 12,
  totalCourses: 15,
})
</script>

<style scoped></style>