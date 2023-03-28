<script setup lang="ts">
import { ref, computed } from "vue";
import jsonSchema from "../helpers/schemas/sx-profile.json";
import uiSchema from "../helpers/schemas/sx-profile.ui.json";
import { validateForm } from "../helpers/validation";
import { TuneForm, TuneButton } from "tune";

const jsonSchemaRef = ref(JSON.stringify(jsonSchema, null, 2));
const uiSchemaRef = ref(JSON.stringify(uiSchema, null, 2));

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

const formErrors = computed(() => {
  return validateForm(jsonSchema, input.value);
});

function forceShowError() {
  formRef?.value?.forceShowError();
}
</script>

<template>
  <div class="px-6 py-4">
    <div class="mb-5 flex gap-5">
      <div class="w-full">
        <span class="text-lg"> jsonSchema: </span>
        <textarea
          v-model="jsonSchemaRef"
          class="tune-input min-h-[400px] w-full !rounded-md font-mono"
        />
      </div>
      <div class="w-full">
        <span class="text-lg"> uiSchema: </span>
        <textarea
          v-model="uiSchemaRef"
          class="tune-input min-h-[400px] w-full !rounded-md font-mono"
        />
      </div>
    </div>
    <div class="flex gap-5">
      <div>
        <div class="text-lg">Form:</div>

        <TuneForm
          ref="formRef"
          v-model="input"
          :json-schema="jsonSchema"
          :ui-schema="uiSchema"
          :errors="formErrors"
        />
        <TuneButton class="mt-3" primary @click="forceShowError">
          Save
        </TuneButton>
      </div>
      <div>
        <div class="text-lg">Form errors:</div>
        <span class="font-mono">
          {{ formErrors }}
        </span>
      </div>
    </div>
  </div>
</template>
