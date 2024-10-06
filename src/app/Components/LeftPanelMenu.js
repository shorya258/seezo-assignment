import React from 'react'

const LeftPanelMenu = () => {
  return (
    <div className="bg-colors-customGrey w-[40%] md:w-[25%] lg:w-[15%] p-3 text-2xl flex flex-col gap-3 ">
        <div className="hover:bg-colors-customHoverGrey ">Seezo</div>
        <div className="hover:bg-colors-customHoverGrey ">Watch Tutorial </div>
        <div className="hover:bg-colors-customHoverGrey ">Dashboard</div>
        <div className="bg-colors-customHoverGrey ">Assessments</div>
        <div className="hover:bg-colors-customHoverGrey ">Diagrams</div>
        <div className="hover:bg-colors-customHoverGrey ">
          Security Requirements
        </div>
        <div className="hover:bg-colors-customHoverGrey ">Config</div>
      </div>
  )
}

export default LeftPanelMenu