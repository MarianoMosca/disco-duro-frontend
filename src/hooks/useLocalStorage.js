// Token guardado en el localStorage
import { useEffect, useState } from "react";

export const useLocalStorage = (clave, valorInicial) => {
  const localStorageValue = localStorage.getItem(clave);
  const initialValue = localStorageValue
    ? JSON.parse(localStorageValue)
    : valorInicial;

  const [dato, setDato] = useState(initialValue);
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(dato));
  }, [clave, dato]);

  return [dato, setDato];
};
