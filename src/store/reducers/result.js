import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };

    case actionTypes.DELETE_RESULT:
      // const updateArray = [...state.results];
      // updateArray.slice(action.resultElId, 1)
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.resultElId),
      };

    default:
      return state;
  }
};

export default reducer;
