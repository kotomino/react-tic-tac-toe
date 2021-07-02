const initialState = {
  xPoints: 0,
  oPoints: 0,
  loading: true
}

const pointsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "SET_POINTS":
      console.log("set points reducer", action)
      return {
        ...state,
        loading: false,
        xPoints: action.points[0].xpoints,
        oPoints: action.points[0].opoints
      }
    case "ADD_POINTS":
      console.log("add points reducer", action)
      return {
        ...state,
        xPoints: action.scoreboard.xpoints,
        oPoints: action.scoreboard.opoints
      }
    default:
      return state;
  }
}

export default pointsReducer;