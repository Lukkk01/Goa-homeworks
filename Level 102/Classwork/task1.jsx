import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      setState(JSON.parse(item));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
