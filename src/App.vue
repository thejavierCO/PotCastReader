<script setup>
import api from "./js/api";
const Feed = new api('https://anchor.fm/s/484b1994/podcast/rss')
Feed.get().then(e => {
  console.log(e);
});
</script>

<template>
  <div>init</div>
</template>
