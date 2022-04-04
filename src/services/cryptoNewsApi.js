import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//api headers
const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_NEWS_API_URL;

//function for creating request for different endpoints
const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  //endpoints for data fetching
  endpoints: (builder) => ({
    getNewsCategory: builder.query({
      query: (count) =>
        createRequest(
          `/news/search?q=cryptocurrency&count=${count}&setLang=En&freshness=Day&textFormat=Raw&safeSearch=Off`
        ),
    }),
  }),
});

export const { useGetNewsCategoryQuery } = cryptoNewsApi;
