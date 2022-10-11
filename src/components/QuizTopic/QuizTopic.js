import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const QuizTopic = ({ quizTopic }) => {
  const navigate = useNavigate();
  const { id, logo: imgSrc, name, total } = quizTopic;

  const showQuizesHandler = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <article className="bg-purple-200 p-3 rounded-xl flex gap-10">
      <img src={imgSrc} alt={`${name}`} className="max-h-28 rounded-xl" />
      <div className="space-y-1.5 ">
        <h3 className="text-2xl">{name} Quizzes</h3>
        <p>You have {total} quizes</p>
        <button onClick={showQuizesHandler} className="bg-purple-500 px-5 py-3">
          <span className="mr-2">Start Quiz</span>
          <FontAwesomeIcon icon={faRightLong} />
        </button>
      </div>
    </article>
  );
};

export default QuizTopic;
