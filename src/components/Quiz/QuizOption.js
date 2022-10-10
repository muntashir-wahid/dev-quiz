import React, { useRef } from "react";

const QuizOption = ({ option, onSeclectOption, id }) => {
  const answerRef = useRef();
  const quizAnswerHandler = () => {
    onSeclectOption(answerRef.current.innerText, id);
  };

  return (
    <li className="bg-amber-300 mb-4 p-2">
      <button ref={answerRef} onClick={quizAnswerHandler}>
        {option}
      </button>
    </li>
  );
};

export default QuizOption;
