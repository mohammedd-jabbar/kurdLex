import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sweet-seahorse-2c570a.netlify.app",
  }),

  endpoints: (builder) => ({
    dictionary: builder.query({
      query: (word) => `api/scrape?word=${word}`,
    }),
  }),
});

export const { useDictionaryQuery } = dictionaryApi;
