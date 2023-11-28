import React from "react";
import { useDictionaryQuery } from "../lib/services/dictionaryApi";

export default function Dictionary({ word }) {
  const { data, loading, isSuccess } = useDictionaryQuery(word);

  if (loading) {
    console.log("Loading...");
  } else if (isSuccess) {
    console.log(data);
  }

  return <div>Dictionary</div>;
}
