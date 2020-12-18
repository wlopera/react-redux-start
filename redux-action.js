// Import
const redux = require("redux");

const createStore = redux.createStore;

// Inicialization
const initialState = {
  counter: 0,
};

// Reducer - Action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value,
      };

    default:
      break;
  }
  return state;
};

// Store
const store = createStore(reducer);

// Subscrition
store.subscribe(() => {
  console.log("[Subscribe]: ", store.getState());
});

// Dispaching
store.dispatch({ type: "" });
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
