// 首页相关
import request from "@/utils/request";

/**
 * 获取品牌
 * @param {Intege} limit - 品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request("/home/brand", "get", { limit });
};
