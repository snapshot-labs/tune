<script setup lang="ts">
import { ref, watch } from 'vue';
import IconItalic from '~icons/tune/italic';
import IconBold from '~icons/tune/bold';
import IconHeading from '~icons/tune/heading';
import IconLink from '~icons/heroicons-outline/link';
import IconPhoto from '~icons/heroicons-outline/photograph';
import TuneLoadingSpinner from './TuneLoadingSpinner.vue';
import { TuneErrorInput } from '..';

defineProps<{
  modelValue: string;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (
    event: 'upload',
    payload: { file: File; addImage: (image: { url: string }, fileName: string) => void }
  ): void;
}>();

type Formatting = {
  prefix: string;
  suffix: string;
};

const shortcuts = {
  b: bold,
  i: italic,
  k: link
};

const editorContainerRef = ref<HTMLDivElement | null>(null);
const editorFileInputRef = ref<HTMLInputElement | null>(null);
const editorRef = ref<HTMLTextAreaElement | null>(null);
const editorInput = ref('');

const hovered = ref(false);
const uploading = ref(false);

watch(editorRef, el => {
  if (!el) return;

  el.addEventListener('keydown', (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && shortcuts[e.key]) {
      e.preventDefault();
      shortcuts[e.key]();
    }
  });
});

watch(editorFileInputRef, el => {
  if (!el) return;

  el.addEventListener('change', () => {
    if (!el.files) return;

    uploadFile(el.files[0]);

    el.value = '';
  });
});

watch(editorContainerRef, el => {
  if (!el) return;

  let counter = 0;

  el.addEventListener('dragenter', () => {
    counter++;
    hovered.value = true;
  });

  el.addEventListener('dragover', e => {
    e.preventDefault();
  });

  el.addEventListener('dragleave', () => {
    counter--;

    if (counter === 0) hovered.value = false;
  });

  el.addEventListener('drop', e => {
    console.log('drop');
    e.preventDefault();
    e.stopPropagation();
    hovered.value = false;

    if (!e.dataTransfer) return;

    const { files } = e.dataTransfer;
    if (!files.length) return;

    uploadFile(files[0]);
  });
});

function scheduleSelection(start: number, end: number) {
  requestAnimationFrame(() => {
    if (editorRef.value) editorRef.value.setSelectionRange(start, end);
  });
}

function getEditorChange(formatting: Formatting) {
  if (!editorRef.value) return;

  const { selectionStart, selectionEnd, value } = editorRef.value;

  const hasNoSelection = selectionStart === selectionEnd;
  const selectionFormattedOutside =
    value.substring(selectionStart - formatting.prefix.length, selectionStart) ===
      formatting.prefix &&
    value.substring(selectionEnd, selectionEnd + formatting.suffix.length) === formatting.suffix;
  const selectionFormattedInside =
    value.substring(selectionStart, selectionStart + formatting.prefix.length) ===
      formatting.prefix &&
    value.substring(selectionEnd - formatting.suffix.length, selectionEnd) === formatting.suffix;

  if (hasNoSelection) {
    const formattedValue =
      value.substring(0, selectionStart) +
      formatting.prefix +
      formatting.suffix +
      value.substring(selectionEnd);

    return {
      value: formattedValue,
      selectionStart: selectionStart + formatting.prefix.length,
      selectionEnd: selectionStart + formatting.prefix.length
    };
  }

  if (selectionFormattedOutside) {
    const formattedValue =
      value.substring(0, selectionStart - formatting.prefix.length) +
      value.substring(selectionStart, selectionEnd) +
      value.substring(selectionEnd + formatting.suffix.length);

    return {
      value: formattedValue,
      selectionStart: selectionStart - formatting.prefix.length,
      selectionEnd: selectionEnd - formatting.prefix.length
    };
  }

  if (selectionFormattedInside) {
    const formattedValue =
      value.substring(0, selectionStart) +
      value.substring(
        selectionStart + formatting.prefix.length,
        selectionEnd - formatting.suffix.length
      ) +
      value.substring(selectionEnd);

    return {
      value: formattedValue,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd - formatting.prefix.length - formatting.suffix.length
    };
  }

  const formattedValue =
    value.substring(0, selectionStart) +
    formatting.prefix +
    value.substring(selectionStart, selectionEnd) +
    formatting.suffix +
    value.substring(selectionEnd);

  return {
    value: formattedValue,
    selectionStart: selectionStart + formatting.prefix.length,
    selectionEnd: selectionEnd + formatting.prefix.length
  };
}

