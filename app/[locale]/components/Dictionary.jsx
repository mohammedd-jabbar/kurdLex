"use client";
import React from "react";
import { useDictionaryQuery } from "../../lib/services/dictionaryApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubmitState } from "../../lib/services/submitSlice";
import { setData } from "../../lib/services/dataDictionarySlice";

export default function Dictionary({ word }) {
  const isSubmitState = useSelector((state) => state.submitState.isSubmitState);
  const dispatch = useDispatch();

  const { data, isSuccess } = useDictionaryQuery(word, {
    skip: !isSubmitState,
  });

  if (isSuccess) {
    dispatch(setData(data));
    dispatch(toggleSubmitState());
  }
}
