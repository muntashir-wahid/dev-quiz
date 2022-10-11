import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import QuizOption from "./QuizOption";

const Quiz = ({
  quizData,
  questionNumber,
  onSubmitAnswer,
  onDisplayCorrectAnswer,
}) => {
  const { id, options, question, correctAnswer } = quizData;

  const selectOptionHandler = (selectedOption, id) => {
    const data = { selectedOption, id };
    onSubmitAnswer(data);
  };

  const displayCorrectAnswerHandler = () => {
    onDisplayCorrectAnswer(correctAnswer);
  };

  return (
    <article className="relative mb-6">
      <h3 className="text-2xl mb-3 pl-4 pr-8">
        {questionNumber + 1}.{question.slice(3, -4)}
      </h3>
      <form className="px-6">
        {options.map((option, i) => (
          <QuizOption
            key={i}
            option={option}
            id={id}
            index={i}
            onSeclectOption={selectOptionHandler}
          />
        ))}
      </form>
      <button
        className="absolute right-0 top-0"
        onClick={displayCorrectAnswerHandler}
        title="View the right answer"
      >
        <FontAwesomeIcon icon={faEye} />
      </button>
    </article>
  );
};

export default Quiz;
