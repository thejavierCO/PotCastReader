<template>
  <div>Insert URL</div>
  <Input @change="data"></Input>
  <div>Data potcasts</div>
  <div>Data episodes</div>
</template>

<script>
import Input from "./components/inputUrl.vue"

export default {
  components: {
    Input
  },
  data() {
    return {}
  },
  methods: {
    data: (a) => {
      console.log(a);
    }
  },
  created() {
    console.warn("load");
  },
  mounted(a) {
    console.log(a, this);
  }
};
</script>

