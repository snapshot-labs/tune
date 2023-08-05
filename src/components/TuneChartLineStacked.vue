<script setup lang="ts">
defineProps<{
  progress: number[];
}>();
</script>

<template>
  <div class="h-[6px] overflow-hidden rounded-full">
    <div
      v-for="(item, index) in progress"
      :key="index"
      class="float-left h-full"
      :style="{
        width: `${item.toFixed(3)}%`
      }"
      :class="[
        { 'bg-positive-color': index === 0 },
        { 'bg-danger-color': index === 1 },
        { 'bg-gray-500': index === 2 }
      ]"
    />
  </div>
</template>
