import React, { useContext, useEffect, useState } from "react";

import { Context } from "../contexts/Context";

function Skills() {
  const { currentData } = useContext(Context);

  return (
    <div className="dark:bg-grey pb-32">
      <div className="skills-container w-[50%] m-auto pt-8">
        <h1 className="text-skillsTitle mb-12 dark:text-irmaque text-center font-inter font-medium text-5xl tracking-[1%]">
          {currentData.skills.title}
        </h1>
        <div className="flex justify-around text-center text-1.3rem font-inter font-medium text-skillsLight dark:text-skillsText flex-wrap">
          {currentData.skills.map.icons.map((item, index) => {
            return (
              <div>
                <img src={item} alt="" />
                <p>{currentData.skills.map.text[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
