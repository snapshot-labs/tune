<script setup lang="ts">
import { ref, computed } from "vue";
import jsonSchema from "../helpers/schemas/sx-profile.json";
import uiSchema from "../helpers/schemas/sx-profile.ui.json";
import { validateForm } from "../helpers/validation";
import { TuneForm, TuneButton } from "tune";

const jsonSchemaRef = ref(JSON.stringify(jsonSchema));
const uiSchemaRef = ref(JSON.stringify(uiSchema));

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
  <div>
    <div class="flex gap-5 font-mono">
      <div class="w-full">
        jsonSchema
        <textarea
          v-model="jsonSchemaRef"
          class="tune-input min-h-[400px] w-full !rounded-md"
        />
      </div>
      <div class="w-full">
        uiSchema
        <textarea
          v-model="uiSchemaRef"
          class="tune-input min-h-[400px] w-full !rounded-md"
        />
      </div>
    </div>
    {{ formErrors }}
    <TuneForm
      ref="formRef"
      v-model="input"
      :json-schema="jsonSchema"
      :ui-schema="uiSchema"
      :errors="formErrors"
    />
    <TuneButton class="mt-3" primary @click="forceShowError">
      Continue
    </TuneButton>
  </div>
</template>
