<template>
  <van-nav-bar :title="Title" />
  <van-grid :column-num="1" :gutter="10">
    <van-grid-item>
      <h3>{{ potCast.title }}</h3>
      <img :src="potCast.image" width="300px"/>
    </van-grid-item>
  </van-grid>
  <van-grid :column-num="4" :gutter="10">
    <van-grid-item v-for="item in potCast.items" :key="item">
      <h4>{{ item.title }} - {{ item.author }}</h4>
      <h5>{{ item.description }}</h5>
      <div v-if="item.enclosures[0].url">
        <audio :src="item.enclosures[0].url" controls></audio>
      </div>
      <div v-else>
        not audio
      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import PotCast from "./js/api";
export default {
  props:{
    Title:String
  },
  data(){
    return ({
      potCast:{}
    })
  },
  mounted() {
    let test = new PotCast()
    test.get("https://anchor.fm/s/484b1994/podcast/rss").then(e=>{
      this.potCast = e
      console.log(this.potCast.items)
    })
  }
};
</script>

