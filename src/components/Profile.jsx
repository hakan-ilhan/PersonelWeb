import React, { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";
function Profile() {
  const { currentData } = useContext(Context);

  return (
    <div className="flex flex-col gap-8 bg-irmaque pt-16 pb-20 dark:bg-dark">
      <h1 className="text-center mb-5 font-inter font-medium text-4xl dark:text-white">
        {currentData.profile.title}
      </h1>
      <div className="m-auto w-[45%] flex gap-6 ">
        <div className="w-[50%] p-4 rounded-xl flex flex-col gap-3 bg-white shadow-[10px_10px_1px_rgba(82,_82,_82,_1),_0_0px_0px_rgba(82,_82,_82,_1)] dark:bg-card dark:text-white">
          <h2 className="text-basicInfo font-play text-3xl">
            {currentData.profile.basicTitle}
          </h2>
          <div className="flex  gap-6">
            <div className="flex flex-col  gap-4 font-inter font-semibold">
              <p>{currentData.profile.birthDateText}</p>
              <p>{currentData.profile.locationText}</p>
              <p>{currentData.profile.educationText}</p>
              <p className="mt-6">{currentData.profile.roleText}</p>
            </div>
            <div className="w-[50%] flex flex-col justify-between gap-4 font-normal font-inter">
              <p>{currentData.profile.birthDate}</p>
              <p>{currentData.profile.location}</p>
              <p>{currentData.profile.education}</p>
              <p>{currentData.profile.role}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-w-sm m-auto dark:text-white">
          <h3 className="font-play font-normal text-2xl">
            {currentData.profile.aboutTitle}
          </h3>
          <p className="font-inter font-normal">
            {currentData.profile.aboutText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
