import fetchApi from "./fetchApi";
import auth from "./auth";

const structureParamsUrl = (
  keyword,
  limit,
  format,
  ts,
  publicKey,
  generateHash
) => {
  const paramsAuth = `${keyword}?ts=${ts}&apikey=${publicKey}&hash=${generateHash}`;
  const limitParams = `${limit ? `&limit=${limit}` : ""}`;
  const formatParams = `${format ? `&format=${format}` : ""}`;
  return `${paramsAuth}${limitParams}${formatParams}`;
};

export const getInfoMarvel = async (keyword = "comics", limit = 10, format) => {
  const { ts, generateHash, publicKey } = auth();
  const paramsUrl = structureParamsUrl(
    keyword,
    limit,
    format,
    ts,
    publicKey,
    generateHash
  );
  const res = await fetchApi({
    url: `http://gateway.marvel.com/v1/public/${paramsUrl}`,
  });
  return res?.data?.results;
};

export const getSubResource = async (url) => {
  const { ts, generateHash, publicKey } = auth();
  const urlStructure = `${url}/${structureParamsUrl(
    ts,
    generateHash,
    publicKey
  )}`;
  const res = await fetchApi({
    url: urlStructure,
  });
  return res?.data?.results;
};
