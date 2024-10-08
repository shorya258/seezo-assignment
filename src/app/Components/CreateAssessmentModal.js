"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import FileUpload from "./FileUpload";
import UploadOptions from "./UploadOptions";
const CreateAssessmentModal = ({ handleModal }) => {
  const [uploadBtnClicked, setUploadBtnClicked] = useState(false);
  const handleShowUploadFileOption = () => {
    setUploadBtnClicked(!uploadBtnClicked);
  };
  return (
    <div className="text-colors-customGrey fixed inset-0 bg-black bg-opacity-35 flex justify-center">
      {/* modal dialog box */}
      <div className="flex flex-col bg-white rounded-xl justify-start items-center min-h-[60%] h-[60%] w-[45%] mt-[2%]">
        <div className="w-full flex justify-between items-center bg-colors-modalHeaderColor p-4 rounded-t-xl ">
          <div className="text-left text-xl font-semibold text-colors-customHoverGrey ">Create New Assessment</div>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-gray-400 text-2xl"
            onClick={handleModal}
          />
        </div>
        <div className="w-full p-2 flex text-left">
          <div className="w-[50%] border-solid border-blue-700 border-2 mr-1"></div>
          <div
            className={`w-[50%] border-solid border-2 mr-1 ${
              uploadBtnClicked ? "border-blue-700 " : "border-gray-400 "
            } transition-colors duration-700 ease-in-out `}
          ></div>
        </div>
        {uploadBtnClicked ? (
          <FileUpload
            handleShowUploadFileOption={handleShowUploadFileOption}
            handleModal={handleModal}
          />
        ) : (
          <UploadOptions
            handleShowUploadFileOption={handleShowUploadFileOption}
          />
        )}
      </div>
    </div>
  );
};

export default CreateAssessmentModal;
