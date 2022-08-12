//State
//Dispatch action
//Reducer
//Store 


//Action Type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER;

//State
const initialCountState = {
    count : 0
}

const users = [
    {name:'Anik'}
]

//Action

const incrementCounter = () =>{
    return{
        type : INCREMENT
    }
}
const decrementCounter = () =>{
    return{
        type : DECREMENT
    }
}
const addUser = () =>{
    return {
        type : ADD_USER,
        payload : {name : 'Ahmed'}
    }
}

//Reducer - is a pure function - build logic for action - used for update the state based on action 

const counterReducer = (state = initialCountState , action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count : state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count : state.count-1
            }
    
        default:
            state;
    }

}