import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage();
  useEffect(() => {
    value
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [value]);
  return [value, setValue];
};
