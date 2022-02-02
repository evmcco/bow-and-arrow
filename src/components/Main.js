import React, { useState } from "react";


import Bow from "./Bow"
import Target from "./Target"

export default function Main() {
  const [targetDistance, setTargetDistance] = useState((20 + (Math.random() * 80)))
  const [drawTime, setDrawTime] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [shotResult, setShotResult] = useState("")

  const checkHit = () => {
    //compares drawtime and targetdistance to see if there's a hit
    let arrowDistance = drawTime * 50
    //maximum distance is 150 ft
    if (drawTime >= 3) {
      arrowDistance = 150
    }
    if (Math.abs(arrowDistance - targetDistance).toFixed(1) < 1) {
      setShotResult(`Bullseye! 5 points`)
      setTotalPoints(totalPoints + 5)
      resetTarget()
      return
    } else if (Math.abs(arrowDistance - targetDistance) < 2) {
      setShotResult(`Hit ${Math.abs(arrowDistance - targetDistance).toFixed(1)} feet from target! 3 points`)
      setTotalPoints(totalPoints + 3)
      resetTarget()
      return
    } else if (Math.abs(arrowDistance - targetDistance) < 3) {
      setShotResult(`Hit ${Math.abs(arrowDistance - targetDistance).toFixed(1)} feet from target! 1 point`)
      setTotalPoints(totalPoints + 1)
      resetTarget()
      return
    } else {
      setShotResult(`Missed! ${Math.abs(arrowDistance - targetDistance).toFixed(1)} feet from target. Try Again`)
      return
    }
  }

  const resetTarget = () => {
    setTargetDistance(20 + (Math.random() * 80))
  }

  const mainStyle = {
    display: "flex",
    "flex-direction": "row"
  }

  const resultsStyle = {
    textAlign: "center",
    width: "100%"
  }

  return (
    <>
      <div style={mainStyle}>
        <Bow setDrawTime={setDrawTime} drawTime={drawTime} checkHit={checkHit} />
        <Target targetDistance={targetDistance} />
      </div>
      <div style={resultsStyle}>
        <div>Points: {totalPoints}</div>
        {!!shotResult ? <div className="shot-result">{shotResult}</div> : null}
      </div>
    </>
  )
}

