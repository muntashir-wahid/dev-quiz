import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";

const Quizzes = () => {
  const { data: quizData } = useLoaderData();
  const { name, questions } = quizData;
  // console.log(questions);
  const submittedOptionHandler = (data) => {
    const { selectedOption, id } = data;
    const quiz = questions.find((el) => el.id === id);
    console.log(quiz.correctAnswer);
    console.log(selectedOption);
    if (selectedOption === quiz.correctAnswer) {
      console.log("Right answer");
    } else {
      console.log("Wrong answer");
    }
  };

  return (
    <section>
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
