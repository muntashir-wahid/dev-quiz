import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";

const Quizzes = () => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const { data: quizData } = useLoaderData();
  const { name, questions } = quizData;

  const submittedOptionHandler = (data) => {
    const { selectedOption, id } = data;
    const quiz = questions.find((el) => el.id === id);

    if (selectedOption === quiz.correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  return (
    <section className="bg-purple-200 p-10">
      <h1 className="text-4xl text-center mb-12">All {name} Quizzes</h1>
      <div>
        {questions.map((question, index) => (
          <Quiz
            key={question.id}
            quizData={question}
            questionNumber={index}
            onSubmitAnswer={submittedOptionHandler}
          />
        ))}
      </div>
    </section>
  );
};

export default Quizzes;
