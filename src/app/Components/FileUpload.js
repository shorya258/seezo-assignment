"use client";
import { faCloudArrowUp, faSortDown, faSortUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const FileUpload = ({ handleShowUploadFileOption, handleModal, getAllAssessments }) => {
  const [fileDetails, setFileDetails] = useState({
    featureName: "",
    fileName: "",
    creator: "",
  });
  const [file, setFile] = useState("");
  const[fileUploadExpand, toggleFileUploadExpand]= useState(true)
  // fn to remove a selected file
  const handleCancelFileUpload = () => {
    setFile("");
    let tempDet = fileDetails;
    tempDet.fileName = "";
    setFileDetails(tempDet);
  };

  // fn to handle feature name changes
  const onChangeFileDetails = (e) => {
    setFileDetails({ ...fileDetails, [e.target.name]: e.target.value });
  };

  // fn to handle file name and src changes
  const onChange = (e) => {
    setFile(e.target.files[0]);
    let tempDet = fileDetails;
    tempDet.fileName = e.target.files[0].name;
    setFileDetails(tempDet);
  };

  // fn to handle submit btn and call upload file api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("featureName", fileDetails.featureName);
    formData.append("file", file);
    // console.log("submit btn clicked", fileDetails.featureName, file);
    const response = await fetch("api/uploadFile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: fileDetails.fileName,
        featureName: fileDetails.featureName,
        creator: fileDetails.creator,
      }),
    });
    const json = await response.json();
    // console.log(json);
    handleModal();
    getAllAssessments();
  };

  // useEffect to parse authtoken to store creator name and update file details
  useEffect(() => {
    let authStorageToken = localStorage.getItem("authStorageToken");
    const decodedData = jwtDecode(authStorageToken);
    // console.log(decodedData.user.name);
    let tempDet = fileDetails;
    tempDet.creator = decodedData.user.name;
    setFileDetails(tempDet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`w-full flex flex-grow flex-col px-5 gap-5 pb-4 ${fileUploadExpand?"min-h-[70%]":"h-auto"}`}>
      <div>
        <label htmlFor="featureName" className="w-full text-md">
          Feature Name: <span className="text-red-600 text-xl">*</span>{" "}
        </label>
        <input
          name="featureName"
          value={fileDetails.featureName}
          required
          onChange={onChangeFileDetails}
          className=" w-full p-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm lg:text-xl sm:leading-6 text-sm text-colors-customGrey"
        />
      </div>
      <div className={`w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset ${fileUploadExpand?"h-full":"h-auto"} `} onClick={()=>toggleFileUploadExpand(!fileUploadExpand)} >
        <div className="w-full text-md p-2 border-b-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-colors-customActiveBlue bg-opacity-15 flex items-center ">
          {
            fileUploadExpand?<FontAwesomeIcon icon={faSortDown} className="text-xs px-2" />:
            <FontAwesomeIcon icon={faSortUp} className="text-xs px-2" />
          }
        
          File upload: </div>
        {
           
          <div className={`${fileUploadExpand?"h-[70%] w-auto border-dotted border-2 rounded-xl border-gray-300 hover:border-blue-700 my-2 mx-4 flex justify-center items-center hover:bg-gray-100":"hidden"}`}>
          <label
            htmlFor="file-upload"
            className=" flex flex-col text-colors-customHoverGrey"
          >
            <FontAwesomeIcon icon={faCloudArrowUp} className="text-gray-500 text-4xl" />
            <span>Drag & drop files here, or browse</span>
            <span className="text-gray-500 italic">
              Supported file formats: PDF, JPEG, PNG
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            required
            className="hidden"
            onChange={onChange}
          />
        </div>
        }
        {fileDetails.fileName !== "" && (
          <div className="self-start bg-white shadow-md shadow-gray-500 border-gray-500 border-2 border-solid cursor-pointer rounded-md p-2 m-2 hover:shadow-lg hover:shadow-gray-700 transform transition-transform duration-300 hover:-translate-x-0.3 hover:-translate-y-1">
            {fileDetails.fileName}
            <FontAwesomeIcon
              icon={faXmark}
              className="text-red-500"
              onClick={handleCancelFileUpload}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleShowUploadFileOption}
          className="flex justify-center rounded-md bg-colors-customDarkYellow px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-colors-customDarkYellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colors-customDarkYellow"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex justify-center rounded-md bg-colors-customGrey px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colors-customDarkYellow"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
