import md5 from "md5";

const { publicKey, privateKey } = {
  publicKey: process.env.VUE_APP_PUBLIC_KEY_MARVEL,
  privateKey: process.env.VUE_APP_PRIVATE_KEY_MARVEL,
};

const auth = () => {
  const ts = new Date().getTime();
  const generateHash = md5(ts + privateKey + publicKey);
  return { ts, generateHash, publicKey };
};

export default auth;
