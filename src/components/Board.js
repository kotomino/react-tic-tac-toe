import React from 'react'
import Square from './Square';

const Board = ({board, squareClicked}) => {
  
  const game = board.map((value, index) => <Square value={value} squareClicked={squareClicked} index={index}/>)

  return (
    <div className="board">
      {game}
    </div>
  )
}

export default Board
