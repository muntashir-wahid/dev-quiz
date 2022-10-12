import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

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
        <button
          onClick={goBackHandler}
          className="bg-purple-500 px-4 py-2 hover:bg-purple-600"
        >
          <FontAwesomeIcon icon={faLeftLong} />
          <span className="ml-2">Go Back</span>
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
