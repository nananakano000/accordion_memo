<template>
  <div class="page">
    <NormalLogo/>
    <NotebookListTable/>

    <!-- <p>ここはtoppageです。</p>
    <ul>
      <li :key="noteBook" v-for="noteBook in noteBooks" class="notebook">
        <router-link to="/">{{noteBook.name}}</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import NormalLogo from "@/atomic/Atoms/Logo/NormalLogo";
import NotebookListTable from "@/atomic/Organisms/Table/NotebookListTable";

export default {
  name: "TopPage",
  components: {
    NormalLogo,
    NotebookListTable
  },
  data() {
    return {
      // noteBooks: [
      //   {
      //     name: "todo20197020",
      //     noteBookId: 0,
      //     editDate: "2019-07-20"
      //   },
      //   {
      //     name: "todo20197019",
      //     noteBookId: 1,
      //     editDate: "2019-07-19"
      //   }
      // ]
    }
  },
  methods: {
    // addClick: function() {
    //   this.$emit("add-event", "MemoListItem");
    // }
  }
};
</script>

<style>
ul {
  list-style: none;
}
.page{
  margin-left: 20px;
}
</style>