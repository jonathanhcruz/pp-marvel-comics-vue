const fetchApi = async ({ url, method = "GET" }) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};

export default fetchApi;
