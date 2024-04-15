import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  document.title = "Page Not Found";

  return (
    <>
      <div className=" card ">
        <Link to="/">
          <img
            src="/img/404-error-with-people.svg"
            alt="404 error"
            className=" img-fluid "
          />
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
