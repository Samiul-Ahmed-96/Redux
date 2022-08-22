import React from "react";
import resultImg from '../../image/answer.svg';

const Result = ({result,quizes}) => {
  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">       
          <div class="modal-body">
            <img src={resultImg} alt="" />
            <h3>Your Score : {result.length} / {quizes.length} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
