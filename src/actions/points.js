export const getPoints = () => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/scoreboards")
      .then(resp => resp.json())
      .then(points => dispatch({type: "SET_POINTS", points}))
  }
}

export const addPoints = (scoreboard) => {
  console.log("state in action", scoreboard);
  return dispatch => {
    fetch("http://localhost:3001/scoreboards", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ scoreboard })
    })
    .then(resp => resp.json())
    .then(scoreboard => {
      console.log("fetched points in action", scoreboard);
      dispatch({ type: "ADD_POINTS", scoreboard })
    })
  }
}
  

export const deletePoints = () => {

}