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
        type : ADD_USER;
        payload : {name : 'Ahmed'}
    }
}