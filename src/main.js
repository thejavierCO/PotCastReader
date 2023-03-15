import { createApp } from 'vue'
import App from './App.vue';
// import { api } from "./js/api"

const app = createApp(App)

app
// .use(api, {
//   url: "https://anchor.fm/s/484b1994/podcast/rss"
// })
.mount("#app")