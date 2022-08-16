// //State
// //Dispatch action
// //Reducer
// //Store

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// //Action type
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// //Action with payload
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
// const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";
// const ADD_USER = "ADD_USER";
// // const ADD_USER = "ADD_USER;

// //State
// const initialState = {
//   count: 0,
//   user: ["Anik"],
// };

// //Action  is a object (type , payload)

// const incrementCounter = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// const resetCounter = () => {
//   return {
//     type: RESET,
//   };
// };
// //Action with payload
// const incrementByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };
// const decrementByValue = (value) => {
//   return {
//     type: DECREMENT_BY_VALUE,
//     payload: value,
//   };
// };

// const addUser = (value) => {
//   return {
//     type: ADD_USER,
//     payload: value,
//   };
// };

// //Reducer - is a pure function - build logic for action - used for update the state based on action

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };

//     case RESET:
//       return {
//         ...state,
//         count: (state.count = 0),
//       };
//     //case with payload
//     case INCREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     //case with payload
//     case DECREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };

//     case ADD_USER:
//       return {
//         ...state,
//         user: [...state.user, action.payload]
//       };
//     default:
//       state;
//   }
// };

// //Store
// //important 3 important method
// // getState()
// // dispatch()
// // subscribe()

// //Store
// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// //Dispatch
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementByValue(10));
// store.dispatch(decrementByValue(5));
// store.dispatch(addUser("Sakib"));
// store.dispatch(addUser("Rakib"));

//State
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};
//Constant Action
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
//Action
const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const getTodoFailed = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};
const getTodoSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};
//Reducer
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case GET_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        payload: action.payload,
      };
    default:
      break;
  }
};

//Async function

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const todos = res.data;
        const titles = todos.map(todo => todo.title)
        dispatch(getTodoSuccess(titles))
      })
      .catch((err) =>{
        dispatch(getTodoFailed(err))
      });
  };
};

//Store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

//Dispatch  fetch data function
store.dispatch(fetchData())