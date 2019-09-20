<template>
  <div id="memolist-table">
    <br />
    <br />
    <br />
    <h3>{{$store.getters['store/selectNotebook']}}</h3>
    <br />
    <div>
      <p id="memo-textarea">
        <MemoTextarea v-model="inputText" @input="update" placeholder="add Memo" name="MemoTextarea" type="text" />
      </p>
      <p>
        <AddMemoButton @add-memo-click="addMemo"/>
      </p>
    </div>
    <br />
    <MemoList :items="items" @delete-memo-click="deleteMemo"/>
  </div>
</template>

<script>
import MemoList from "@/atomic/Molecules/List/MemoList";
import MemoTextarea from "@/atomic/Atoms/Textarea/MemoTextarea";
import AddMemoButton from "@/atomic/Atoms/Button/AddMemoButton";

import firebase from "firebase";
import firestore from "firebase";

export default {
  name: "MemoListTable",
  components: {
    MemoList,
    MemoTextarea,
    AddMemoButton
  },
  props:{
    docId: { type:String, default:'No ID'}
  },
  data() {
    return {
      inputText: "",
      items: [],
      docData: {},
      db: {}
    };
  },
  created() {
    const self = this;
    this.db = firebase.firestore();
    // docIdからデータを取得する。
    let docRef = this.db.collection("user").doc(this.docId);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            self.$store.commit('store/setSelectNotebook', doc.data().notebookTitle);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    const self_ = this;
    firebase.auth().onAuthStateChanged(user => {
      // Initialize Cloud Firestore through Firebase
      const childAdded = this.childAdded;
      this.db.collection("user").onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
            if(change.doc.data().notebookTitle === self_.$store.getters['store/selectNotebook']){
              childAdded(change.doc);
            }
          }
        });
      });
    });
  },
  methods: {
    // データベースに新しい要素が追加されると随時呼び出される
    childAdded(doc) {
      this.items = doc.data().memo;
      this.$store.commit('store/setSelectMemoList', doc.data().memo);
    },
    update: function(e){
        this.inputText = e;
    },
    addMemo: function() {
      let items = this.$store.getters['store/selectMemoList'];
      if(items===undefined){
        items = [];
      }
      let date = new Date();
      const id = date.getMonth()+':'+date.getDate()+':'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
      items.push({
        id: id,
        text: this.inputText
      });

      this.$store.commit('store/setSelectMemoList', items);

      const self = this;
      this.db
        .collection("user")
        .doc(this.docId)
        .set({
          notebookId: this.docId,
          notebookTitle: this.$store.getters['store/selectNotebook'],
          memo: items
        })
        .then(function(docRef) {
          self.inputText = "";
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    deleteMemo: function(listItem){
      let items = this.$store.getters['store/selectMemoList'];
      let deleteIndex = 0;
      items.forEach((item, i) => {
        if(item.id === listItem.id){
          deleteIndex = i;
        }
      });
      items.splice(deleteIndex, 1);
      
      this.$store.commit('store/setSelectMemoList', items);

      const self = this;
      this.db
        .collection("user")
        .doc(this.docId)
        .set({
          notebookId: this.docId,
          notebookTitle: this.$store.getters['store/selectNotebook'],
          memo: items
        })
        .then(function(docRef) {
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>

<style>
/* .memo-textarea {
  padding-left: 30px;
} */
#memo-textarea {
  padding-right: 200px;
}
</style>