import React from 'react'

const Tooltip = ({ message, children }) => {
  return (
    <div className="w-full flex flex-col relative items-center justify-center group">
    {children}
    <div className="absolute left-1/2 -top-10 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100 m-3">
      <div className="flex max-w-xs flex-col items-center shadow-lg">
        <div className=""></div>
        <div className="rounded bg-gray-200 p-2 text-center text-xs text-colors-customHoverGrey border-[0.5px] border-solid border-gray-300 ">
          {message}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tooltip