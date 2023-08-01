import './style.scss';

import { defineSetupVue3 } from '@histoire/plugin-vue';
import VueTippy from 'vue-tippy';
import { roundArrow } from 'vue-tippy';

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.use(VueTippy, {
    defaultProps: {
      theme: 'tune',
      arrow: roundArrow + roundArrow
    }
  });
});
