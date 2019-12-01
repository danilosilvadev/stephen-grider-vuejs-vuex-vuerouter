<template>
  <div v-if="video.snippet">
    <h4>
      {{ video.snippet.title }}
    </h4>
    <h5>
      {{ video.snippet.description }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object
  }
};
</script>
