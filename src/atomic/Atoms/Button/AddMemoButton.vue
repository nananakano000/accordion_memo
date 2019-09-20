<template>
  <div class="add-notebook-button">
    <b-button @click="clickHandler" variant="outline-primary" class="add-memo-btn">追加</b-button>
  </div>
</template>

<script>
export default {
  name: "AddMemoButton",
  methods: {
    /**
     * 親にクリックイベントを渡す
     * @param e {Object} event object
     */
    clickHandler: function(e) {
      this.$emit("add-memo-click", e);
    }
  }
};
</script>

<style>
.add-memo-btn {
  font-size: 10px;
}
</style>