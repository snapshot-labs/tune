<script setup lang="ts">
import TunePopover from './TunePopover.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 520 }">
    <Variant title="default">
      <TunePopover label="Button" class="mb-[160px] ml-3" placement="bottom-start">
        <template #content>
          <div>
            <div class="p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam vitae eveniet
              vel ex praesentium nam quis deserunt porro harum. Magni maiores ipsa ea? Rem, quidem.
              Quas sunt ducimus rerum.
            </div>
          </div>
        </template>
      </TunePopover>
    </Variant>
    <Variant title="placement top">
      <TunePopover label="Button" class="ml-3 mt-[160px]" placement="top-start">
        <template #content>
          <div>
            <div class="p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam vitae eveniet
              vel ex praesentium nam quis deserunt porro harum. Magni maiores ipsa ea? Rem, quidem.
              Quas sunt ducimus rerum.
            </div>
          </div>
        </template>
      </TunePopover>
    </Variant>
    <Variant title="disabled">
      <TunePopover label="Button" class="mb-[160px] ml-3" disabled>
        <template #content>
          <div>
            <div class="p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam vitae eveniet
              vel ex praesentium nam quis deserunt porro harum. Magni maiores ipsa ea? Rem, quidem.
              Quas sunt ducimus rerum.
            </div>
          </div>
        </template>
      </TunePopover>
    </Variant>
  </Story>
</template>
