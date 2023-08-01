<script setup lang="ts">
import TuneStamp from './TuneStamp.vue';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    address: string;
    variant?: 'default' | 'expanded';
    username?: string;
    hideAvatarInDefault?: boolean;
    hideUsernameOrAddressInDefault?: boolean;
  }>(),
  {
    variant: 'default'
  }
);

const shortenAddress = (address: string) => {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';
};

const isDefault = computed(() => props.variant === 'default');
const isExpanded = computed(() => props.variant === 'expanded');
const showAvatar = computed(() => !props.hideAvatarInDefault || isExpanded.value);
const showUsername = computed(
  () =>
    (isExpanded.value && props.username) ||
    (!props.hideUsernameOrAddressInDefault && props.username)
);
const showAddress = computed(
  () =>
    (isExpanded.value && props.address) ||
    (!props.hideUsernameOrAddressInDefault && !props.username)
);
</script>

<template>
  <div
    :class="[
      'flex flex-nowrap items-center space-x-[8px]',
      {
        'space-x-3': isExpanded
      }
    ]"
  >
    <TuneStamp v-if="showAvatar" :id="props.address" :size="isExpanded ? 32 : 24" />

    <div
      :class="[
        {
          'space-y-1': isExpanded
        }
      ]"
    >
      <div v-if="showUsername" :class="['w-full truncate', { 'font-semibold': isExpanded }]">
        {{ props.username }}
      </div>

      <div
        v-if="showAddress"
        class="w-full truncate"
        :class="[
          {
            'text-gray-500': isExpanded
          }
        ]"
      >
        {{ shortenAddress(props.address) }}
      </div>
    </div>
  </div>
</template>
