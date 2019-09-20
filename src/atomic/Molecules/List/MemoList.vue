<template>
  <div>
    <p class="memo-list">Memoリスト</p>
    <p class="memo-list" v-if="this.$store.getters['store/selectMemoList']===undefined">※メモが登録されていません。</p>
    <ul>
      <li :key="listItem.id" v-for="listItem in $store.getters['store/selectMemoList']">
        ○ {{listItem.text}}
        <p id="delete-memo-btn"><DeleteMemoButton @delete-memo-click="clickHandler(listItem)"/></p>
        <br /><br />
      </li>
    </ul>
  </div>
</template>

<script>
import AddMemoButton from "@/atomic/Atoms/Button/AddMemoButton";
import DeleteMemoButton from "@/atomic/Atoms/Button/DeleteMemoButton";
import firebase from 'firebase'

export default {
  name: "MemoList",
  components: {
    AddMemoButton,
    DeleteMemoButton
  },
  props:{
    items: Array
  },
  data(){
    return {
      nbMemoRef: null
    }
  },
  methods: {
    deleteMemo: function(item){
      const itemIdx = this.items.indexOf(item);
      this.items.splice(itemIdx, 1);
    },
    clickHandler: function(listItem) {
      this.$emit("delete-memo-click", listItem);
    }
  }
};
</script>

<style>
.memo-list {
  padding-left: 30px;
}
#delete-memo-btn{
    float: right;
    padding-right: 200px;
}
</style>