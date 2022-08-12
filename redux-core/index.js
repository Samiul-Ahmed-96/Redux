//State
//Dispatch action
//Reducer
//Store

const { createStore } = require("redux");

//Action type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
//Action with payload
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";
// const ADD_USER = "ADD_USER;

//State
const initialCountState = {
  count: 0,
};

const users = [{ name: "Anik" }];

//Action  is a object (type , payload)

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};
//Action with payload
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const decrementByValue = (value) => {
  return {
    type: DECREMENT_BY_VALUE,
    payload: value,
  };
};

//Reducer - is a pure function - build logic for action - used for update the state based on action

const counterReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: (state.count = 0),
      };
    //case with payload
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    //case with payload
    case DECREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      state;
  }
};

//Store
//important 3 important method
// getState()
// dispatch()
// subscribe()

//Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//Dispatch
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementByValue(10));
store.dispatch(decrementByValue(5));
