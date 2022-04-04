import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import LineChart from "./LineChart";
import millify from "millify";
import { useGetCoinHistoryQuery } from "../services/cryptoApi";
import { useGetCoinDetailsQuery } from "../services/cryptoApi";
import {
  AiOutlineDollar,
  AiOutlineMoneyCollect,
  AiOutlineFund,
  AiOutlineExclamation,
  AiOutlineNumber,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
} from "react-icons/ai";

const CryptoDetailsPage = () => {
  const { coinId } = useParams();
  const [timeperoid, setTimeperoid] = useState("24h");
  const { data, isFetching } = useGetCoinDetailsQuery(coinId);
  const coinDetails = data?.data?.coin;
  const { data: coinHistory } = useGetCoinHistoryQuery(coinId, timeperoid);

  const cryptoHistoryTime = ["24h", "3d"];

  console.log(timeperoid);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`,
      icon: <AiOutlineDollar className="w-6 h-6" />,
    },
    {
      title: "Rank",
      value: coinDetails?.rank,
      icon: <AiOutlineNumber className="w-6 h-6" />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        coinDetails?.["24hVolume"] && millify(coinDetails?.["24hVolume"])
      }`,
      icon: <AiOutlineThunderbolt className="w-6 h-6" />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`,
      icon: <AiOutlineDollar className="w-6 h-6" />,
    },
    {
      title: "All-time-high",
      value: `$ ${
        coinDetails?.allTimeHigh?.price &&
        millify(coinDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy className="w-6 h-6" />,
    },
    {
      title: "Markets",
      value: coinDetails?.numberOfMarkets,
      icon: <AiOutlineFund className="w-6 h-6" />,
    },
    {
      title: "Exchanges",
      value: coinDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect className="w-6 h-6" />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        coinDetails?.supply?.total && millify(coinDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamation className="w-6 h-6" />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinDetails?.supply?.circulating &&
        millify(coinDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamation className="w-6 h-6" />,
    },
  ];

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (coinHistory === undefined) {
    return <div>error</div>;
  }

  return (
    <div className="text-primary-2">
      <div>
        <h1 className=" text-2xl md:text-3xl text-light-green capitalize">
          {coinDetails?.name} ({coinDetails?.symbol}) Price
        </h1>
        <p>
          {coinDetails?.name} live price in US Dollar (USD). View value,
          statistics, market cap and supply.
        </p>
      </div>
      <select
        name="crypto-timeperoid"
        id="crypto-timeperoid"
        className="text-dark-blue w-60 h-8 rounded-md outline-none px-2 mt-4"
        onChange={(e) => setTimeperoid(e.target.value)}
      >
        {cryptoHistoryTime.map((item, index) => {
          return (
            <option
              value={item}
              key={index + item}
              className="hover:bg-primary-1"
            >
              {item}
            </option>
          );
        })}
      </select>
      <div className="bg-primary-1 text-dark-blue p-1 mt-4 rounded-md">
        <LineChart
          coinHistory={coinHistory?.data?.history}
          currentPrice={coinDetails?.price}
          coinName={coinDetails?.name}
          change={coinDetails?.change}
        />
      </div>
      <h1 className="text-xl md:text-3xl text-light-green capitalize mt-2">
        {coinDetails.name} Value Statistics
      </h1>
      <p className="mb-4">
        An overview showing the statistics of {coinDetails.name}, such as the
        base and quote currency, the rank, and trade volume.
      </p>
      {stats.map(({ icon, title, value }, index) => (
        <div className="grid grid-cols-3" key={index + title}>
          <span className="text-light-green mb-2 ">{icon}</span>
          <span className="mb-2  ">{title}</span>
          <span className="text-light-green mb-2 justify-self-end md:justify-self-start">
            {value}
          </span>
        </div>
      ))}
      <div>
        <div>
          <h2 className="text-light-green text-2xl">
            What is {coinDetails.name}?
          </h2>
          {HTMLReactParser(coinDetails.description)}
        </div>
        <div>
          <h2 className="text-light-green text-2xl">
            {coinDetails.name} Links
          </h2>
          {coinDetails.links?.map((link, index) => (
            <div className="grid grid-cols-2" key={index + link.name}>
              <h2 className="text-primary-1">{link.type}</h2>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className=" underline"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetailsPage;
