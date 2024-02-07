import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import data from "../data";
export const Context = createContext();

function ContextProvider({ children }) {
  const initialLang = localStorage.getItem("language") || "en";
  const [allData, setAllData] = useState({});
  const [lang, setLang] = useState(initialLang);
  const initialCurrentData = allData[lang] || {};
  const [currentData, setCurrentData] = useState(initialCurrentData);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://reqres.in/api/workintech").then((res) => {
      setAllData(res.data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setCurrentData(allData[lang]);
  }, [allData]);

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
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
