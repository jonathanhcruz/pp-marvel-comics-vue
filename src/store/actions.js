import getInfoMarvel from "@/helper/getInfoMarvel";

export default {
  getMarvelComics: async ({ commit }) => {
    const res = await getInfoMarvel();
    commit("SET_COMICS", res);
  },
};
