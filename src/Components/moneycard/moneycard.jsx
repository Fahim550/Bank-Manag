import React from 'react'

export default function moneycard({title,moneyprops,dynamiclass}) {
  return (
    <div className={`card col-md-3 justify-content-center ${dynamiclass}`} style={{height:"200px"}}>
        
        <h3>{title}</h3>
        <h1>{moneyprops}</h1>

        
    </div>
  )
}
