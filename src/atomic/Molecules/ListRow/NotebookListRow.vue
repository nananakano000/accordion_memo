<template>
  <div class="text-monospace">
    <p id="nb-title"><NotebookTitle :titleText="titleText" :docId="docId"/></p>
    <p id="delete-btn"><DeleteMemoButton @delete-memo-click="clickHandler"/></p>
  </div>
</template>

<script>
import NotebookTitle from "@/atomic/Atoms/ListRowItem/NotebookTitle";
import DeleteMemoButton from "@/atomic/Atoms/Button/DeleteMemoButton";

export default {
  name: "NotebookListRow",
  components: {
    NotebookTitle,
    DeleteMemoButton
  },
  props: {
    titleText: String,
    docId: String
  },
  methods: {
    clickHandler: function(e) {
      this.$emit("delete-memo-click", this.docId);
    }
  }
}
</script>

<style>
#nb-title{
    float: left;
    padding-right: 100px;
}
#delete-btn{
    float: right;
    padding-right: 50px;
}
</style>