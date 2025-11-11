import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  let [data, setData] = useState(() => {
    let stored = localStorage.getItem(key);
    try {
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {}
  }, [key, data]);

  return [data, setData];
}
