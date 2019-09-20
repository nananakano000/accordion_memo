import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const store = {
    namespaced: true,
    state: {
      selectNotebook: String,  //選択したNBタイトル
      selectMemoList: [],  //選択したNBのMEMOリスト
      selectDoc: String,  //選択したドキュメント
    },
    getters: {
      selectNotebook: (state) => {
        return state.selectNotebook;
      },
      selectMemoList: (state) => {
        return state.selectMemoList;
      },
      selectDoc: (state) => {
        return state.selectDoc;
      }
    },
    mutations: {
      setSelectNotebook(state, selectNb){
        state.selectNotebook = selectNb;
      },
      setSelectMemoList(state, selectMemoList){
        state.selectMemoList = selectMemoList;
      },
      setSelectDoc(state, selectDoc){
        state.selectDoc = selectDoc;
      }
    },
  //   actions: {
  //     buttonAction({ commit, state, rootState })  {
  //     // console.log("buttonAction")
  //     }
  //  }
}

export default new Vuex.Store({
  modules: {
    store
  }
})