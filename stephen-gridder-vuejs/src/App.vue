<template>
  <div id="app">
    <SearchBar @termChange="onTermChange" />
    <VideoDetail :video="videoDetails" />
    <VideoList :items="items" @videoSelected="onVideoSelect" />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyDiagKKikOXrS-dPAwMWPYOU6RUyhV6DHo";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name: "app",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      items: [],
      videoDetails: {}
    };
  },
  methods: {
    onVideoSelect(video) {
      this.videoDetails = video;
    },
    onTermChange(searchTerm) {
      axios
        .get(BASE_URL, {
          params: {
            key: YOUTUBE_API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(res => {
          this.items = res.data.items;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
