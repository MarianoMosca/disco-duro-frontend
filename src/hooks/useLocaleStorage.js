import { useEffect, useState } from "react";

export const useLocalStorage = (key, initualValue) => {
  const localStorageValue = localStorage.getItem(key);
  const value = localStorageValue
    ? JSON.parse(localStorageValue)
    : initualValue;

  const [data, setData] = useState(value);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};
