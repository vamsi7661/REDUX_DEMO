import { INCRIMENT, DECRIMENT } from "./CounterActionTypes";
const initalState = {
  counter: 0,
};
const CounterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCRIMENT:return {
        counter: state.counter + 1,
      };

    case DECRIMENT:return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
export default CounterReducer;
