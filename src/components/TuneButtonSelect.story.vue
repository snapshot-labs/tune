<script setup lang="ts">
import TuneButtonSelect from './TuneButtonSelect.vue';
import IconCube from '~icons/heroicons-outline/cube';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 200 }">
    <Variant title="default">
      <div class="space-y-3">
        <TuneButtonSelect> Select </TuneButtonSelect>
        <TuneButtonSelect>
          <IconCube />
          Select
        </TuneButtonSelect>
        <TuneButtonSelect> <IconCube /> </TuneButtonSelect>
      </div>
    </Variant>
    <Variant title="without chevron">
      <div class="space-y-3">
        <TuneButtonSelect :show-chevron="false"> Select </TuneButtonSelect>
        <TuneButtonSelect :show-chevron="false">
          <IconCube />
          Select
        </TuneButtonSelect>
        <TuneButtonSelect :show-chevron="false"> <IconCube /> </TuneButtonSelect>
      </div>
    </Variant>

    <Variant title="default disabled">
      <div class="space-y-3">
        <TuneButtonSelect disabled> Select </TuneButtonSelect>
        <TuneButtonSelect disabled>
          <IconCube />
          Select
        </TuneButtonSelect>
        <TuneButtonSelect disabled> <IconCube /> </TuneButtonSelect>
      </div>
    </Variant>
  </Story>
</template>
