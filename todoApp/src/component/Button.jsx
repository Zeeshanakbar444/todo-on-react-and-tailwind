import React from 'react'

const Button = (props) => {
    let { title, customCOl, funHeandler } = props
    return (
        <>
            <button className={`border bg-yellow-500 mx-3 text-white font-bold 
  border-gray-950	
   px-3 py-1 w-24
   transition-all	
   hover:bg-cyan-600
     hover:rounded-lg ${customCOl}`} onClick={funHeandler}>{title || "button"} </button >
        </>
    )
}

export default Button
