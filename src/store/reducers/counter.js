import * as actionTypes from "../actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newStateInc = Object.assign({}, state);
      newStateInc.counter = state.counter + 1;
      return newStateInc;
    case actionTypes.DECREMENT:
      const newStateDec = Object.assign({}, state);
      newStateDec.counter = state.counter - 1;
      return newStateDec;
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };

    default:
      return state;
  }
};

export default reducer;
