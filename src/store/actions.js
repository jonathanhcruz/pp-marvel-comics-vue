import { getInfoMarvel } from "@/helper/getInfoMarvel";

export default {
  getMarvelComics: async ({ commit }, { keyword, limit }) => {
    commit("SET_LOADING", true);
    try {
      const res = await getInfoMarvel(keyword, limit);
      commit("SET_COMICS", res);
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};
