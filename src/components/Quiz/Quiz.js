import React from "react";
import QuizOption from "./QuizOption";

const Quiz = ({ quizData, questionNumber, onSubmitAnswer }) => {
  const { id, options, question } = quizData;

  const selectOptionHandler = (selectedOption, id) => {
    const data = { selectedOption, id };
    onSubmitAnswer(data);
  };

  return (
    <article>
      <h3 className="text-2xl mb-3">
        {questionNumber + 1}.{question.slice(3, -4)}
      </h3>
      <form>
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
    </article>
  );
};

export default Quiz;
