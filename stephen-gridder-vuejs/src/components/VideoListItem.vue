<template>
  <li class="list__item" @click="onVideoSelect">
    <img :src="thumbMidd" />
    {{ item.snippet.title }}
  </li>
</template>

<script>
export default {
  name: "ViewListItem",
  props: {
    item: Object
  },
  computed: {
    thumbMidd() {
      return this.item.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelected", this.item);
    }
  }
};
</script>

<style scoped>
.list__item {
  list-style: none;
  text-align: left;
  margin-top: 1rem;
  display: flex;
}
</style>
