<template>
  <div class="notebook-title">
    <a href="#">
        <router-link @click.native="set" v-bind:to="{ name : 'SelectNotePage', params : { docId: docId }}">{{titleText}}</router-link>
    </a>
  </div>
</template>

<script>
// import store from '@/store'
// import Vuex from 'vuex'

export default {
  name: "DeleteMemoButton",
  props: {
    titleText: { type: String, default: "def" },
    docId: { type: String, default: "No ID" }
  },
  // created(){
  //   console.log(this.docId)
  // },
  methods:{
    set(){
      this.$store.commit('store/setSelectNotebook', this.titleText, {root: true});
      // this.$store.commit('setSelectNotebook', this.titleText);
      // console.log(this.titleText);
      // console.log(this.$store.getters['store/selectNotebook']);
      // console.log(this.$store.getters.selectNotebook);
    }
  }
};
</script>

<style>
a{
    text-decoration: none;
    display: block;
}
</style>