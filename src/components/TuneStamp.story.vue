<script setup lang="ts">
import { ref } from 'vue';
import TuneStamp from './TuneStamp.vue';

const setFavicon1 = ref(false);
const setFavicon2 = ref(false);
</script>

<template>
  <Story :layout="{ type: 'grid', width: 750 }">
    <Variant title="avatar">
      <div class="flex gap-3">
        <TuneStamp id="0xE28142c9aBaF726dd92BF41be728Fe3220b34112" :size="80" />
        <TuneStamp id="0xE28142c9aBaF726dd92BF41be728Fe3220b34112" :size="48" />
        <TuneStamp id="0xE28142c9aBaF726dd92BF41be728Fe3220b34112" :size="32" />
        <TuneStamp id="0xE28142c9aBaF726dd92BF41be728Fe3220b34112" :set-favicon="setFavicon1" />
        <TuneStamp id="0xE28142c9aBaF726dd92BF41be728Fe3220b34112" :size="18" />
        <HstButton class="htw-p-2" @click="setFavicon1 = !setFavicon1">Toggle favicon</HstButton>
      </div>
    </Variant>
    <Variant title="space">
      <div class="flex gap-3">
        <TuneStamp id="testsnap6.eth" type="space" :size="80" />
        <TuneStamp id="testsnap6.eth" type="space" :size="48" />
        <TuneStamp id="testsnap6.eth" type="space" :size="32" />
        <TuneStamp id="testsnap6.eth" type="space" :set-favicon="setFavicon2" />
        <TuneStamp id="testsnap6.eth" type="space" :size="18" />
        <HstButton class="htw-p-2" @click="setFavicon2 = !setFavicon2">Toggle favicon</HstButton>
      </div>
    </Variant>
    <Variant title="sx-cover">
      <TuneStamp
        id="0x0f4504ccd7f98368a0f94cde1ade1b624635ffe2"
        :size="{ width: 750, height: 78 }"
        type="space-cover-sx"
      />
    </Variant>
    <Variant title="token">
      <div class="flex gap-3">
        <TuneStamp id="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" type="token" :size="80" />
        <TuneStamp id="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" type="token" :size="48" />
        <TuneStamp id="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" type="token" :size="32" />
        <TuneStamp id="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" type="token" />
        <TuneStamp id="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" type="token" :size="18" />
      </div>
    </Variant>
  </Story>
</template>
