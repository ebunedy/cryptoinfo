import React from "react";
import millify from "millify";
import SingleCryptoCurrency from "./SingleCryptoCurrency";
import SingleNews from "./SingleNews";
import { useGetCoinsQuery } from "../services/cryptoApi";
import { useGetNewsCategoryQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";
import Error from "./Error";

const HomePage = () => {
  const { data, isFetching, isError } = useGetCoinsQuery(10);
  const { data: result } = useGetNewsCategoryQuery(10);
  const results = data?.data;
  const stats = results?.stats;
  const coins = results?.coins;

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between gap-x">
        <div className="w-full md:w-96 md:mt-24 text-primary-2">
          <h1 className="text-4xl md:text-5xl text-primary-1">
            Fastest & secure platform to get information about crypto
          </h1>
          <p className="text-sm mt-4">
            Make your cryptocurrency investment decision based on our
            information. Trusted by over 100k customers with over $10 million in
            investment made.
          </p>
        </div>
        <div>
          <img src="images/illustration.png" alt="" className=" md:w-96 md:h-96" />
        </div>
      </div>
      <div className="text-primary-2 capitalize border-b-2 pb-2">
        <h1 className="text-3xl text-primary-1">global cryptocurrency stats</h1>
        <div className="flex flex-wrap justify-between ">
          <p className="mt-4">total Coins: {millify(stats?.total)}</p>
          <p className="mt-4">
            24Hour Volume: {millify(stats?.total24hVolume)}
          </p>
          <p className="mt-4">
            total Exchanges: {millify(stats?.totalExchanges)}
          </p>
          <p className="mt-4">
            total MarketCap: {millify(stats?.totalMarketCap)}
          </p>
          <p className="mt-4">total Markets: {millify(stats?.totalMarkets)}</p>
        </div>
      </div>
      <div className="text-primary-2 mt-4">
        <h1 className="text-2xl capitalize md:text-3xl text-light-green">
          top ten cryptocurrency
        </h1>
        <SingleCryptoCurrency coinList={coins} />
      </div>
      <div className="text-primary-2 mt-4">
        <h1 className="text-2xl md:text-3xl capitalize text-light-green mb-2">
          top ten cryptocurrency headlines
        </h1>
        <SingleNews newsList={result?.value} />
      </div>
    </section>
  );
};

export default HomePage;
