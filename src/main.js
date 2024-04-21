import { createApp } from 'vue'
import { NavBar } from 'vant';
import App from './App.vue';
// import { api } from "./js/api"

const app = createApp(App)

app.use(NavBar)

app
  // .use(api, {
  //   url: "https://anchor.fm/s/484b1994/podcast/rss"
  // })
  .mount("#app")