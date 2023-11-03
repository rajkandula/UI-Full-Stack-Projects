import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, SetIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortConst.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from resources");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          SetIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            SetIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
