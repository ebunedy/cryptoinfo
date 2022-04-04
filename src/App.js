import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import {
  Navbar,
  HomePage,
  CryptoCurrencies,
  News,
  CryptoDetailsPage,
  DefaultPage,
} from "./components";

const App = () => {
  return (
    <main className="bg-dark-blue font-rubik ">
      <div className="mx-4 md:mx-20 pb-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="news" element={<News />} />
          <Route path="coin/:coinId" element={<CryptoDetailsPage />} />
          <Route
            path="cryptocurrencies/coin/:coinId"
            element={<CryptoDetailsPage />}
          />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
