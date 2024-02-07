import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import data from "../data";
export const Context = createContext();

function ContextProvider({ children }) {
  const [allData, setAllData] = useState(data);
  const [lang, setLang] = useState(localStorage.getItem("language") || "en");
  const initialCurrentData = allData[lang] || {};
  const [currentData, setCurrentData] = useState(initialCurrentData);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || false);

  console.log("currentData:", currentData);
  console.log("allData:", data);
  const handleLang = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  useEffect(() => {
    localStorage.setItem("language", lang);
    setCurrentData(allData[lang]);
  }, [lang]);

  const handleClick = () => {
    setTheme(!theme);
    console.log("state:", theme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Context.Provider
      value={{
        allData,
        lang,
        setLang,
        handleLang,
        currentData,
        setCurrentData,
        handleClick,
        theme,
        setAllData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
