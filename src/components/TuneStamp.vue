<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import sha3 from 'js-sha3';
import { useFavicon } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    type?: 'avatar' | 'space' | 'space-sx' | 'space-cover-sx' | 'token';
    id: string;
    size?: number | { width: number; height: number };
    cacheBreaker?: string;
    setFavicon?: boolean;
    defaultFavicon?: string;
  }>(),
  {
    type: 'avatar',
    size: 24
  }
);

const sizeParam = computed(() => {
  if (typeof props.size === 'number') {
    return `?s=${props.size * 2}`;
  } else {
    return `?w=${props.size.width}&h=${props.size.height}`;
  }
});

const imageUrl = computed(() => {
  const cacheParam = props.cacheBreaker ? `&cb=${getCacheHash(props.cacheBreaker)}` : '';

  return `https://cdn.stamp.fyi/${props.type}/${props.id}${sizeParam.value}${cacheParam}`;
});

const imageStyle = computed(() => {
  if (typeof props.size === 'number') {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`
    };
  } else {
    return {
      width: `${props.size.width}px`,
      height: `${props.size.height}px`
    };
  }
});

const imgAlt = computed(() => {
  if (props.type === 'space' || props.type === 'space-sx') {
    return 'Space avatar';
  } else if (props.type === 'space-cover-sx') {
    return 'Space cover';
  } else if (props.type === 'token') {
    return 'Token icon';
  } else {
    return 'Avatar';
  }
});

const spaceImgRadius = computed(() => {
  return typeof props.size === 'number' && props.size >= 48 ? 'space-style-lg' : 'space-style';
});

const imgClasses = computed(() => {
  return [
    {
      'avatar-style': props.type === 'avatar',
      'cover-style': props.type === 'space-cover-sx',
      'rounded-full': props.type === 'token'
    },
    props.type === 'space' || props.type === 'space-sx' ? spaceImgRadius.value : null
  ];
});

function getCacheHash(value?: string) {
  return value ? sha3.sha3_256(value).slice(0, 16) : undefined;
}

const icon = useFavicon();

watchEffect(() => {
  if (props.setFavicon) {
    if (typeof props.size !== 'number')
      throw new Error('Size must be a number when setting favicon');
    const faviconUrl = imageUrl.value.replace(sizeParam.value, '?s=16');
    icon.value = faviconUrl;
  } else {
    icon.value = props.defaultFavicon || '/favicon.png';
  }
});
</script>

<template>
  <img :src="imageUrl" :style="imageStyle" :alt="imgAlt" :class="['tune-stamp', imgClasses]" />
</template>
