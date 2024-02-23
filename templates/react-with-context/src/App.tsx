import { useContext } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return <div>{ theme}</div>;
};
