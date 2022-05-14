import { getInfoMarvel, getSubResource } from "@/helper/getInfoMarvel";

export default {
  getMarvelComics: async ({ commit }, { keyword, limit, format }) => {
    commit("SET_LOADING", true);
    try {
      const res = await getInfoMarvel(keyword, limit, format);
      commit("SET_COMICS", res);
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("SET_LOADING", false);
    }
  },

  getMarvelComicsById: async ({ commit }, { keyword, id }) => {
    commit("SET_LOADING", true);
    try {
      const res = await getSubResource(keyword, id);
      commit("SET_DETAIL_ITEM", res?.[0]);
    } catch (err) {
      throw new Error(err);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};
