import { h } from "preact";
import { useEffect, useReducer } from "preact/hooks";

const initialState = 1;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "theme":
      return 8;

    default:
      throw new Error("Unexpected action");
  }
};

function Reducer() {
  // Returns the current state and a dispatch function to
  // trigger an action
  const [count, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch("theme");
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>+1</button>
      <button onClick={() => dispatch("decrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <div>open_nutifood</div>
    </div>
  );
}

export default Reducer;
