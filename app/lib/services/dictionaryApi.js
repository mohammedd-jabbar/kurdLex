import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kurd-lex.vercel.app",
  }),

  endpoints: (builder) => ({
    dictionary: builder.query({
      query: (word) => `api/scrape?word=${word}`,
    }),
  }),
});

export const { useDictionaryQuery } = dictionaryApi;
