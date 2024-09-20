import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const usePrimaryColor = () => {
  return useContext(ThemeContext);
};
