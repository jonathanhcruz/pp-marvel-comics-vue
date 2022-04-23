import md5 from "md5";

const hashApi = (val) => {
  const { ts, privateKey, publicKey } = val;
  return md5(ts + privateKey + publicKey);
};

export default hashApi;
