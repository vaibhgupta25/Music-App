import React from 'react'

export default function TextWithHover({textDisplay,active}) {
  return (
    <div className={`hover:text-white hover:cursor-pointer ${!active?"text-gray-500":"text-white"} flex justify-center items-center`} >
        <div className="font-semibold">{textDisplay}</div>
    </div>
  )
}
