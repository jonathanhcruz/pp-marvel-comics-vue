export default {
  SET_COMICS: (state, payload) => {
    state.comics = payload;
  },
  SET_LOADING: (state, payload) => {
    state.loading = payload;
  },
};
