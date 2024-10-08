"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faDownload, faDownLong, faSortDown } from "@fortawesome/free-solid-svg-icons";
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
  const [menuBtnClicked, toggleMenuBtnClicked] = useState(false);
  const [expandLeftPanel, toggleExpandLeftPanel] = useState(false);
  const router = useRouter();
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

  const handleAssessmentResult = (singleAssessment) => {
    let assessmentId = singleAssessment._id;
    router.push(`/result/${assessmentId}`);
  };

  const handleMenuBtnClick = () => {
    console.log("menu btn clicked");
    toggleMenuBtnClicked(!menuBtnClicked);
    toggleExpandLeftPanel(!expandLeftPanel);
  };

  const showExpandedMenu = () => {
    console.log("show expanded menu called");
    if (!menuBtnClicked) {
      toggleExpandLeftPanel(!expandLeftPanel);
    }
  };

  // use effect to parse authtoken and get user name to display beside profile picture
  useEffect(() => {
    let authStorageToken = localStorage.getItem("authStorageToken");
    const decodedData = jwtDecode(authStorageToken);
    setFullName(decodedData.user.name);
    getAllAssessments();
  }, []);
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
        <div className="bg-colors-assessmentBG text-colors-customGrey  w-[60%] md:w-[75%] lg:w-screen p-3 flex flex-col gap-4 cursor-default ">
          <div className="flex justify-between items-center cursor-pointer">
            <Image
              src="/images/menuIcon.svg"
              alt="menu Icon"
              width={35}
              height={35}
              onClick={() => handleMenuBtnClick()}
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
          <div className="bg-white border-[1px] rounded-md min-h-96">
            <table className="table-auto w-full p-3">
              <thead className="bg-[#f8f9fa] text-sm text-left ">
                <tr >
                  <th className="p-2 border-r-2 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                  <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg"></Image>
                  </th>
                  <th className=" p-2 border-r-2 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <div className="flex justify-between font-extralight">
                      <p>Feature name</p>
                      <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg"></Image>
                    </div>
                  </th>
                  <th className="p-2 border-r-2 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)] ">
                    <div className="flex justify-between font-extralight">
                      <p>State</p>
                      <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg" className="ml-auto" ></Image>
                    </div>
                  </th>
                  <th className="p-2 border-r-2 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <div className="flex justify-between font-extralight">
                      <p>Risk Ranking</p>
                      <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg"></Image>
                    </div>
                  </th>
                  <th className="p-2 border-r-2 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <div className="flex justify-between font-extralight">
                      <p>Open questions</p>
                      <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg"></Image>
                    </div>
                  </th>
                  <th className="p-2 border-r-2  border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <div className="flex justify-between font-extralight">
                      <p>Type</p>
                      <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg"></Image>
                    </div>
                  </th>

                  <th className="p-2 border-r-2 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <div className="flex justify-between font-extralight">
                      <p>Creator</p>
                      <Image alt="sort down" width={20} height={20} src="/images/sort-down.svg"></Image>
                    </div>
                  </th>
                  <th className="p-2 m-2">
                    <div className="flex justify-start">
                      <p>Creator</p>
                      <FontAwesomeIcon icon={faSortDown} className="ml-4"/>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {assessments?.map((singleAssessment, key) => {
                  return (
                    <tr
                      key={key}
                      className="hover:bg-colors-customActiveBlue hover:bg-opacity-20 text-left border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)]"
                      onClick={() => handleAssessmentResult(singleAssessment)}
                    >
                      <td className="mx-2 p-2">
                        <input type="checkbox"></input>
                      </td>
                      <td className="mx-2">{singleAssessment.featureName}</td>
                      <td className="mx-2 p-2">Completed</td>
                      <td className="mx-2 p-2">0</td>
                      <td className="mx-2 p-2">1</td>
                      <td className="mx-2 p-2">File Upload</td>
                      <td className="mx-2 p-2">{singleAssessment.creator}</td>
                      <td className="mx-2 p-2">{singleAssessment.fileName}</td>
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
