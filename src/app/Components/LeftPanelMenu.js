"use client";
import Image from "next/image";
import React, { useState , useEffect } from "react";
const LeftPanelMenu = ({ showExpandedMenu,expandLeftPanel }) => {
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
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2">
        <Image
          src="/images/tut.svg"
          alt=" Watch Tutorial"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span className="whitespace-nowrap leading-none">Watch Tutorial</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2">
        <Image
          src="/images/dashboard.svg"
          alt="yoga pose"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span className="leading-none">Dashboard</span>}
      </div>
      <div className="bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2">
        <Image
          src="/images/assessments.svg"
          alt="tut"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span className="leading-none">Assessments</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2">
        <Image
          src="/images/diagrams.svg"
          alt="diagrams"
          width={20}
          height={20}
          className="opacity-40"
        />{" "}
        {expandLeftPanel && <span className="leading-none">Diagrams</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2">
        <Image
          src="/images/security-req.svg"
          alt="Security Requirements"
          width={20}
          height={20}
          className="opacity-40"
        />
        {expandLeftPanel && <span className="whitespace-nowrap leading-none">Security Requirements</span>}
      </div>
      <div className="hover:bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2">
        <Image src="/images/config.svg" alt="Config" width={20} height={20} />
        {expandLeftPanel && <span className="leading-none"> Config</span>}
      </div>
    </div>
  );
};

export default LeftPanelMenu;
