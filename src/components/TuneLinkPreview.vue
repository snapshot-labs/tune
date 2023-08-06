<script setup lang="ts">
import { ref } from 'vue';
import { debouncedWatch } from '@vueuse/core';
import IconTuneDiscord from '~icons/tune/discord';

const IFRAMELY_API_KEY = 'd155718c86be7d5305ccb6';

const props = defineProps<{
  link: string;
}>();

const preview = ref<any>(null);
const loading = ref(false);

async function fetchPreview(link: string) {
  preview.value = null;
  if (!isValidURL(link)) return;

  const url = buildIframelyURL(link);
  try {
    loading.value = true;
    const result = await fetch(url);
    preview.value = await result.json();
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

function buildIframelyURL(link: string) {
  return `https://cdn.iframe.ly/api/iframely?url=${encodeURI(link)}&api_key=${IFRAMELY_API_KEY}`;
}

function isValidURL(link: string) {
  try {
    new URL(link);
    return true;
  } catch {
    return false;
  }
}

debouncedWatch(
  () => props.link,
  newLink => fetchPreview(newLink),
  { debounce: 500, immediate: true }
);
</script>

<template>
  <button class="tune-link-preview-wrapper flex w-full items-center">
    <div class="shrink-0 px-4">
      <div v-if="!preview?.links.icon[0].href || loading">
        <div class="tune-loading-bg h-[32px] w-[32px] rounded-lg" />
      </div>
      <div v-else class="tune-link-preview-icon rounded-lg">
        <IconTuneDiscord v-if="preview.links.icon[0].href.includes('discord.com')" />
        <img
          v-else
          :src="preview.links.icon[0].href"
          alt="link preview image"
          height="32"
          width="32"
        />
      </div>
    </div>

    <div class="overflow-hidden py-4 pr-4">
      <div v-if="!preview?.meta.title || loading" class="flex h-[40px] flex-col justify-center">
        <div class="tune-loading-bg h-[10px] w-[90px] rounded" />
        <div class="tune-loading-bg mt-2 h-[10px] w-[160px] rounded" />
      </div>
      <div v-else>
        <div class="tune-link-preview-heading line-clamp-1 text-left">
          {{ preview.meta.title }}
        </div>
        <div
          v-if="preview.meta.description"
          class="tune-link-preview-description mt-1 line-clamp-1 text-left"
        >
          {{ preview.meta.description }}
        </div>
      </div>
    </div>
  </button>
</template>
