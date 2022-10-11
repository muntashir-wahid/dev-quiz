import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../../components/QuizTopic/QuizTopic";

const Home = () => {
  const { data: quizTopics } = useLoaderData();

  return (
    <section className="grid grid-cols-1 p-8 gap-4">
      {quizTopics.map((quizTopic) => (
        <QuizTopic key={quizTopic.id} quizTopic={quizTopic} />
      ))}
    </section>
  );
};

export default Home;
