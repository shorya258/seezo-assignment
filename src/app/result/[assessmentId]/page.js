"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import LeftPanelMenu from '@/app/Components/LeftPanelMenu';
const AssessmentId = () => {
  const params= useParams();
  const{assessmentId}=params;
  const getAssessmentResults=()=>{

  }
  return (
    <div  className="h-screen w-full" >
      <LeftPanelMenu/>
    </div>
  )
}

export default AssessmentId