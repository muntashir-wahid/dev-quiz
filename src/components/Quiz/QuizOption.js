import React, { useRef } from "react";

const QuizOption = ({ option, onSeclectOption, id }) => {
  const answerRef = useRef();
  const quizAnswerHandler = () => {
    onSeclectOption(answerRef.current.value, id);
  };

  return (
    <div>
      <input
        type="radio"
        name="options"
        value={option}
        ref={answerRef}
        onClick={quizAnswerHandler}
      />
      <label className="mb-4 p-2 mr-3">{option}</label>
    </div>
  );
};

export default QuizOption;
