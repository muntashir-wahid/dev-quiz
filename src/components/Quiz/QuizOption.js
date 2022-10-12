import React, { useRef } from "react";

const QuizOption = ({ option, onSeclectOption, id, index }) => {
  const answerRef = useRef();
  const quizAnswerHandler = () => {
    onSeclectOption(answerRef.current.value, id);
    // console.dir(answerRef.current.checked);
  };

  return (
    <div>
      <input
        type="radio"
        name="options"
        value={option}
        ref={answerRef}
        onClick={quizAnswerHandler}
        id={`${id + index}`}
      />
      <label htmlFor={`${id + index}`} className="inline-block mb-1 p-2 ">
        {option}
      </label>
    </div>
  );
};

export default QuizOption;
