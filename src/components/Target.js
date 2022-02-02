import React, { useState, useEffect } from "react";
import boromir from "../images/boromir.jpg"


export default function Target(props) {
  const targetIconStyle = {
    fontSize: "75px",
    height: "200px",
    textAlign: "right",
  }

  const targetStyle = {
    height: "500",
    textAlign: "right",
    padding: "25px",
    width: "50%"
  }

  return (
    <div style={targetStyle}>
      <div>
        <img src={boromir} style={targetIconStyle} />
      </div>
      <div>
        Target at {props.targetDistance.toFixed(0)} feet
    </div>
    </div>
  )
}

