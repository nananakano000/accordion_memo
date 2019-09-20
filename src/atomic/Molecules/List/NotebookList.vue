<template>
  <div>
    <div class="list-title">
      Noteリスト
    </div>
    <ul>
        <li class="nb-list" :key="item.notebookId" v-for="item in items">
          <NotebookListRow @delete-memo-click="clickHandler" :titleText="item.notebookTitle" :docId="item.notebookId"/>
        </li>
    </ul>
    <div class="list-title" v-if="!items.length">
      ※ノートがありません。
    </div>
  </div>
</template>

<script>
import NotebookListRow from "@/atomic/Molecules/ListRow/NotebookListRow";

export default {
  name: "NotebookList",
  components: {
    NotebookListRow
  },
  props:{
    items: Array
  },
  created(){
    console.log(this.items)
  },
  methods:{
    clickHandler: function(docId) {
      this.$emit("delete-memo-click", docId);
    } 
  }
}
</script>

<style>
.nb-list{
  border: 1px solid lightgray;
  padding: 15px;
  margin: 10px 50px 0px 0px;
  height: 70px;
}
.list-title{
  margin: 20px 0px 0px 40px;
  height: 40px;
}
</style>