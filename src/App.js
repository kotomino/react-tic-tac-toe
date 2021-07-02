import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPoints, addPoints } from './actions/points';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';

class App extends Component {

  constructor() {
    super();
    this.state = {
      player_turn: "X",
      board: ["", "", "", "", "", "", "", "", ""]
    }

    this.squareClicked = this.squareClicked.bind(this);
  }

  componentDidMount() {
    this.props.getPoints();

    console.log("x", this.props.xPoints);
    console.log("o", this.props.oPoints);
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

        console.log("end game x", this.props.xPoints);
        console.log("end game o", this.props.oPoints);

        if (playerTurn === "X") {
          const state = {
            xpoints: this.props.xPoints + 1,
            opoints: this.props.oPoints
          }

          console.log("points", state);

          this.props.addPoints(state);
        } else {
          const state = {
            xpoints: this.props.xPoints,
            opoints: this.props.oPoints + 1
          }

          this.props.addPoints(state);
        }

        console.log("end game x", this.props.xPoints);
        console.log("end game o", this.props.oPoints);
        
        //reset board
        this.setState({
          board: ["", "", "", "", "", "", "", "", ""]
        })
        
      }

    }

    //check for a tie
    if(board.every(num => num !== "")) {
      alert("This game is a tie!")
    }
  }

  render() {

    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <div className="App">
        <h1 className="title">Tic Tac Toe</h1>
        <Board board={this.state.board} squareClicked={this.squareClicked} />
        <Scoreboard playerTurn={this.state.player_turn} xPoints={this.props.xPoints} oPoints={this.props.oPoints} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    xPoints: state.xPoints,
    oPoints: state.oPoints
  }
}

export default connect(mapStateToProps, {getPoints, addPoints})(App);
