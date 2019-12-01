<template>
  <ul class="list">
    <ViewListItem
      :item="item"
      v-for="item in items"
      :key="item.etag"
      class="list__item"
      @videoSelected="onVideoSelect"
    />
  </ul>
</template>

<script>
import ViewListItem from "./VideoListItem";

export default {
  components: {
    ViewListItem
  },
  name: "VideoList",
  props: {
    items: Array
  },
  methods: {
    onVideoSelect(item) {
      this.$emit("videoSelected", item);
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
</style>
