<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtube from "./apis/youtube";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      const response = await youtube.get("/search", {
        params: {
          q: searchTerm,
        },
      });
      this.videos = response.data.items;
    },

    onVideoSelect(video) {
      this.selectedVideo = video;
    },
  },
};
</script>
