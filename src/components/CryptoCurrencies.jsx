import React, { useState, useEffect } from "react";
import { useGetCoinsQuery } from "../services/cryptoApi";
import SingleCryptoCurrency from "./SingleCryptoCurrency";
import Loader from "./Loader";
import Error from "./Error";

const CryptoCurrencis = () => {
  const { data: coinList, isFetching, error } = useGetCoinsQuery(100);
  const result = coinList?.data?.coins;
  const [coins, setCoins] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setCoins(result);
    const filteredCoins = result?.filter((coin) =>
      coin?.name?.toLowerCase().includes(searchItem.toLocaleLowerCase())
    );
    setCoins(filteredCoins);
  }, [coinList, result, searchItem]);

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="">
      <div>
        <label
          htmlFor="search-input"
          className="text-primary-1 text-xl md:text-2xl capitalize"
        >
          Enter crypto currency name
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Search cryptocurrency"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className={`
          placeholder:text-dark-blue 
          w-full placeholder:capitalize 
          md:w-96 ml-0 md:ml-5 px-4 py-2 mt-2 md:mt-0
          outline-none border-2 rounded-md
          `}
        />
      </div>
      <h1 className="text-2xl md:text-3xl text-center text-light-green capitalize">
        {`${
          coins?.length > 0
            ? "list of cryptocurrencies"
            : "No cryptocurrency found"
        }`}
      </h1>
      <SingleCryptoCurrency coinList={coins} />
    </div>
  );
};

export default CryptoCurrencis;
