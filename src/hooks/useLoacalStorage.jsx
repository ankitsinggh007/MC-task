import { useEffect, useState } from "react";

/**
 * useLocalStorage
 * Persistent version of useState — keeps value synced with localStorage.
 * ✅ Safe for MC rounds and production use
 * ✅ Handles JSON parse errors + SSR guard
 */
export default function useLocalStorage(key, defaultValue = "") {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // ignore quota/serialization errors
    }
  }, [key, data]);

  return [data, setData];
}
