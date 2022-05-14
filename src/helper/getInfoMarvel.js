import fetchApi from "./fetchApi";
import auth from "./auth";

const structureParamsUrl = ({
  keyword,
  id,
  limit,
  format,
  ts,
  publicKey,
  generateHash,
}) => {
  const paramskeyword = keyword || "";
  const paramId = id ? `/${id}` : "";
  const limitParams = `${limit && !id ? `&limit=${limit}` : ""}`;
  const formatParams = format ? `&format=${format}` : "";
  const paramsAuth = `?ts=${ts}&apikey=${publicKey}&hash=${generateHash}`;
  return `${paramskeyword}${paramId}${paramsAuth}${limitParams}${formatParams}`;
};

export const getInfoMarvel = async (keyword = "comics", limit = 20, format) => {
  const { ts, generateHash, publicKey } = auth();
  const paramsUrl = structureParamsUrl({
    keyword,
    limit,
    format,
    ts,
    publicKey,
    generateHash,
  });
  const res = await fetchApi({
    url: `http://gateway.marvel.com/v1/public/${paramsUrl}`,
  });
  return res?.data?.results;
};

export const getSubResource = async (keyword, id) => {
  const { ts, generateHash, publicKey } = auth();
  const urlStructure = `http://gateway.marvel.com/v1/public/${structureParamsUrl(
    {
      keyword,
      id,
      ts,
      generateHash,
      publicKey,
    }
  )}`;
  const res = await fetchApi({
    url: urlStructure,
  });
  return res?.data?.results;
};
