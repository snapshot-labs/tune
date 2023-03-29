<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import jsonSchema from "../helpers/schemas/sx-profile.json";
import { validateForm } from "../helpers/validation";
import { TuneForm, TuneButton } from "@snapshot-labs/tune";

const jsonSchemaRef = ref(jsonSchema);
const jsonSchemaInput = ref(JSON.stringify(jsonSchema, null, 2));
const input = ref<Record<string, any>>({});
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
  jsonError.value = "";
  try {
    jsonSchemaRef.value = JSON.parse(jsonSchemaInput.value);
    // generate input from schema
    input.value = {};
    Object.entries(jsonSchemaRef.value.properties).forEach((prop1) => {
      if (prop1[1].type === "object") {
        input.value[prop1[0]] = {};
        Object.entries(prop1[1].properties).forEach((prop2: any) => {
          input.value[prop1[0]][prop2[0]] = "";
        });
      }
      if (prop1[1].type === "array") {
        input.value[prop1[0]] = [];
      }
      if (prop1[1].type === "string") {
        input.value[prop1[0]] = "";
      }
      if (prop1[1].type === "number") {
        input.value[prop1[0]] = undefined;
      }
    });
  } catch (e: any) {
    jsonError.value = e;
    console.log(e);
  }
}

onMounted(() => {
  updateForm();
});
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
        {{ input }}
        <TuneForm
          ref="formRef"
          v-model="input"
          :definition="jsonSchemaRef"
          :error="formErrors"
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
