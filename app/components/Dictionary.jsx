"use client";
import React, { useEffect } from "react";
import { useDictionaryQuery } from "../lib/services/dictionaryApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubmitState } from "../lib/services/submitSlice";

export default function Dictionary({ word }) {
  const isSubmitState = useSelector((state) => state.submitState.isSubmitState);
  const dispatch = useDispatch();

  console.log(isSubmitState);
  const { data, isSuccess, isFetching, isLoading } = useDictionaryQuery(word, {
    skip: !isSubmitState,
  });

  if (isFetching) {
    console.log("fetching...");
  } else if (isLoading) {
    console.log("Loading...");
  } else if (isSuccess) {
    console.log(data);
    dispatch(toggleSubmitState());
  }

  return <div>Dictionary</div>;
}
