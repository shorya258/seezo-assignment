"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "@/lib/fontawesome";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import CreateAssessmentModal from "../Components/CreateAssessmentModal";
import LeftPanelMenu from "../Components/LeftPanelMenu";
const Assessments = () => {
  const[fullName, setFullName]= useState("");
  const[showModal, toggleShowModal]= useState(false);
  const handleModal=()=>{
    toggleShowModal(!showModal)
  }
  useEffect(() => {
    let authStorageToken = localStorage.getItem("authStorageToken");
    const decodedData = jwtDecode(authStorageToken);
    setFullName(decodedData.user.name)
  }, [])
  
  return (
    <div >
      {showModal && <CreateAssessmentModal handleModal={handleModal} /> }
      <div className="flex flex-row w-full h-screen  ">

      {/* left panel */}
      <LeftPanelMenu/>
      {/* right panel */}
      <div className="bg-colors-assessmentBG text-colors-customGrey  w-[60%] md:w-[75%] lg:w-[85%] p-3 flex flex-col gap-4 ">
        <div className="flex flex-row-reverse my-4 ">
          {fullName}
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-colors-customGrey text-[50px] "
          />
        </div>
        <h1 className="font-medium text-2xl ">Assessments</h1>
        <div className="flex md:flex-row flex-col justify-between">
          <span>View all assessments and create new ones</span>
          <button className="inline  justify-center rounded-md bg-colors-customGrey px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 self-start w-auto"
          onClick={()=>(toggleShowModal(true))}
          >
            + New Assessment
          </button>
        </div>
        {/* Assessments table */}
        <div className="bg-white">
          <table className="table-auto w-full p-3">
            <thead>
              <tr>
                <th className="font-medium border-r-4 border-solid border-gray-600 m-2 ">
                  Feature name{" "}
                </th>
                <th className="font-medium border-r-4 border-solid border-gray-600 m-2 ">
                  State
                </th>
                <th className="font-medium border-r-4 border-solid border-gray-600 m-2">
                  Risk Ranking
                </th>
                <th className="font-medium border-r-4 border-solid border-gray-600 m-2">
                  Open questions
                </th>
                <th className="font-medium border-r-4 border-solid border-gray-600 m-2">
                  Type
                </th>
                <th className="font-medium border-r-4 border-solid border-gray-600 m-2">
                  Creator
                </th>
                <th className="m-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mx-2 text-center">The Sliding </td>
                <td className="mx-2 text-center">Completed</td>
                <td className="mx-2 text-center">0</td>
                <td className="mx-2 text-center">1</td>
                <td className="mx-2 text-center">File Upload</td>
                <td className="mx-2 text-center">Shorya Hayaran</td>
                <td className="mx-2 text-center">4 October 2024 at 4:30 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Assessments;
