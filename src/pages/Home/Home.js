import React, { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../../components/QuizTopic/QuizTopic";

const Home = () => {
  const { data: quizTopics } = useLoaderData();

  const headerStyles = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    marginBottom: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fragment>
      <header style={headerStyles}>
        <h1 className="text-center p-4 text-4xl text-white">
          Let's practice some quizzes and test your knowledge
        </h1>
      </header>
      <section className="grid grid-cols-1 gap-4 px-10 pt-4 pb-8">
        {quizTopics.map((quizTopic) => (
          <QuizTopic key={quizTopic.id} quizTopic={quizTopic} />
        ))}
      </section>
    </Fragment>
  );
};

export default Home;
