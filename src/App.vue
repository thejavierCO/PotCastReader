<template>
  <div v-if="!loadingURl">
    <label for="inputData">Insert URL: <Input id="inputData" @submit="data"></Input></label>
  </div>
  <div v-if="loadingURl">Data potcasts</div>
  <div v-if="loadingURl">Data episodes</div>
</template>

<script>
import Input from "./components/inputUrl.vue"

export default {
  components: {
    Input
  },
  data() {
    return {
      loadingURl: false,
      url: ""
    }
  },
  methods: {
    data({ target }) {
      this.url = target.value;
      this.loadingURl = true;
    }
  },
  created() {
    console.warn("load");
  },
  mounted() {
    console.warn("mounted");
  }
};
</script>

