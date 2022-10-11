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
  },

  // 需要向后台加载数据，所以需要actions函数获取数据
  actions: {
    async getList({ commit }) {
      const { result } = await findAllCategory();
      // 获取数据成功，提交mutations进行数据修改
      commit("setList", result);
    },
  },
};
