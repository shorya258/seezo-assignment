"use client"
import React, {useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
import LeftPanelMenu from '@/app/Components/LeftPanelMenu';
const AssessmentId = () => {
  const params= useParams();
  const{assessmentId}=params;
  const[menuBtnClicked, toggleMenuBtnClicked]= useState(false)
  const showExpandedMenu=()=>{
    toggleMenuBtnClicked(!menuBtnClicked)
  }
  const getAssessmentResults=async()=>{
    const response = await fetch("/api/getAssessmentResults", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: assessmentId,
      }),
    });
    const json = await response.json();
    console.log(json)
  }
  useEffect(() => {
    getAssessmentResults();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div  className="h-screen w-full" >
      <LeftPanelMenu showExpandedMenu={showExpandedMenu}  />
      <div></div>
    </div>
  )
}

export default AssessmentId