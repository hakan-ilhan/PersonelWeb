import React, { useState, useContext } from "react";

import { Context } from "../contexts/Context";

function Projects() {
  const { currentData } = useContext(Context);

  return (
    <div className="flex justify-center pt-32 dark:bg-grey dark:text-white">
      <div className="w-[60%]">
        <h1 className="text-center font-inter font-medium text-4xl pb-12">
          {currentData.projects.title}
        </h1>
        <div className="burdan justify-between flex w-[100%] flex-wrap">
          {currentData.projects.map.map((item) => {
            return (
              <div className="flex flex-col justify-between  w-[45%] ">
                <div
                  className={`flex flex-col gap-8  ${item.color}  pl-8 rounded-xl pt-12 ${item.dark} h-43rem justify-between`}
                >
                  <h2 className="font-play font-semibold text-3xl">
                    {item.title}
                  </h2>
                  <p className="font-inter font-normal leading-6 w-[90%]">
                    {item.text}
                  </p>
                  <div className="flex flex-wrap w-[70%] gap-2 ">
                    {item.icons.map((icons) => {
                      return (
                        <div className="font-inter font-semibold tracking-5 py-5 pt-2 pb-2 bg-white rounded-3xl w-20 text-center dark:bg-card">
                          {icons}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between w-[85%] font-inter font-semibold">
                    <div>
                      <a href="">{item.github}</a>
                    </div>
                    <div>
                      <a href="">{item.goApp}</a>
                    </div>
                  </div>
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
