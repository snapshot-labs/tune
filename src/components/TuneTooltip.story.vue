<script setup lang="ts"></script>

<template>
  <Story :layout="{ type: 'grid', width: 380 }">
    <Variant title="default">
      <div class="my-[100px] flex items-center justify-center">
        <div v-tippy="{ content: 'Tooltip text', placement: 'top' }">
          <HstButton class="htw-p-2">Hover me</HstButton>
        </div>
      </div>
    </Variant>
    <Variant title="show on click">
      <div class="my-[100px] flex items-center justify-center">
        <div v-tippy="{ content: 'Tooltip text', placement: 'top', trigger: 'click' }">
          <HstButton class="htw-p-2">Click me</HstButton>
        </div>
      </div>
    </Variant>
    <Variant title="interactive">
      <div class="my-[100px] flex items-center justify-center">
        <div v-tippy="{ content: 'Tooltip text', placement: 'top', interactive: true }">
          <HstButton class="htw-p-2">Hover me</HstButton>
        </div>
      </div>
    </Variant>
    <Variant title="show on create">
      <div class="my-[100px] flex items-center justify-center">
        <div v-tippy="{ content: 'Tooltip text', placement: 'top', showOnCreate: true }">
          <HstButton class="htw-p-2">Hover me</HstButton>
        </div>
      </div>
    </Variant>
  </Story>
</template>
