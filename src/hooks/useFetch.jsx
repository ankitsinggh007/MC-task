import { useState, useEffect, useCallback, useRef } from "react";

export default function useFetch(url, auto = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef();

  const fetchData = useCallback(
    async function fetchData() {
      if (abortRef.current) abortRef.current.abort();
      abortRef.current = new AbortController();
      let { signal } = abortRef.current;

      setLoading(true);
      setError(null);
      if (!url) return;

      try {
        const response = await fetch(url, { signal: signal });
        if (!response.ok) throw new Error(`Error:${response.status}`);

        const json = await response.json();
        if (!signal.aborted) setData(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    if (auto) fetchData();
    return () => {
      abortRef.current.abort();
    };
  }, [url, auto, fetchData]);

  return { data, loading, error, refetch: fetchData };
}
