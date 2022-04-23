import md5 from "md5";
import fetchApi from "./fetchApi";

const { publicKey, privateKey } = {
  publicKey: process.env.VUE_APP_PUBLIC_KEY_MARVEL,
  privateKey: process.env.VUE_APP_PRIVATE_KEY_MARVEL,
};

const getInfoMarvel = async (keyword, limit) => {
  const ts = new Date().getTime();
  const generateHash = md5(ts + privateKey + publicKey);
  const res = await fetchApi({ ts, publicKey, generateHash }, keyword, limit);
  return res?.data?.results;
};

export default getInfoMarvel;
