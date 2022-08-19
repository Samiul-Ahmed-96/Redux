import React, { useState } from 'react';
import { useSelector } from "react-redux";
const QuizView = () => {
const quizes = useSelector(state=> state.quizReducer)
const [currentPage,setCurrentPage] = useState(1);
const [quizPerPage,setquizPerPage] = useState(1);

const lastQuizIndex = currentPage * quizPerPage;
const firstQuizIndex = lastQuizIndex-quizPerPage;
const currentQuizData = quizes.slice(firstQuizIndex,lastQuizIndex);

  return (
    <div>
        <h2>Quiz</h2>
        <div className="container">
            {
              currentQuizData && currentQuizData.map(singleQuiz => <div className='quiz-item' key={singleQuiz.id} >
                <div className="question">
                    <h3>{singleQuiz.ques}</h3>
                </div>
                <div className="options">
                    {
                        singleQuiz.options.map(option => <div>{option}</div>)
                    }
                </div>
                </div> )
            }
        </div>
    </div>
  )
}

export default QuizView