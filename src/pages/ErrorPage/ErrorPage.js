import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <section className="h-screen flex text-white justify-center items-center">
      <div className="flex flex-col justify-center space-y-5">
        <h1 className="text-4xl">
          {error.statusText || error.message}.{error.status}
        </h1>
        <button onClick={goBackHandler} className="bg-green-400 px-4 py-2">
          Go Back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
