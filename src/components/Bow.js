import React, { useState, useEffect } from "react";
import lurtz from "../images/lurtz.jpg"

export default function Bow(props) {
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    if (!!isDrawing) {
      const interval = setInterval(() => {
        props.setDrawTime(time => time + .01);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isDrawing]);

  const drawBow = () => {
    setIsDrawing(true)
  }

  const looseBow = () => {
    setIsDrawing(false)
    props.checkHit()
    props.setDrawTime(0)
  }

  const bowStyle = {
    height: "200px",
    padding: "25px",
    width: "50%"
  }

  const bowIconStyle = {
    fontSize: "75px",
    height: "200px",
  }

  return (
    <div style={bowStyle}>
      <div>
        <img src={lurtz} style={bowIconStyle} />
      </div>
      {!isDrawing ?
        <button onClick={drawBow}>
          Draw
        </button> :
        <>
          <button onClick={looseBow}>
            Loose
        </button>
        </>
      }
      <div>Draw Time: {props.drawTime.toFixed(2)}</div>
    </div>
  )
}

