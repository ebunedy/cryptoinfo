import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const SingleCryptoCurrency = ({ coinList }) => {
  return (
    <div className="flex  flex-col md:flex-row flex-wrap justify-between md:justify-evenly items-center text-primary-2">
      {coinList?.map((coins) => {
        const { uuid, name, symbol, change, iconUrl, price, marketCap } = coins;
        return (
          <Link to={`coin/${uuid}`} key={uuid}>
            <div className="w-[21.5rem] md:w-96 bg-primary-3 rounded-md px-4 py-2 shadow-lg bg-opacity-20 mt-4">
              <div className="flex justify-between capitalize">
                <span>{name}</span>
                <span>{symbol}</span>
                <span
                  className={`${
                    change.toString()[0] === "-"
                      ? "text-light-red"
                      : "text-light-green"
                  } `}
                >
                  {Number(change).toFixed(2)}
                </span>
                <img src={iconUrl} alt="" className="w-10 h-10" />
              </div>
              <div className="mt-4  capitalize">
                <h1 className="text-2xl">stats</h1>
                <div className="flex justify-between">
                  <span>price: ${millify(price)}</span>
                  <span>marketCap: {millify(marketCap)}</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SingleCryptoCurrency;
