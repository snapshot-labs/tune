<script setup lang="ts">
import TuneModal from './TuneModal.vue';
</script>

<template>
  <Story>
    <Variant title="default">
      <TuneModal :open="true" title="Modal title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo expedita libero,
        eaque iste aliquam praesentium.
      </TuneModal>
    </Variant>
    <Variant title="confirm">
      <TuneModal :open="true" title="Modal title" footer-buttons="confirm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo expedita libero,
        eaque iste aliquam praesentium.
      </TuneModal>
    </Variant>
    <Variant title="confirmAndCancel">
      <TuneModal :open="true" title="Modal title" footer-buttons="confirmAndCancel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo expedita libero,
        eaque iste aliquam praesentium.
      </TuneModal>
    </Variant>
  </Story>
</template>

<docs lang="md">
# TuneModal

The TuneModal component provides a modal dialog box that appears on top of the current page, dimming the background content and prompting the user for an action. This component uses the @headlessui/vue package for creating accessible dialogs and transitions.

### Props

- **open**: a boolean value that determines whether the modal should be shown or hidden. When true, the modal is displayed; otherwise, it is hidden. This property is required.
- **title**: a string value that specifies the title of the modal dialog box.

### Slots

The TuneModal component provides two slots for inserting content:

- **Default slot**: Use this slot to add the main content of the modal dialog box. You can include any valid HTML markup, such as text, images, forms, or other components.

- **Footer slot**: Use this slot to add any additional buttons, links, or other UI elements to the bottom of the modal dialog box.

### Emits

- **close**: an event emitted when the user closes the modal dialog box. This event does not contain any data.
</docs>
