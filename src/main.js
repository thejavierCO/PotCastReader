import { createApp } from 'vue'
import { NavBar } from 'vant';
import App from './App.vue';
import { Grid, GridItem } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App,{Title:"personal app"})

app.use(NavBar).use(Grid).use(GridItem)

app.mount("#app")