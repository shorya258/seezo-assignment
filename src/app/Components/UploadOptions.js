"use client";
import React, { useState } from "react";
import "@/lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faDiagramProject,
  faGear,
  faListCheck,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
const UploadOptions = ({ handleShowUploadFileOption }) => {
  const [fileUploadClicked, toggleFileUploadClicked] = useState(false);
  return (
    <div className="w-full min-h-[70%] flex flex-col px-5 ">
      <div className="w-full text-left font-semibold text-colors-customHoverGrey">
        Select Assessment Resources:
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full my-3">
        <button
          className={`relative flex flex-row items-center justify-center border-solid border-2 rounded-xl hover:border-blue-700 hover:shadow-md hover:shadow-slate-300  transform transition-transform duration-300 hover:-translate-x-0.3 hover:-translate-y-1 ${
            fileUploadClicked
              ? "border-blue-700 bg-colors-customActiveBlue bg-opacity-15 "
              : "border-gray-300 "
          } `}
          onClick={() => toggleFileUploadClicked(!fileUploadClicked)}
        >
          <div className=" flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faUpload}
              className="text-gray-800 text-4xl mb-2  "
            />
            <span>File upload</span>
          </div>
          <div className={` ${fileUploadClicked ? "inline" : "hidden"}`}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="absolute top-0 right-0 p-3 text-2xl text-colors-customActiveBlue"
            />
          </div>
        </button>
        <button className="relative flex flex-col items-center justify-center border-solid border-2 border-gray-300 rounded-xl ">
          <div className=" flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faFileLines}
              className="text-gray-300 text-4xl mb-2"
            />
            <span className="text-gray-300">Google Docs</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGear}
              className="absolute top-0 right-0 p-3 text-2xl text-gray-300"
            />
          </div>
        </button>
        <button className="flex flex-col items-center justify-center border-solid border-2 border-gray-300 rounded-xl hover:border-blue-700 hover:shadow-md hover:shadow-slate-300  transform transition-transform duration-300 hover:-translate-x-0.3 hover:-translate-y-1">
          <FontAwesomeIcon
            icon={faDiagramProject}
            className="text-gray-800 text-4xl mb-2"
          />
          <span>Diagram</span>
        </button>
        <button className="relative flex flex-row items-center justify-center border-solid border-2 border-gray-300 rounded-xl ">
          <div className=" flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faListCheck}
              className="text-gray-300 text-4xl mb-2"
            />
            <span className="text-gray-300">JIRA</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGear}
              className="absolute top-0 right-0 p-3 text-2xl text-gray-300"
            />
          </div>
        </button>
      </div>
      <button
        className={`inline self-end justify-center rounded-md  px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  w-auto ${
          fileUploadClicked
            ? "bg-colors-customGrey hover:bg-gray-900 focus-visible:outline-gray-900"
            : "bg-gray-300"
        } `}
        onClick={handleShowUploadFileOption}
      >
        Next
      </button>
    </div>
  );
};

export default UploadOptions;
