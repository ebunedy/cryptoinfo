import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

//function for creating request for different endpoints
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  //endpoints for the data fetch
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCoinDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCoinHistory: builder.query({
      query: (coinId, timeperiod) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getCoinExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
  useGetCoinExchangesQuery,
} = cryptoApi;
