import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data: quizData } = useLoaderData();
  console.log(quizData);
  return (
    <section className="flex h-screen justify-center items-center">
      <ResponsiveContainer width="60%" height={400}>
        <BarChart width={150} height={40} data={quizData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Statistics;
