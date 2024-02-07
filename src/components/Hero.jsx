import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import "./hero.css";
function Hero() {
  const { currentData, handleLang, lang, handleClick, theme } =
    useContext(Context);

  console.log("storage:", localStorage.getItem("theme"));
  console.log("lang:", lang);
  const light = "GÜNDÜZ MODU";
  const dark = "GECE MODU";

  return (
    <div className="dark:bg-dark pb-16 bg-irmaque dark:text-white ">
      <div className="flex relative ml-[70%]">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={theme}
          onChange={handleClick}
        />
        <label htmlFor="darkModeToggle"></label>
      </div>
      <div className="flex justify-end mr-80 gap-4 ">
        <button onClick={handleLang} className="text-[#777777]">
          {lang === "en" ? (
            <p className="font-inter font-bold">
              <span className="text-lang">{`${currentData.hero.lang1} `}</span>
              {currentData.hero.lang2}
            </p>
          ) : (
            <p className="font-inter font-bold">
              {currentData.hero.lang1}
              <span className="text-lang">{currentData.hero.lang2}</span>
            </p>
          )}
        </button>
      </div>
      <div className="flex justify-between w-3/5 m-auto mt-10">
        <div className=" flex flex-col gap-6">
          <h1 className="text-2rem font-inter font-normal">
            {currentData.hero.title}
          </h1>
          <div>
            <p className="text-2.5rem w-38rem font-inter font-medium ">
              {currentData.hero.text}
            </p>
          </div>
          <div className="mt-8">
            {!theme ? (
              <nav className="flex gap-4 mb-8">
                <a href={currentData.footer.links[2]}>
                  <img src={currentData.hero.img1} alt="123" />
                </a>
                <a href={currentData.footer.links[0]}>
                  <img src={currentData.hero.img2} alt="" />
                </a>
              </nav>
            ) : (
              <nav className="flex gap-4 mb-8">
                <a href={currentData.footer.links[2]}>
                  <img src={currentData.hero.darkImg1} alt="123" />
                </a>
                <a href={currentData.footer.links[0]}>
                  <img src={currentData.hero.darkImg2} alt="" />
                </a>
              </nav>
            )}
            <p className="font-inter font-normal text-lg tracking-5 w-34rem">
              Currently <span className="text-span">Freelancing</span> for
              <span className="text-span">UX, UI, & Web Design</span> Project .
              Invite me to join your team &#8594;
              <span className="text-span underline">
                {" "}
                pratamaiosi@gmail.com
              </span>
            </p>
          </div>
        </div>
        <img className="object-contain" src={currentData.hero.img} />
      </div>
    </div>
  );
}

export default Hero;
