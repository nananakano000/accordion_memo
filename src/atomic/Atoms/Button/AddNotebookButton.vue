<template>
  <div class="add-notebook-button">
    <b-button @click="clickHandler" variant="outline-primary"> ＋ 新しいノートを追加する </b-button>
  </div>
</template>

<script>
export default {
  name: "AddNotebookButton",
  methods: {
    /**
     * 親にクリックイベントを渡す
     * @param e {Object} event object
     */
    clickHandler: function(e) {
      this.$emit("add-notebook-click", e);
    }
  }
};
</script>

<style>
</style>