function insertFormatting(formatting: Formatting) {
  if (!editorRef.value) return;

  const change = getEditorChange(formatting);
  if (!change) return;

  const { value, selectionStart, selectionEnd } = change;

  editorInput.value = value;
  scheduleSelection(selectionStart, selectionEnd);

  editorRef.value.focus();
}

async function uploadFile(file: File) {
  if (!file.type.startsWith('image/')) return;

  uploading.value = true;

  try {
    emit('upload', { file: file, addImage: addImage });
  } catch (e) {
    console.error('Failed to upload image', e);
  } finally {
    uploading.value = false;
  }
}

function addImage(image: { url: string }, fileName: string) {
  if (!image) throw new Error('No image found');

  insertFormatting({
    prefix: `![${fileName}](${image.url})`,
    suffix: ''
  });

  editorRef.value?.focus();
}

function heading() {
  insertFormatting({ prefix: '# ', suffix: '' });
}

function bold() {
  insertFormatting({ prefix: '**', suffix: '**' });
}

function italic() {
  insertFormatting({ prefix: '*', suffix: '*' });
}

function link() {
  insertFormatting({ prefix: '[', suffix: '](url)' });
}

const composerButtons = [
  {
    title: 'Add heading text',
    icon: 'H',
    action: heading
  },
  {
    title: 'Add bold text',
    icon: 'B',
    action: bold
  },
  {
    title: 'Add italic text',
    icon: 'I',
    action: italic
  },
  {
    title: 'Add a link',
    icon: 'link',
    action: link
  },
  {
    title: 'Add an image',
    icon: 'photo',
    action: () => {
      if (editorFileInputRef.value) editorFileInputRef.value?.click();
    }
  }
];

const showErrorMessage = ref(false);

function forceShowError() {
  showErrorMessage.value = true;
}

defineExpose({
  forceShowError
});
</script>

<template>
  <div>
    <div class="tune-textarea-composer-heading" :class="{ disabled: disabled }">
      <button
        v-for="(button, i) in composerButtons"
        :key="i"
        @click="disabled ? null : button.action"
      >
        <span
          :class="[
            'text-[20px] text-gray-900 ',
            {
              'font-bold': button.icon === 'B',
              italic: button.icon === 'I'
            },
            { 'cursor-not-allowed opacity-40': disabled }
          ]"
        >
          <IconItalic v-if="button.icon === 'I'" />
          <IconBold v-else-if="button.icon === 'B'" />
          <IconHeading v-else-if="button.icon === 'H'" />
          <IconLink v-else-if="button.icon === 'link'" class="text-sm" />
          <span v-if="button.icon === 'photo'">
            <TuneLoadingSpinner v-if="uploading" class="h-[20px] w-[20px]" />
            <IconPhoto v-else class="text-[18px]" />
          </span>
        </span>
      </button>
      <input
        ref="editorFileInputRef"
        type="file"
        accept="image/*"
        class="hidden"
        :disabled="uploading || disabled"
      />
    </div>
    <div
      ref="editorContainerRef"
      class="tune-input-wrapper !rounded-t-none !border-t-0"
      :class="[{ disabled: disabled }]"
    >
      <textarea
        ref="editorRef"
        v-model="editorInput"
        :placeholder="placeholder"
        :maxlength="maxLength"
        class="tune-textarea !min-h-[171px] w-full"
        :class="[{ disabled: disabled }]"
        :disabled="disabled"
        @blur="error ? (showErrorMessage = true) : null"
      />
    </div>
    <TuneErrorInput v-if="error && showErrorMessage" :error="error" />
  </div>
</template>
