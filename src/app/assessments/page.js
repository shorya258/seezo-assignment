"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "@/lib/fontawesome";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import CreateAssessmentModal from "../Components/CreateAssessmentModal";
import LeftPanelMenu from "../Components/LeftPanelMenu";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Assessments = () => {
  const [fullName, setFullName] = useState("");
  const [assessments, setAssessments] = useState([]);
  const [showModal, toggleShowModal] = useState(false);
  const[menuBtnClicked, toggleMenuBtnClicked]= useState(false)
  const[expandLeftPanel, toggleExpandLeftPanel]= useState(false)
  const router= useRouter();
  // fn to handle modal
  const handleModal = () => {
    toggleShowModal(!showModal);
  };


  // fn to call get all assessments api
  const getAllAssessments = async () => {
    const response = await fetch("api/getAllAssessments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setAssessments(json.assessmentList);
  };

  const handleAssessmentResult=(singleAssessment)=>{
    let assessmentId=singleAssessment._id;
    router.push(`/result/${assessmentId}`)
  }

  const handleMenuBtnClick=()=>{
    console.log("menu btn clicked")
    toggleMenuBtnClicked(!menuBtnClicked);
    showExpandedMenu();
  }

  const showExpandedMenu=()=>{
    console.log("show expanded menu called")
    if(menuBtnClicked)
    {
      console.log("expand left panel true")
      toggleExpandLeftPanel(true)
      return;
    }
    else{
      toggleExpandLeftPanel(!expandLeftPanel)
    }
  }

  // use effect to parse authtoken and get user name to display beside profile picture
  useEffect(() => {
    let authStorageToken = localStorage.getItem("authStorageToken");
    const decodedData = jwtDecode(authStorageToken);
    setFullName(decodedData.user.name);
  }, []);

  useEffect(() => {
    getAllAssessments();
  }, []);

  useEffect(() => {
    showExpandedMenu();
  }, [menuBtnClicked]);
  

  return (
    <div>
      {showModal && <CreateAssessmentModal handleModal={handleModal} />}
      <div className="flex flex-row w-screen h-screen  ">
        {/* left panel */}
        <LeftPanelMenu 
        showExpandedMenu={showExpandedMenu}
        expandLeftPanel={expandLeftPanel}
        />
        {/* right panel */}
        <div className="bg-colors-assessmentBG text-colors-customGrey  w-[60%] md:w-[75%] lg:w-screen p-3 flex flex-col gap-4 rounded-md cursor-default ">
          <div className='flex justify-between items-center ' >
            <Image
                src="/images/menuIcon.svg"
                alt="menu Icon"
                width={35}
                height={35}
                onClick={()=>toggleMenuBtnClicked(!menuBtnClicked)}
              />
          <div className="flex flex-row-reverse my-4 ">
            {fullName}
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-colors-customGrey text-[35px] mx-2 "
            />
          </div>
          </div>
          <h1 className="font-medium text-2xl ">Assessments</h1>
          <div className="flex md:flex-row flex-col justify-between">
            <span>View all assessments and create new ones</span>
            <button
              className="inline  justify-center rounded-md bg-colors-customGrey px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 self-start w-auto"
              onClick={() => toggleShowModal(true)}
            >
              + New Assessment
            </button>
          </div>
          {/* Assessments table */}
          <div className="bg-white">
            <table className="table-auto w-full p-3">
              <thead>
                <tr>
                  <th className="font-medium p-2 border-r-4 border-solid border-gray-600 m-2">
                    Feature name{" "}
                  </th>
                  <th className="font-medium p-2 border-r-4 border-solid border-gray-600 m-2 ">
                    State
                  </th>
                  <th className="font-medium p-2 border-r-4 border-solid border-gray-600 m-2">
                    Risk Ranking
                  </th>
                  <th className="font-medium p-2 border-r-4 border-solid border-gray-600 m-2">
                    Open questions
                  </th>
                  <th className="font-medium p-2 border-r-4 border-solid border-gray-600 m-2">
                    Type
                  </th>
                  <th className="font-medium p-2 border-r-4 border-solid border-gray-600 m-2">
                    Creator
                  </th>
                  <th className="m-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {assessments?.map((singleAssessment, key) => {
                  return (
                    <tr key={key} className="hover:bg-colors-customActiveBlue hover:bg-opacity-20" onClick={()=>handleAssessmentResult(singleAssessment)}  >
                      <td className="mx-2 text-center">
                        {singleAssessment.featureName}
                      </td>
                      <td className="mx-2 p-2 text-center">Completed</td>
                      <td className="mx-2 p-2 text-center">0</td>
                      <td className="mx-2 p-2 text-center">1</td>
                      <td className="mx-2 p-2 text-center">File Upload</td>
                      <td className="mx-2 p-2 text-center">
                        {singleAssessment.creator}
                      </td>
                      <td className="mx-2 p-2 text-center">
                        {singleAssessment.fileName}
                      </td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <td className="mx-2 text-center">The Sliding </td>
                  <td className="mx-2 text-center">Completed</td>
                  <td className="mx-2 text-center">0</td>
                  <td className="mx-2 text-center">1</td>
                  <td className="mx-2 text-center">File Upload</td>
                  <td className="mx-2 text-center">Shorya Hayaran</td>
                  <td className="mx-2 text-center">
                    4 October 2024 at 4:30 pm
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
