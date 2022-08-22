import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAns, addQues } from "../../features/quiz/quizSlice";
import addImg from "../../image/add.svg";

const AddQuiz = () => {
  const [ques, setQues] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const quizes = useSelector((state) => state.quizReducer.quizData);

  const dispatch = useDispatch();

  const handleAddQuiz = (e) => {
    e.preventDefault();
    const newQuiz = {
      id: quizes.length + 1,
      ques: ques,
      optios: [optionOne, optionTwo, optionThree, optionFour],
    };

    dispatch(addQues(newQuiz));
    dispatch(addAns(correctAns));
  };

  return (
    <div className="add-page">
      <div class="container">
        <div className="row quiz-main">
          <div className="col-md-5">
            <form onSubmit={handleAddQuiz} className="add-quiz-form">
              <input
                type="text"
                onBlur={(e) => setQues(e.target.value)}
                placeholder="Ques title : "
              />
              <input
                type="text"
                onBlur={(e) => setOptionOne(e.target.value)}
                placeholder="Ques option 1 : "
              />
              <input
                type="text"
                onBlur={(e) => setOptionTwo(e.target.value)}
                placeholder="Ques option 2 : "
              />
              <input
                type="text"
                onBlur={(e) => setOptionThree(e.target.value)}
                placeholder="Ques option 3 : "
              />
              <input
                type="text"
                onBlur={(e) => setOptionFour(e.target.value)}
                placeholder="Ques option 4 : "
              />
              <input
                type="text"
                onBlur={(e) => setCorrectAns(e.target.value)}
                placeholder="Correct Ans : "
              />
              <input className="add-quiz-btn" type="submit" value="Add Quiz" />
            </form>
          </div>
          <div className="col-md-7">
            <img width="100%" src={addImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
