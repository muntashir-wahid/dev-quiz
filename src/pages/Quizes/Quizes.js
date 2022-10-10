import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizes = () => {
  const quizesData = useLoaderData();
  console.log(quizesData);
  return (
    <div>
      <h1>This is quizes page</h1>
    </div>
  );
};

export default Quizes;
