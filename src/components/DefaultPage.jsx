import React from "react";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <div className="text-primary-1 text-center capitalize text-3xl">
      <span>oops! page not found</span>
      <p>
        <Link to="/" className="text-xl text-light-green underline">
          go to HomePage
        </Link>
      </p>
    </div>
  );
};

export default DefaultPage;
