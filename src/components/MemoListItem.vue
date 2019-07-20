<template>
  <div class="memolistitem">
    <a href="#" @click="dropdownList">
      {{list}}
      <br />
      <textarea name id cols="50" rows="2">TODO</textarea>
      <br />
      <button @click.stop="addClick">add</button>
      <button @click.stop="deleteClick">delete</button>
    </a>
  </div>
</template>

<script>
export default {
  name: "MemoListItem",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    addClick: function(){
      this.$emit('add-event', 'MemoListItem');
    },
    deleteClick: function(){
      this.$emit('delete-event', 'MemoListItem');
    },
    dropdownList: function(){
      this.$emit('dropdown-event', 'MemoListItem');
    }
  }
};
</script>