import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quizzes = () => {
  // const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const notify = (isCorrect) =>
    toast(isCorrect ? "Correct answer" : "Wrong Answer");

  const notifyCorrectAnswer = (correctAnswer) => toast(correctAnswer);
  const { data: quizData } = useLoaderData();
  const { name, questions } = quizData;

  const submittedOptionHandler = (data) => {
    const { selectedOption, id } = data;
    const quiz = questions.find((el) => el.id === id);

    if (selectedOption === quiz.correctAnswer) {
      notify(true);
    } else {
      notify(false);
    }
  };

  const displayCorrectAnsweHander = (correctAnswer) => {
    notifyCorrectAnswer(correctAnswer);
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
            onDisplayCorrectAnswer={displayCorrectAnsweHander}
          />
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Quizzes;
