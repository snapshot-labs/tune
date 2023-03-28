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
    element?: any;
  }>(),
  {
    label: "",
    hint: "",
    loading: false,
    error: "",
    block: false,
    type: "text",
    modelValue: "",
    autofocus: false,
    placeholder: "",
    maxLength: undefined,
    readonly: false,
    disable: false,
    element: {},
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
      v-if="label || element?.label"
      :hint="hint || element?.description"
    >
      {{ label || element.label }}
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
            { '!border-red': error && showErrorMessage },
            { 'cursor-not-allowed placeholder:!opacity-30': disable },
            { 'w-full': block },
          ]"
          :placeholder="placeholder || element?.placeholder || ''"
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
          class="absolute inset-y-0 right-0 top-[1px] mr-1 flex h-[40px] items-center overflow-hidden rounded-r-full bg-skin-bg pr-2 pl-2"
        >
          <i-hero-exclamation-circle-20-solid
            v-if="error && showErrorMessage"
            class="text-red"
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
        'mx-3 flex items-center rounded-b-3xl  pt-4 text-xs text-red',
        !!error && showErrorMessage
          ? '-mt-[23px] opacity-100'
          : '-mt-[40px] h-6 opacity-0',
      ]"
    >
      {{ error }}
    </div>
  </div>
</template>
