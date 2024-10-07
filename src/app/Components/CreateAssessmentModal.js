"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import FileUpload from "./FileUpload";
import UploadOptions from "./UploadOptions";
const CreateAssessmentModal = ({ handleModal }) => {
  const [uploadBtnClicked, setUploadBtnClicked] = useState(false);
  const handleShowUploadFileOption=()=>{
    setUploadBtnClicked(!uploadBtnClicked)
  }
  return (
    <div className="text-colors-customGrey fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
      {/* modal dialog box */}
      <div className="flex flex-col gap-4 bg-white rounded-md justify-start items-center min-h-[60%] w-[50%] my-[2%] p-5">
        <div className="w-full flex justify-between items-center ">
          <div className="text-left text-xl">Start a New Assessment</div>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-gray-400 text-2xl"
            onClick={handleModal}
          />
        </div>
        <div className="w-full text-left">Step 1 Step 2</div>
        {uploadBtnClicked ? (
         <FileUpload handleShowUploadFileOption={handleShowUploadFileOption} handleModal={handleModal}/>
        ) : (
          <UploadOptions handleShowUploadFileOption={handleShowUploadFileOption}/>
        )}
      </div>
    </div>
  );
};

export default CreateAssessmentModal;
