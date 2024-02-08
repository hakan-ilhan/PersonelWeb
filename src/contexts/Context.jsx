import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import data from "../data";
export const Context = createContext();

function ContextProvider({ children }) {
  const initialLang = localStorage.getItem("language") || "en";
  const [allData, setAllData] = useState(data);
  const [lang, setLang] = useState(initialLang);
  const initialCurrentData = allData[lang] || {};
  const [currentData, setCurrentData] = useState(initialCurrentData);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || false);
  const [loading, setLoading] = useState(true);

  console.log("currentData:", currentData);
  console.log("allData:", data);
  const handleLang = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  useEffect(() => {
    localStorage.setItem("language", lang);
    setCurrentData(allData[lang]);
  }, [lang]);

  useEffect(() => {
    axios.post("https://reqres.in/api/hakan", allData[lang]).then(() => {
      console.log("res:", res, lang);
    });
  }, [lang]);

  const handleClick = () => {
    setTheme(!theme);
    console.log("state:", theme);
  };

  useEffect(() => {
    const switchToggleElement = document.querySelector("#switch-toggle");
    if (theme) {
      document.documentElement.classList.add("dark");
      switchToggleElement.classList.remove("bg-yellow-500", "-translate-x-2");
      switchToggleElement.classList.add("bg-gray-700", "translate-x-full");
    } else {
      document.documentElement.classList.remove("dark");
      switchToggleElement.classList.add("bg-yellow-500", "-translate-x-2");
      switchToggleElement.classList.remove("bg-gray-700", "translate-x-full");
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
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
