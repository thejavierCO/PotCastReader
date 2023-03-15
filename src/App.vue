<template>
  <div>Insert URL</div>
  <Input @change="data"></Input>
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
      loadingURl: false
    }
  },
  methods: {
    data: (a) => {
      console.log(a);
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

