"use client";
import Image from "next/image";
import React, { useState , useEffect } from "react";
const LeftPanelMenu = ({ showExpandedMenu,expandLeftPanel }) => {

  return (
    <div
      className={` ${
        !expandLeftPanel ? "lg:w-[60px]" : "w-[40%] md:w-[25%] lg:w-[15%] "
      } hover:w-[40%] md:w-[25%] lg:w-[70px] p-4 transition-all duration-500 ease-in-out bg-colors-customGrey text-xl flex flex-col gap-3`}
      onMouseEnter={showExpandedMenu}
      onMouseLeave={showExpandedMenu}
    >
      <div className="hover:bg-colors-customHoverGrey text-2xl flex gap-5 items-center justify-start ">
      <Image
          src="/images/logo.png"
          alt="Logo"
          width={35}
          height={35}
          className=""
        />
       {expandLeftPanel && <span>Seezo</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2">
        <Image
          src="/images/tut.svg"
          alt=" Watch Tutorial"
          width={20}
          height={20}
          className="opacity-40"
        />
        {console.log(expandLeftPanel, "expandLeftPanel2")}
        {expandLeftPanel && <span className="whitespace-nowrap">Watch Tutorial</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start  gap-2">
        <Image
          src="/images/dashboard.svg"
          alt="yoga pose"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span>Dashboard</span>}
      </div>
      <div className="bg-colors-customHoverGrey flex items-center justify-start gap-2">
        <Image
          src="/images/assessments.svg"
          alt="tut"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span>Assessments</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2">
        <Image
          src="/images/diagrams.svg"
          alt="diagrams"
          width={20}
          height={20}
          className="opacity-40"
        />{" "}
        {expandLeftPanel && <span>Diagrams</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2">
        <Image
          src="/images/security-req.svg"
          alt="Security Requirements"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span className="whitespace-nowrap">Security Requirements</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2">
        <Image src="/images/config.svg" alt="Config" width={20} height={20} />
        {expandLeftPanel && <span> Config</span>}
      </div>
    </div>
  );
};

export default LeftPanelMenu;
