<script setup lang="ts">
import { ref, computed, watch } from "vue";
import jsonSchema from "../helpers/schemas/sx-profile.json";
import uiSchema from "../helpers/schemas/sx-profile.ui.json";
import { validateForm } from "../helpers/validation";
import { TuneForm, TuneButton } from "@snapshot-labs/tune";

const jsonSchemaRef = ref(jsonSchema);
const uiSchemaRef = ref(uiSchema);

const jsonSchemaInput = ref(JSON.stringify(jsonSchema, null, 2));
const uiSchemaInput = ref(JSON.stringify(uiSchema, null, 2));

const input = ref({
  name: "",
  description: "",
  externalUrl: "",
  github: "",
  twitter: "",
  discord: "",
  walletAddress: "",
});

const formRef = ref();

const jsonError = ref("");

const formErrors = ref({});

watch(
  [input, jsonSchemaRef],
  () => {
    formErrors.value = validateForm(jsonSchemaRef.value, input.value);
  },
  { deep: true, immediate: true }
);

function forceShowError() {
  formRef?.value?.forceShowError();
}

function updateForm() {
  try {
    jsonSchemaRef.value = JSON.parse(jsonSchemaInput.value);
    uiSchemaRef.value = JSON.parse(uiSchemaInput.value);
  } catch (e: any) {
    jsonError.value = e;
    console.log(e);
  }
}
</script>

<template>
  <div class="px-6 py-3">
    <div class="flex gap-5">
      <div class="w-full">
        <span class="text-lg"> jsonSchema: </span>
        <textarea
          v-model="jsonSchemaInput"
          class="tune-input min-h-[300px] w-full !rounded-md font-mono"
        />
      </div>
      <div class="w-full">
        <span class="text-lg"> uiSchema: </span>
        <textarea
          v-model="uiSchemaInput"
          class="tune-input min-h-[300px] w-full !rounded-md font-mono"
        />
      </div>
    </div>
    <div
      v-if="jsonError"
      class="text-red-500 p-3 border border-red-500 rounded-md mt-3"
    >
      {{ jsonError }}
    </div>
    <TuneButton class="mb-5 mt-3 w-full" primary @click="updateForm">
      Update form
    </TuneButton>
    <div class="flex gap-5">
      <div class="w-full">
        <div class="text-lg">Form:</div>
        <TuneForm
          ref="formRef"
          v-model="input"
          :json-schema="jsonSchemaRef"
          :ui-schema="uiSchemaRef"
          :errors="formErrors"
        />
        <TuneButton class="mt-3" primary @click="forceShowError">
          Show errors
        </TuneButton>
      </div>
      <div class="w-full">
        <div class="text-lg">Form errors:</div>
        <span class="font-mono">
          {{ formErrors }}
        </span>
      </div>
    </div>
  </div>
</template>
