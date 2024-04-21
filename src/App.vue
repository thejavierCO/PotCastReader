<template>
  <van-nav-bar title="Title" />
</template>

<script>
import PotCast from "./js/api";
export default {
  data() {
    return {}
  },
  created() {
    let test = new PotCast()
    test.get("https://anchor.fm/s/484b1994/podcast/rss").then(e=>console.log(e))
  }
};
</script>

