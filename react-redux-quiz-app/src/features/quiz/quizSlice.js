import { createSlice } from "@reduxjs/toolkit";

const quizState = {
    quizData : [

        {   "id":1,
            
            "ques": "Which of the following keywords is used to define a variable in Javascript?",
            "options" : ['var','let','Both A and B', 'None of the above']
        },
        {
            "id":2,
            "ques": "Inside what HTML tag you would put JavaScript code?",
            "options" : ['js','scripting','script', 'javascript']
        },
        {
            "id":3,
            "ques": "When we don’t assign a value to a variable it will be?",
            "options" : ['null','undefined',' NaN', '""']
        },
        {
            "id":4,
            "ques": "Which built-in method returns the length of the string?",
            "options" : ['length','size',' index', 'None of the above']
        },
      
        {
            "id":5,
            "ques": "To add an element to the end of an array you use:",
            "options" : ['pop()','add()','push()','shift()']
        }
    
    ],
    answer : ["Both A and B","script","undefined","length","push()"],
    selectedAnswer:[],
    result:[]


}



const quizSlice = createSlice({
    name:'quiz',
    initialState:quizState,
    reducers:{
        getQuizData:(state)=> state,
        getSelectedAns:(state,action)=>{
            state.selectedAnswer.push(action.payload);
        },
        getResult : (state)=>{
           state.result = state.answer.filter(element => state.selectedAnswer.includes(element));
        }
    }

})



export const {getQuizData,getSelectedAns,getResult} = quizSlice.actions

export default quizSlice.reducer
