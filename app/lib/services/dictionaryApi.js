import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://kurdlex.mohammedd.com",
  }),

  endpoints: (builder) => ({
    dictionary: builder.query({
      query: (word) => `api/scrape?word=${word}`,
    }),
  }),
});

export const { useDictionaryQuery } = dictionaryApi;
