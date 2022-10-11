import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../../components/QuizTopic/QuizTopic";

const Home = () => {
  const { data: quizTopics } = useLoaderData();

  return (
    <section className="grid grid-cols-1 gap-4">
      <header
        // className="h-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></header>
      {quizTopics.map((quizTopic) => (
        <QuizTopic key={quizTopic.id} quizTopic={quizTopic} />
      ))}
    </section>
  );
};

export default Home;
