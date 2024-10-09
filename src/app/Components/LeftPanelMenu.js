"use client";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Label from "./Label";
import { useRouter } from "next/navigation";
const LeftPanelMenu = ({ showExpandedMenu, expandLeftPanel }) => {
  const router= useRouter();
 const handleLogout=()=>{
  localStorage.removeItem("authStorageToken");
  router.push("/login")
 }
  return (
    <div
      className={` ${
        !expandLeftPanel ? "lg:w-[80px]" : "w-[30%] md:w-[25%] lg:w-[20%] "
      } hover:w-[30%] hover:md:w-[25%] hover:lg:w-[20%] pl-6 transition-all duration-50 ease-in bg-colors-customGrey text-md flex flex-col gap-3`}
      onMouseEnter={showExpandedMenu}
      onMouseLeave={showExpandedMenu}
    >
      <div className="hover:bg-colors-customHoverGrey text-xl flex gap-5 items-center justify-start mt-4 ">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={35}
          height={35}
          className=""
        />
        {expandLeftPanel && <span className="leading-none">Seezo</span>}
      </div>
      <Label
        imgSrc="/images/tut.svg"
        altTxt=" Watch Tutorial"
        labelTitle="Watch Tutorial"
        expandLeftPanel={expandLeftPanel}
      />
      <Label
        imgSrc="/images/dashboard.svg"
        altTxt=" dashboard"
        labelTitle="Dashboard"
        expandLeftPanel={expandLeftPanel}
      />
      <Label
        imgSrc="/images/assessments.svg"
        altTxt=" assessments"
        labelTitle="Assessments"
        expandLeftPanel={expandLeftPanel}
      />
      <Label
        imgSrc="/images/diagrams.svg"
        altTxt=" diagrams"
        labelTitle="Diagrams"
        expandLeftPanel={expandLeftPanel}
      />
      <Label
        imgSrc="/images/security-req.svg"
        altTxt=" Security requirements"
        labelTitle="Security requirements"
        expandLeftPanel={expandLeftPanel}
      />
      <Label
        imgSrc="/images/config.svg"
        altTxt=" config"
        labelTitle="Diagrams"
        expandLeftPanel={expandLeftPanel}
      />
      <div className="flex items-center justify-start gap-2 px-2 py-4">
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="text-red-600 text-sm"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default LeftPanelMenu;
