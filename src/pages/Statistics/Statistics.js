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
  return (
    <section className="flex h-screen justify-center items-center px-2">
      <ResponsiveContainer height={400} width="80%">
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
