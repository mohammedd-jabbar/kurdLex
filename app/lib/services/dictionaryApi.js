import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kurd-gde45yoes-mohammeds-projects-004ceb9e.vercel.app",
  }),

  endpoints: (builder) => ({
    dictionary: builder.query({
      query: (word) => `api/scrape?word=${word}`,
    }),
  }),
});

export const { useDictionaryQuery } = dictionaryApi;
