import { useState } from "react";

export function useLocalStorage(key, value) {
  const [v, setValue] = useState(() => {
    const initial = localStorage.getItem(key);
    return initial ? JSON.parse(initial) : value;
  });
  const setValueLS = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [v, setValueLS];
}
