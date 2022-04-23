import md5 from "md5";
import fetchApi from "./fetchApi";

const { publicKey, privateKey } = {
  publicKey: process.env.VUE_APP_PUBLIC_KEY_MARVEL,
  privateKey: process.env.VUE_APP_PRIVATE_KEY_MARVEL,
};

const structureUrl = (keyword, ts, publicKey, generateHash, limit) =>
  `http://gateway.marvel.com/v1/public/${keyword}?ts=${ts}&apikey=${publicKey}&hash=${generateHash}&limit=${limit}`;

export const getInfoMarvel = async (keyword = "comics", limit = 10) => {
  const ts = new Date().getTime();
  const generateHash = md5(ts + privateKey + publicKey);
  const url = structureUrl(keyword, ts, publicKey, generateHash, limit);
  const res = await fetchApi({ url });
  return res?.data?.results;
};
