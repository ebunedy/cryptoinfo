import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//api headers
const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

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
