import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <p className="text-4xl">Dev Quiz</p>
      </div>
      <ul className="flex">
        <li className="ml-5">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="ml-5">
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
        <li className="ml-5">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
