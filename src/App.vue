<template>
  <div>{{ url }}</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import api from "./js/api";
export default {
  props: ['url'],
  created() {
    if (!this.url) this.url = 'https://www.spreaker.com/show/5166877/episodes/feed'
    console.log(this.url);
  }
};
</script>

