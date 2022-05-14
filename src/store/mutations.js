export default {
  SET_COMICS: (state, payload) => {
    state.comics = payload || [];
  },
  SET_DETAIL_ITEM: (state, payload) => {
    state.marvelDetailItem = payload || {};
    console.log(state.marvelDetailItem);
  },
  SET_LOADING: (state, payload) => {
    state.loading = payload || false;
  },
};
