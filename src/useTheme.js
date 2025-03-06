import { useEffect } from "react";

const useTheme = (theme, setTheme) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "default" ? "birds" : "default"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
