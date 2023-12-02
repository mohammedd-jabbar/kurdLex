"use client";
import React, { useEffect } from "react";
import { useDictionaryQuery } from "../lib/services/dictionaryApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubmitState } from "../lib/services/submitSlice";

export default function Dictionary({ word }) {
  const isSubmitState = useSelector((state) => state.submitState.isSubmitState);
  const dispatch = useDispatch();

  // console.log(isSubmitState);
  // const { data, isSuccess, isFetching, isLoading } = useDictionaryQuery(word, {
  //   skip: !isSubmitState,
  // });

  if (isFetching) {
    console.log("fetching...");
    dispatch(toggleSubmitState());
  } else if (isLoading) {
    console.log("Loading...");
  } else if (isSuccess) {
    console.log(data);
    dispatch(toggleSubmitState());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, isSuccess, isFetching, isLoading } =
          await useDictionaryQuery(word, {
            skip: !isSubmitState,
          });

        if (isFetching) {
          console.log("fetching...");
        } else if (isLoading) {
          console.log("Loading...");
        } else if (isSuccess) {
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Reset isSubmitState on component unmount
        dispatch(toggleSubmitState(false));
      }
    };

    fetchData();
  }, [dispatch, isSubmitState, word]);

  return <div>Dictionary</div>;
}
