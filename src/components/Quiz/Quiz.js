import React from "react";
import QuizOption from "./QuizOption";

const Quiz = ({ quizData, questionNumber, onSubmitAnswer }) => {
  const { id, correctAnswer, options, question } = quizData;
  const selectOptionHandler = (selectedOption, id) => {
    const data = { selectedOption, id };
    onSubmitAnswer(data);
  };

  return (
    <article>
      <h3>
        {questionNumber + 1}
        {question}
        <ol className="list-decimal">
          {options.map((option, i) => (
            <QuizOption
              key={i}
              option={option}
              id={id}
              onSeclectOption={selectOptionHandler}
            />
          ))}
        </ol>
      </h3>
    </article>
  );
};

export default Quiz;
