<template>
  <div class="add-notebook-button">
    <b-button @click="clickHandler" variant="outline-primary" class="delete-memo-btn"> 削除 </b-button>
  </div>
</template>

<script>
export default {
  name: "DeleteMemoButton",
  methods: {
    /**
     * 親にクリックイベントを渡す
     * @param e {Object} event object
     */
    clickHandler: function(e) {
      this.$emit("delete-memo-click", e);
    }
  }
};
</script>

<style>
.delete-memo-btn{
    font-size: 10px;
}
</style>