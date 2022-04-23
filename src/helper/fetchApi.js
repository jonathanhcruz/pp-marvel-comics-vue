const fetchApi = async (
  { ts, publicKey, generateHash },
  keyword = "comics",
  limit = 10
) => {
  const response = await fetch(
    `http://gateway.marvel.com/v1/public/${keyword}?ts=${ts}&apikey=${publicKey}&hash=${generateHash}&limit=${limit}`
  );
  const res = await response.json();
  return res;
};

export default fetchApi;
