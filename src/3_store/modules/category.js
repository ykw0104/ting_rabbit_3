import { topCategory } from "@/api/constants";
import { findAllCategory } from "@/api/category";

// 分类模块
export default {
  namespaced: true,

  state() {
    return {
      // 分类信息集合
      list: topCategory.map((item) => ({ name: item })),
    };
  },

  mutations: {
    setList(state, payload) {
      state.list = payload;
    },

    // 当前类目的二级类目的显示和隐藏
    show(state, id) {
      const currCategory = state.list.find((item) => item.id === id);
      currCategory.open = true;
    },
    hide(state, id) {
      const currCategory = state.list.find((item) => item.id === id);
      currCategory.open = false;
    },
  },

  // 需要向后台加载数据，所以需要actions函数获取数据
  actions: {
    async getList({ commit }) {
      const { result } = await findAllCategory();
      result.forEach((top) => {
        // 默认二级类目都是隐藏
        top.open = false;
      });

      // 获取数据成功，提交mutations进行数据修改
      commit("setList", result);
    },
  },
};
