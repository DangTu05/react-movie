import { useEffect, useState } from "react";

const token = import.meta.env.VITE_API_TOKEN;
const defaultHeaders = {
  accept: "application/json",
  Authorization: `Bearer ${token}`,
};
const useFetch = (
  { url, method = "GET", headers = {} },
  { enable } = { enable: true },
) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!enable) return;
    setIsLoading(true);

    const baseUrl = import.meta.env.VITE_API_HOST;

    fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers), enable]);

  return { isLoading, data };
};

export { useFetch as default, defaultHeaders };
