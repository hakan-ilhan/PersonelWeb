import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
function Footer() {
  const { currentData } = useContext(Context);
  //wcag - why to use semantic ui
  return (
    <div className="pt-32 dark:bg-grey sm:pt-10">
      <div className=" max-w-3xl m-auto flex justify-end gap-12 flex-wrap sm:justify-center sm:items-center ">
        <div className="  w-[70%] ">
          <p className="text-right font-inter font-medium text-5xl tracking-[1%] leading-4rem dark:text-white sm:text-center sm:text-2xl">
            {currentData.footer.text}
          </p>
        </div>
        <div className="flex flex-col gap-1  font-inter font-medium text-2xl">
          {currentData.footer.linkText.map((item, index) => {
            return (
              <a
                target="blank"
                className={currentData.footer.colors[index]}
                href={currentData.footer.links[index]}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
