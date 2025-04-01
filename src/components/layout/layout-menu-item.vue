<template>
  <router-link tag="div" :to="item.path" custom v-slot="{ isActive, navigate }" class="rel z-2 block" exact>
    <div @click="navigate">
      <div class="flex flex-col">
        <div
          class="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer text-gray-700  hover:bg-gray-100"
          :class="isActive ? 'bg-purple-50 text-purple-700' : 'bg-transparent'">
          <div :class="{
            'h-5 w-5': true,
            [item.icon]: true,
            'text-purple-600': isActive
          }"></div>
          <span>{{ item.name }}</span>
        </div>
        <div v-if="item.children && item.children.length" class="flex flex-col mt-1 space-y-1" v-show="item.fold">
          <router-link tag="div" v-for="child in item.children" :key="child.path" exact v-slot="{ isActive: childActive }"
            :to="child.path">
            <div :class="childActive ? 'bg-purple-50 text-purple-700' : 'bg-transparent'"
              class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 w-full pl-10">
              <div :class="{
                'h-4 w-4': true,
                [child.icon]: true,
                'text-purple-500': childActive
              }"></div>
              <span>{{ child.name }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  toggle: (fold: boolean, item: any) => void
}>()
// const route = useRoute()
defineProps({
  item: {
    type: Object,
    default: () => { }
  }
})
// const handleToggleFold = () => {
//   emit("toggle", !props.item.fold, props.item)
// }
</script>

<style scoped></style>