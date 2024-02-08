import React, { useContext } from "react";
import { Context } from "../contexts/Context";

function Hero() {
  const { currentData, handleLang, lang, handleClick, theme } =
    useContext(Context);

  console.log("storage:", localStorage.getItem("theme"));
  console.log("lang:", lang);
  const light = "GÜNDÜZ MODU";
  const dark = "GECE MODU";

  return (
    <div className="dark:bg-dark pb-16 bg-irmaque dark:text-white ">
      <div className="flex items-center gap-9 p-3">
        <div className="flex items-center gap-6 font-inter ml-[70%] sm:ml-[50%]">
          <button
            className="w-16 h-7 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
            onClick={handleClick}
          >
            <div
              id="switch-toggle"
              className={`w-8 h-8 relative rounded-full transition duration-500 transform -translate-x-2 p-1 text-white ${
                theme
                  ? "bg-gray-700 translate-x-full"
                  : "bg-yellow-500 -translate-x-2"
              }`}
            >
              {theme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
        <div className="flex justify-end mr-60">
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
      </div>
      <div className="flex justify-between  m-auto mt-2 max-w-7xl flex-wrap ">
        <div className=" flex flex-col gap-6 flex-wrap max-w-[650px] sm:w-[90%] ">
          <h1 className="text-2rem font-inter font-normal">
            {currentData.hero.title}
          </h1>
          <div className="w-[100%] sm:w-[90%]">
            <p className="text-2.5rem w-[90%] font-inter font-medium ">
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
            <p className="font-inter font-normal text-lg tracking-5 w-[80%]">
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
        <img className="object-contain sm:mt-6" src={currentData.hero.img} />
      </div>
    </div>
  );
}

export default Hero;
