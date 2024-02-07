import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
function Footer() {
  const { currentData } = useContext(Context);
  return (
    <div className="pt-32 dark:bg-grey">
      <div className="container w-[45%] m-auto flex justify-end gap-12">
        <div className=" text w-[70%] ">
          <p className="text-right font-inter font-medium text-5xl tracking-[1%] leading-4rem dark:text-white">
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
