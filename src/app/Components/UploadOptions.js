import React from 'react'

const UploadOptions = ({handleShowUploadFileOption}) => {
  return (
    <div className="w-full h-full" >
    <div className="w-full text-left">Choose Assessment Type:</div>
    <div className="w-full flex flex-col md:flex-row lg:flex-row flex-wrap gap-4 h-[80%]  md:justify-center lg:justify-center">
      <button className="w-[45%] border-dotted border-2 border-colors-customGrey rounded-md hover:border-blue-700 " onClick={handleShowUploadFileOption} >
        File upload
      </button>
      <button className="w-[45%] border-dotted border-2 border-colors-customGrey rounded-md hover:border-blue-700 ">
        GSuite
      </button>
      <button className="w-[45%] border-dotted border-2 border-colors-customGrey rounded-md hover:border-blue-700 ">
        Diagram
      </button>
      <button className="w-[45%] border-dotted border-2 border-colors-customGrey rounded-md hover:border-blue-700 ">
        JIRA
      </button>
    </div>
  </div>
  )
}

export default UploadOptions