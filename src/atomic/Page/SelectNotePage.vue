<template>
  <div class="page" id="selectNotePage">
    <NormalLogo />
    <MemoListTable :docId="docId"/>

    <!-- <NormalLogo/> -->
    <!-- <router-link to="/TopPage">Go to TopPage</router-link> -->

    <!-- <ul class="memoList">
      <li :key="firstMemoList" v-for="firstMemoList in firstMemoLists" class="first-memo-list">
        <router-view @add-event="add_second_memo_list" @dropdown-event="dropdown_first_list(firstMemoList.active)" />
        <ul>
          <li
            :key="secondMemoList"
            v-for="secondMemoList in secondMemoLists"
            v-if="firstMemoList.active"
            class="second-memo-list"
          >
            <router-view
              @add-event="add_third_memo_list(secondMemoList.id)"
              @delete-event="delete_second_memo_list(secondMemoList)"
            />
            <ul>
              <li
                :key="thirdMemoList"
                v-for="thirdMemoList in thirdMemoLists"
                class="third-memo-list"
                v-if="(secondMemoList.id === thirdMemoList.parentId) && secondMemoList.active"
              >
                <router-view
                  @add-event="add_fourth_memo_list(thirdMemoList.id)"
                  @delete-event="delete_third_memo_list(thirdMemoList)"
                />
                <ul>
                  <li
                    :key="fourthMemoList"
                    v-for="fourthMemoList in fourthMemoLists"
                    class="fourth-memo-list"
                    v-if="(thirdMemoList.id === fourthMemoList.parentId) && thirdMemoList.active"
                  >
                    <router-view @delete-event="delete_fourth_memo_list(fourthMemoList)" />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>-->
  </div>
</template>

<script>
import NormalLogo from "@/atomic/Atoms/Logo/NormalLogo";
import MemoListTable from "@/atomic/Organisms/Table/MemoListTable";

export default {
  name: "SelectNotePage",
  components: {
    NormalLogo,
    MemoListTable
  },
  props:{
    docId: {type: String, default: 'No ID'}
  },
  data() {
    return {
      // firstMemoLists: [{ text: "今日やること", active: true }],
      //{id: number, text: string, active: boolean}
      // secondMemoLists: [],
      //{id: number, parentId: number, text: string, active: true}
      // thirdMemoLists: [],
      //{id: number, parentId: number, text: string, active: true}
      // fourthMemoLists: [],
      latestMemoListId: 0
    };
  },
  created(){
    // console.log(this.selectNotebook);
  },
  methods: {
    // dropdown_first_list(activeState) {
    //   // console.log(active);
    //   this.firstMemoLists[0].active = activeState === true ? false : true;
    //   // alert("dropdown!");
    // },
    // add_second_memo_list() {
    //   this.latestMemoListId++;
    //   this.secondMemoLists.push({
    //     id: this.latestMemoListId,
    //     text: "入力して下さい。",
    //     active: true
    //   });
    //   //親リストが非アクティブの時、アクティブにする
    //   if (!this.firstMemoLists[0].active) {
    //     this.firstMemoLists[0].active = true;
    //   }
    //   // alert("message!");
    // },
    // add_third_memo_list(parentId) {
    //   this.latestMemoListId++;
    //   this.thirdMemoLists.push({
    //     id: this.latestMemoListId,
    //     parentId: parentId,
    //     text: "入力して下さい。",
    //     active: true
    //   });

    //   //親リストが非アクティブの時、アクティブにする
    //   for (var i = 0; i < this.secondMemoLists.length; i++) {
    //     if (this.secondMemoLists[i].id === parentId) {
    //       this.secondMemoLists[i].active = true;
    //     }
    //   }
    //   // alert("message!2");
    // },
    // add_fourth_memo_list(parentId) {
    //   this.latestMemoListId++;
    //   this.fourthMemoLists.push({
    //     id: this.latestMemoListId,
    //     parentId: parentId,
    //     text: "入力して下さい。",
    //     active: true
    //   });

    //   for (var i = 0; i < this.thirdMemoLists.length; i++) {
    //     if (this.thirdMemoLists[i].id === parentId) {
    //       this.thirdMemoLists[i].active = true;
    //     }
    //   }
    //   // alert("fourth!")
    // },
    // delete_second_memo_list(item) {
    //   for (var i = 0; i < this.secondMemoLists.length; i++) {
    //     if (this.secondMemoLists[i].id === item.id) {
    //       this.secondMemoLists.splice(i, 1);
    //     }
    //   }
    // },
    // delete_third_memo_list(item) {
    //   for (var i = 0; i < this.thirdMemoLists.length; i++) {
    //     if (this.thirdMemoLists[i].id === item.id) {
    //       this.thirdMemoLists.splice(i, 1);
    //     }
    //   }
    // },
    // delete_fourth_memo_list(item) {
    //   for (var i = 0; i < this.fourthMemoLists.length; i++) {
    //     if (this.fourthMemoLists[i].id === item.id) {
    //       this.fourthMemoLists.splice(i, 1);
    //     }
    //   }
    // },
    // changeText() {
    //   alert("message!!");
    // }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
.page{
  margin-left: 5%;
}
</style>
