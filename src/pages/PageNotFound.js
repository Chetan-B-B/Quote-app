import React from "react";
import { Link } from "react-router-dom";
import pageNotFoundImage from "../images/Free-404-Error-Page.jpg";

const PageNotFound = () => {
  return (
    <div>
      <img src={pageNotFoundImage} alt="image" />
      <Link to={"/quotes"} className={"centered btn"}>
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
