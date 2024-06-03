import React from "react"
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <h5>
          <i>{error.statusText}</i>
        </h5>
        <h5><Link to="/">Go back to safety.</Link></h5>
      </div>
    </div>
  );
};

export default ErrorPage;