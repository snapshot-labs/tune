import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@snapshot-labs/tune/dist/style.css";
import VueTippy from "vue-tippy";

const app = createApp(App);

app.use(VueTippy);
app.mount("#app");
