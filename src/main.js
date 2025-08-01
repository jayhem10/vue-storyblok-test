import { createApp } from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";
import "./style.css";
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
import Test from "./components/Test.vue";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "",
  },
});
console.log(import.meta.env.VITE_STORYBLOK_TOKEN);

app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Grid", Grid);
app.component("Test", Test);

app.mount("#app");
