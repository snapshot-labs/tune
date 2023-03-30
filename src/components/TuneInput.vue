<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    hint?: string;
    loading?: boolean;
    error?: string;
    block?: boolean;
    type?: "text" | "number";
    modelValue?: string | number;
    autofocus?: boolean;
    placeholder?: string;
    maxLength?: number;
    readonly?: boolean;
    disable?: boolean;
    definition?: any;
  }>(),
  {
    label: "",
    hint: "",
    loading: false,
    error: "",
    block: true,
    type: "text",
    modelValue: "",
    autofocus: false,
    placeholder: "",
    maxLength: undefined,
    readonly: false,
    disable: false,
    definition: {},
  }
);

defineEmits(["update:modelValue"]);

const inputRef = ref();

const showErrorMessage = ref(false);

function forceShowError() {
  showErrorMessage.value = true;
}

defineExpose({
  forceShowError,
});

onMounted(() => {
  if (props.autofocus) {
    inputRef?.value?.focus();
  }
});
</script>

<template>
  <div>
    <TuneLabelInput
      v-if="label || definition?.title"
      :hint="hint || definition?.description"
    >
      {{ label || definition.title }}
    </TuneLabelInput>
    <div class="flex">
      <div :class="['group relative z-10 flex', { 'w-full': block }]">
        <div
          v-if="$slots.before"
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <slot name="before" />
        </div>
        <input
          v-bind="$attrs"
          ref="inputRef"
          :type="type"
          :value="modelValue"
          :class="[
            'tune-input',
            { 'tune-error-border': error && showErrorMessage },
            { 'cursor-not-allowed placeholder:!opacity-30': disable },
            { 'w-full': block },
          ]"
          :placeholder="placeholder || definition?.examples?.[0] || ''"
          :readonly="readonly"
          :disabled="disable"
          @blur="error ? (showErrorMessage = true) : null"
          @focus="error ? null : (showErrorMessage = false)"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
        />
        <div
          v-if="loading || (error && showErrorMessage)"
          class="tune-input-loading absolute inset-y-0 right-0 top-[1px] mr-1 flex h-[40px] items-center overflow-hidden pl-2 pr-2"
        >
          <i-hero-exclamation-circle-20-solid
            v-if="error && showErrorMessage"
            class="tune-error-text"
          />
          <TuneLoadingSpinner v-else-if="loading" />
        </div>
        <div
          v-else-if="$slots.after"
          class="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <slot name="after" />
        </div>
      </div>
    </div>
    <div
      :class="[
        'tune-error-text mt-[2px] text-sm',
        !!error && showErrorMessage ? 'block' : 'hidden',
      ]"
    >
      {{ error }}
    </div>
  </div>
</template>
