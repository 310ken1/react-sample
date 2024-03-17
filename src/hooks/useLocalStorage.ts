import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(key);
      setState(value ? JSON.parse(value) : initialValue);
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = (value: any) => {
    try {
      const v = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(v));
      setState(v);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteValue = () => {
    window.localStorage.removeItem(key);
    setState(initialValue);
  };

  return [state, setValue, deleteValue];
};

export default useLocalStorage;
