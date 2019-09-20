<template>
  <div>
    <table class="nbl-table" border="0" width="90%" height="1000">
        <br>
        <br>
        <p id="notebook-textarea">
          <NotebookTextarea v-model="inputText" @input="update" placeholder="add Notebook Title" name="NotebookTextarea" type="text" />
        </p>
        <AddNotebookButton @add-notebook-click="addNotebook"/>
        <br>
        <NotebookList :items="listItems" @delete-memo-click="deleteNotebook"/>
    </table>
  </div>
</template>

<script>
import AddNotebookButton from "@/atomic/Atoms/Button/AddNotebookButton";
import NotebookList from "@/atomic/Molecules/List/NotebookList";
import NotebookTextarea from "@/atomic/Atoms/Textarea/NotebookTextarea";
// firebase モジュール
import firebase from "firebase";
import firestore from "firebase";

export default {
  name: "NotebookListTable",
  components: {
    AddNotebookButton,
    NotebookList,
    NotebookTextarea
  },
  data() {
    return {
      inputText: "", // テキストエリアに入力された文字列
      listItems: [], // notebookタイトルの配列
      notebookId: "" // notebookのID
    };
  },
  created() {
    this.$store.commit('store/setSelectMemoList', []);

    firebase.auth().onAuthStateChanged(user => {
      // Initialize Cloud Firestore through Firebase
      this.db = firebase.firestore();
        const childAdded = this.childAdded;
        const childRemoved = this.childRemoved;
        this.db.collection("user").onSnapshot(function(snapshot) {
          snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
              childAdded(change.doc);
            }
            if (change.type === "removed") {
              childRemoved(change.doc);
            }
          });
        });
    });
  },
  methods: {
    // データベースに新しい要素が追加されると随時呼び出される
    childAdded(doc) {
      const notebook = doc.data();
      this.listItems.push({
        notebookId: doc.id,
        notebookTitle: notebook.notebookTitle,
        memo: []
      });
    },
    childRemoved(doc) {
      const notebook = doc.data();
      let removeIndex = 0;
      this.listItems.forEach((item, i) => {
        if(item.notebookTitle === notebook.notebookTitle){
          removeIndex = i;
          return;
        }
      });
      this.listItems.splice(removeIndex, 1);
    },
    addNotebook: function(){
      let date = new Date();
      const id = date.getMonth()+':'+date.getDate()+':'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

      const self = this;
      this.db
        .collection("user")
        .add({
          notebookTitle: this.inputText,
          notebookId: id
        })
        .then(function(docRef) {
          self.inputText = "";
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    deleteNotebook: function(docId){
      this.db.collection("user").doc(docId).delete().then(function() {
          // console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    },
    update: function(e){
        this.inputText = e;
    }
  }
}
</script>

<style>
.nbl-table{
    /* padding: 10px; */
    margin: 0px;
}
</style>