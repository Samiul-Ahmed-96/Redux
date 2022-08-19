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
            "ques": "var x = 3 + 4 + '7'",
            "options" : ['14','"77"','"347"', '77']
        },
        {
            "id":5,
            "ques": "To add an element to the end of an array you use:",
            "options" : ['pop()','add()','push()', 'shift()']
        }
    
    ],
    answer : ["Both A and B","script","undefined","'77'","push()"],
    quizAnswer : []

}



const quizSlice = createSlice({
    name:'quiz',
    initialState:quizState,
    reducers:{
        getQuizData:(state)=> state,
    }

})



export const {getQuizData,getQuizAns} = quizSlice.actions

export default quizSlice.reducer
