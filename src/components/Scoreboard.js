import React from 'react'

const Scoreboard = ({playerTurn, xPoints, oPoints})=> {

  console.log(xPoints);
  console.log(oPoints);

  return (
    <div className="scoreboard">
      <h2>Game Play</h2>
      <p>Currently player {playerTurn}'s turn</p>
      <div className="scoreContainer">
        <div className="score">
          <p>-Player X Points-</p>
          <h1>{xPoints}</h1>
        </div>
        <div className="score">
          <p>-Player O Points-</p>
          <h1>{oPoints}</h1>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
