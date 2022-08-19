import React, { useState } from "react";
import { useSelector } from "react-redux";
import quizImg from "../../image/ques.svg";

const QuizView = () => {
  const quizes = useSelector((state) => state.quizReducer.quizData);
  const answerData = useSelector((state) => state.quizReducer.answer);
  const [currentPage, setCurrentPage] = useState(1);
  const [quizPerPage, setquizPerPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [answerSelect, setAnswerSelect] = useState([]);
  let result = 0;

  const lastQuizIndex = currentPage * quizPerPage;
  const firstQuizIndex = lastQuizIndex - quizPerPage;
  const currentQuizData = quizes.slice(firstQuizIndex, lastQuizIndex);

  const handleNext = () => {
    if (currentPage < quizes.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const answerHandler = (item) => {
    answerSelect.push(item);
    console.log(answerSelect);
  };

  const resultCheck = () => {
    for (var i = 0; i < answerData.length; i++) {
      if (answerData[i] == answerSelect[i]) {
        result = result + 1;
      }
    }
    console.log(result)
  };

  return (
    <div className="quiz-main">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img className="w-100" src={quizImg} alt="" />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="count-ques">
              <div className="n-of-ques">
                <h2>
                  {currentPage} / <span>{quizes.length}</span>
                </h2>
              </div>
            </div>
            {currentQuizData &&
              currentQuizData.map((singleQuiz) => (
                <div className="quiz-item" key={singleQuiz.id}>
                  <div className="question">
                    <h3>{singleQuiz.ques}</h3>
                  </div>
                  <div className="options">
                    {singleQuiz.options.map((option) => (
                      <div
                        onClick={() => {
                          setSelectedOption(option);
                          answerHandler(option);
                        }}
                        className={
                          selectedOption === option ? "active-option" : "option"
                        }
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                  <div className="d-flex">
                    <div className="navigate">
                      <button
                        className="common-btn"
                        onClick={() => handlePrev()}
                      >
                        Prev
                      </button>
                      <button
                        className="common-btn"
                        onClick={() => handleNext()}
                      >
                        Next
                      </button>
                    </div>
                    <div className="submit">
                      {currentPage === quizes.length && (
                        <button
                          onClick={() => resultCheck()}
                          className="common-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
