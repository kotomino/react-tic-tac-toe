import './App.css';
import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {

  constructor() {
    super();
    this.state = {
      player_turn: "X",
      board: ["", "", "", "", "", "", "", "", ""]
    }

    this.squareClicked = this.squareClicked.bind(this);
  }

  squareClicked(index) {
  
    let playerTurn = this.state.player_turn;
    let board = this.state.board;
    
    board[index] = playerTurn;
    
    if (playerTurn === "X") {
      this.setState({
        player_turn: "O",
        board: board
      })
    } else {
      this.setState({
        player_turn: "X",
        board: board
      })
    }

    this.checkForWinner();

  }

  checkForWinner() {
    let playerTurn = this.state.player_turn;
    let board = this.state.board;

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i = 0; i < winningCombos.length; i++) {
      let winCombo = winningCombos[i];
      let v1 = winCombo[0];
      let v2 = winCombo[1];
      let v3 = winCombo[2];

      if (board[v1] !== "" && board[v1] === board[v2] && board[v2] === board[v3]) {
        alert(`Winner ${playerTurn} wins the game!`);
      }

    }

    //check for a tie
    if(board.every(num => num !== "")) {
      alert("This game is a tie!")
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board board={this.state.board} squareClicked={this.squareClicked} />
      </div>
    )
  }
  
}

export default App;
