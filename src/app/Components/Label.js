import Image from 'next/image'
import React from 'react'

const Label = ({imgSrc,altTxt, labelTitle, expandLeftPanel}) => {
  return (
    <div className={`hover:bg-colors-customHoverGrey flex items-center justify-start gap-2 py-2 rounded-md ${labelTitle==="Assessments"?"bg-colors-customHoverGrey":"inherit"} ${expandLeftPanel?"":"self-start"}`}>
        <Image
          src={imgSrc}
          alt={altTxt}
          width={20}
          height={20}
          className="opacity-40 m-[3px]"
        />
        <span className={`whitespace-nowrap leading-none ${expandLeftPanel?"inline":"hidden"}`}>{labelTitle}</span>
      </div>
  )
}

export default Label