"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const FileUpload = ({ handleShowUploadFileOption, handleModal }) => {
  const [fileDetails, setFileDetails] = useState({
    featureName: "",
    fileName: "",
    creator: "",
  });
  // const [featureName, setFeatureName] = useState("");
  const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState("");
  // const [creator, setCreator]

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
    console.log("submit btn clicked", fileDetails.featureName, file);
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
    console.log(json);
    handleModal();
  };

  // useEffect to parse authtoken to store creator name and update file details
  useEffect(() => {
    let authStorageToken = localStorage.getItem("authStorageToken");
    const decodedData = jwtDecode(authStorageToken);
    console.log(decodedData.user.name);
    let tempDet = fileDetails;
    tempDet.creator = decodedData.user.name;
    setFileDetails(tempDet);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center ">
      <label htmlFor="featureName" className="block w-full text-xl">
        Feature Name: <span className="text-red-600 text-xl">*</span>{" "}
      </label>
      <input
        name="featureName"
        value={fileDetails.featureName}
        required
        onChange={onChangeFileDetails}
        className="block w-full rounded-md border-0 p-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm lg:text-xl sm:leading-6 "
      />
      <div className="w-full text-xl ">Upload Documents (PDF, JPEG, PNG): </div>
      <label
        htmlFor="file-upload"
        className=" text-colors-customHoverGrey hover:text-colors-customHoverGrey hover:bg-gray-100 border-dotted border-2 rounded-md border-blue-700 w-full h-[70%] "
      >
        Drag & drop files here, or browse to upload
      </label>
      <input
        id="file-upload"
        type="file"
        accept="application/pdf"
        required
        className="hidden"
        onChange={onChange}
      />
      {fileDetails.fileName !== "" && (
        <div className="shadow-md shadow-gray-500 border-gray-500 border-2 border-solid cursor-pointer rounded-md p-2 m-2 hover:shadow-lg hover:shadow-gray-700 hover:-translate-y-1  transition-shadow duration-200 ease-out">
          {fileDetails.fileName}
          <FontAwesomeIcon
            icon={faXmark}
            className="text-red-500"
            onClick={handleCancelFileUpload}
          />
        </div>
      )}
      <div className="flex justify-evenly">
        <button
          onClick={handleShowUploadFileOption}
          className="flex justify-center rounded-md bg-colors-customYellow px-3 py-1.5 text-sm font-semibold leading-6 text-colors-customHoverGrey shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colors-customDarkYellow  "
          disabled
        >
          Add more context
        </button>
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
