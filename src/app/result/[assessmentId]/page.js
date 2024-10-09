"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import LeftPanelMenu from "@/app/Components/LeftPanelMenu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
const AssessmentId = () => {
  const params = useParams();
  const { assessmentId } = params;
  const [menuBtnClicked, toggleMenuBtnClicked] = useState(false);
  const [activeHeading, setActiveHeading] = useState("Security Summary");
  const [currentAssessment, setCurrentAssessment] = useState(null);
  const [expandLeftPanel, toggleExpandLeftPanel] = useState(false);
  const showExpandedMenu = () => {
    if (!menuBtnClicked) {
      toggleExpandLeftPanel(!expandLeftPanel);
    }
  };
  const handleMenuBtnClick = () => {
    toggleMenuBtnClicked(!menuBtnClicked);
    toggleExpandLeftPanel(!expandLeftPanel);
  };
  const getAssessmentResults = async () => {
    const response = await fetch("/api/getAssessmentResults", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: assessmentId,
      }),
    });
    const responseData = await response.json();
    setCurrentAssessment(responseData.assessmentResult);
  };
  const handleSetHeading = (heading) => {
    setActiveHeading(heading);
  };

  useEffect(() => {
    getAssessmentResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formatDate = (dateStr) => {
    if (dateStr === undefined) {
      return "";
    }
    const date = new Date(dateStr);

    // Format the date
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    const [datePart, timePart] = formattedDate.split(", ");
    const finalFormattedDate = `${datePart.replace(
      ",",
      ""
    )} at ${timePart.toLowerCase()}`;

    return finalFormattedDate;
  };
  return (
    <div className="flex flex-row w-screen h-screen">
      <LeftPanelMenu
        showExpandedMenu={showExpandedMenu}
        expandLeftPanel={expandLeftPanel}
      />
      <div className="bg-colors-assessmentBG text-colors-customGrey  w-[60%] md:w-[75%] lg:w-screen p-3 flex flex-col gap-4 rounded-md cursor-default ">
        <div className="flex justify-between items-center cursor-pointer">
          <Image
            src="/images/menuIcon.svg"
            alt="menu Icon"
            width={35}
            height={35}
            onClick={() => handleMenuBtnClick()}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold ">Assessment Details</h1>
            <p className="font-small text-md my-2">
              Triage assessment results and share them with your stakeholders
            </p>
          </div>
          <div className="flex gap-x-2">
            <button className="flex justify-center items-center gap-1 rounded-md bg-colors-customYellow px-4 py-2.5 text-md  leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colors-customDarkYellow text-colors-customGrey transform transition-transform duration-300 hover:-translate-x-0.3 hover:-translate-y-1">
              Rescan
              <FontAwesomeIcon icon={faRotateRight} className="item" />
            </button>
            <button className="flex justify-center rounded-md bg-colors-customGrey px-4 py-2.5 text-md leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colors-customGrey transform transition-transform duration-300 hover:-translate-x-0.3 hover:-translate-y-1">
              Export
            </button>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex-grow">
            <h2 className="mb-6 text-xl font-semibold">Assessment Metadata</h2>
            <div className="flex flex-col p-6 rounded-md bg-white text-sm gap-y-2">
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Feature name:</h3>
                <p>{currentAssessment?.featureName}</p>
              </div>
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Risk ranking:</h3>
                <p>High</p>
              </div>
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Type:</h3>
                <p>Diagram</p>
              </div>
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Created at:</h3>
                <p>{formatDate(currentAssessment?.createdAt)}</p>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="mb-6 text-xl font-semibold">Latest Scan Details</h2>
            <div className="flex flex-col p-6 rounded-md bg-white text-sm gap-y-2">
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Resources:</h3>
                <p>{currentAssessment?.fileName}</p>
              </div>
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Requested at:</h3>
                <p>8 October 2024 at 12:23 am</p>
              </div>
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Started at:</h3>
                <p>8 October 2024 at 12:23 am</p>
              </div>
              <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)] pb-6 gap-x-2">
                <h3>Completed at:</h3>
                <p>8 October 2024 at 12:23 am</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)]">
          <div
            className={
              "p-3 rounded-t-md cursor-pointer " +
              (activeHeading === "Security Summary"
                ? "bg-black text-white"
                : "bg-white")
            }
            onClick={() => handleSetHeading("Security Summary")}
          >
            <h2>Security Summary</h2>
          </div>
          <div
            className={
              "p-3 rounded-t-md cursor-pointer " +
              (activeHeading === "Security Requirements"
                ? "bg-black text-white"
                : "bg-white")
            }
            onClick={() => handleSetHeading("Security Requirements")}
          >
            <h2>Security Requirements</h2>
          </div>
          <div
            className={
              "p-3 rounded-t-md cursor-pointer " +
              (activeHeading === "Open Questions"
                ? "bg-black text-white"
                : "bg-white")
            }
            onClick={() => handleSetHeading("Open Questions")}
          >
            <h2>Open Questions</h2>
          </div>
          <div
            className={
              "p-3 rounded-t-md cursor-pointer " +
              (activeHeading === "Assets" ? "bg-black text-white" : "bg-white")
            }
            onClick={() => handleSetHeading("Assets")}
          >
            <h2>Assets</h2>
          </div>
          <div
            className={
              "p-3 rounded-t-md cursor-pointer " +
              (activeHeading === "Complaince"
                ? "bg-black text-white"
                : "bg-white")
            }
            onClick={() => handleSetHeading("Complaince")}
          >
            <h2>Complaince</h2>
          </div>
          <div
            className={
              "p-3 rounded-t-md cursor-pointer " +
              (activeHeading === "Timeline"
                ? "bg-black text-white"
                : "bg-white")
            }
            onClick={() => handleSetHeading("Timeline")}
          >
            <h2>Timeline</h2>
          </div>
        </div>
        {activeHeading === "Open Questions" && (
          <div>
            <div className="bg-white rounded-md">
              <table className="table-auto w-full">
                <thead className="text-sm text-left bg-[#f8f9fa]">
                  <tr className=" py-2">
                    <th className="font-medium p-2 border-r-4 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)] px-4">
                      <input type="checkbox"></input>
                    </th>
                    <th className="font-medium p-2 border-r-4 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                      Type
                    </th>
                    <th className="font-medium p-2 border-r-4 border-solid border-[color-mix(in srgb, transparent, #181d1f 15%)] text-left ">
                      Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-colors-customActiveBlue hover:bg-opacity-20 text-left text-sm border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <td className="px-4">
                      <input type="checkbox"></input>
                    </td>
                    <td className="mx-2 ">Cloud Services</td>
                    <td className="mx-2 p-2">
                      Does the application implement deletion protection
                      mechanisms for the AWS RDS (MySQL) databases to prevent
                      accidental or malicious deletion, as this is not mentioned
                      in the document?
                    </td>
                  </tr>
                  <tr className="hover:bg-colors-customActiveBlue hover:bg-opacity-20 text-left text-sm border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <td className="px-4">
                      <input type="checkbox"></input>
                    </td>
                    <td className="mx-2 ">Cryptography</td>
                    <td className="mx-2 p-2">
                      Does the implementation of HTTPS for secure communication
                      between the End User and the CDN include forward secrecy,
                      specify the key sizes used, and detail the method for
                      generating encryption keys to ensure the security of the
                      encrypted data?
                    </td>
                  </tr>
                  <tr className="hover:bg-colors-customActiveBlue hover:bg-opacity-20 text-left text-sm border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <td className="px-4">
                      <input type="checkbox"></input>
                    </td>
                    <td className="mx-2 ">Infra</td>
                    <td className="mx-2 p-2">
                      What logging and monitoring capabilities are implemented
                      for the CDN, as these are not detailed in the 'Diagram
                      Structure and Components' or 'Connections and
                      Relationships' sections?
                    </td>
                  </tr>
                  <tr className="hover:bg-colors-customActiveBlue hover:bg-opacity-20 text-left text-sm border-b-[1px] border-[color-mix(in srgb, transparent, #181d1f 15%)]">
                    <td className="px-4">
                      <input type="checkbox"></input>
                    </td>
                    <td className="mx-2 ">Sensitive Data Handling</td>
                    <td className="mx-2 p-2">
                      What is the defined data retention policy for handling
                      sensitive data such as 'Credit card number' and 'Name'
                      during the checkout process, including specific data
                      retention periods and deletion methods, as this is not
                      referenced in the document?
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentId;
