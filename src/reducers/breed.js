export default function breedReducer(state = "Puddle", action) {
  // return Object.assign({}, state, {animal: action.payload});
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
