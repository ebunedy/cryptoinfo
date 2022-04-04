import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "88a6481512msh11ab2abbd0847f3p156035jsn50b78b1edcab",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

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
