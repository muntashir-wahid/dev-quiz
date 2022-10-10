import React from "react";
import { useNavigate } from "react-router-dom";

const QuizTopic = ({ quizTopic }) => {
  const navigate = useNavigate();
  const { id, logo: imgSrc, name, total } = quizTopic;

  const showQuizesHandler = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <article className="bg-slate-400 p-3 rounded-xl">
      <img src={imgSrc} alt={`${name}`} className="w-full mb-4" />
      <div className="space-y-1.5 ">
        <h3 className="text-2xl">{name} Quizes</h3>
        <p>You have {total} quizes</p>
        <button onClick={showQuizesHandler} className="bg-green-600 px-5 py-3">
          Start Quize
        </button>
      </div>
    </article>
  );
};

export default QuizTopic;
