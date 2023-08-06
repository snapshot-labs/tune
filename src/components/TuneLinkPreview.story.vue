<script setup lang="ts">
import TuneLinkPreview from './TuneLinkPreview.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 680 }">
    <Variant title="default">
      <TuneLinkPreview link="https://ethereum.org/en/" />
    </Variant>
    <Variant title="discord">
      <TuneLinkPreview
        link="https://discord.com/channels/707079246388133940/729758076445655052/1113841079897292890"
      />
    </Variant>
  </Story>
</template>
