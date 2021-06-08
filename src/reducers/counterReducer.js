const INITIAL_STATE = {
  counter: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, counter: state.counter + 1 };
    case 'SUB':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default counterReducer;