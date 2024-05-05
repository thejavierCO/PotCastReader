import { createApp } from 'vue'
import { NavBar } from 'vant';
import App from './App.vue';
import { Grid, GridItem, ConfigProvider } from 'vant';
import 'vant/lib/index.css';
import './style.css';

const app = createApp(App, { Title: "personal app" })

app.use(NavBar).use(Grid).use(GridItem).use(ConfigProvider)

app.mount("#app")