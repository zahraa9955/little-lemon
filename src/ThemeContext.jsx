import React from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = React.useState("light");

  const handleThemeSwitch = () => {
    Theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ Theme, handleThemeSwitch }}>
      <div className="">
        <div className={`${Theme === "light" ? "dark-theme app-dark" : ""}`}>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
