import React from "react";
import SingleNews from "./SingleNews";
import { useGetNewsCategoryQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";
import Error from "./Error";

const News = () => {
  const { data: result, isError, isFetching } = useGetNewsCategoryQuery(24);
  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <div>
      <h1 className="text-2xl md:text-4xl mb-4 text-center text-light-green capitalize">
        major cryptocurrency headlines
      </h1>
      <SingleNews newsList={result.value} />
    </div>
  );
};

export default News;
