"use client";

import React from "react";
import Steps from "./Steps";
import Dictionary from "./Dictionary";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubmitState } from "../lib/services/submitSlice";
import { debounce } from "lodash";
import { RiMenuFill } from "react-icons/ri";
import Loading from "../assets/Loading";

export default function Main() {
  const isSubmitState = useSelector((state) => state.submitState.isSubmitState);
  const dispatch = useDispatch();

  const [word, setWord] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value.trim();
    debouncedHandleSubmit(inputValue);
  };

  // Debounce the input change
  const debouncedHandleSubmit = debounce((inputValue) => {
    if (isValidInput(inputValue)) {
      setWord(String(inputValue).toLowerCase());
      dispatch(toggleSubmitState());
    } else {
      console.log("Error");
    }
  }, 1000); // Set an appropriate debounce delay (e.g., 1 second)

  const isValidInput = (input) => {
    // Check if the input is not null or undefined
    if (input == null) {
      console.log("Input cannot be null or undefined");
      return false;
    }

    // Convert the input to a string and make it lowercase
    const cleanedInput = String(input).toLowerCase();

    // Check if the input is not an empty string
    if (!cleanedInput.trim()) {
      console.log("Input cannot be empty");
      return false;
    }

    // Check if the input contains only English letters
    if (!/^[a-z]+$/.test(cleanedInput)) {
      console.log("Input should contain only English letters");
      return false;
    }

    // If all checks pass, the input is considered valid
    return true;
  };

  return (
    <div>
      <nav className="p-2 shadow-md flex sm:flex-row items-center justify-between">
        <div className="font-semibold text-xl md:text-2xl">KurdLex</div>
        <div className={`hidden sm:flex items-center mt-1`}>
          <form onSubmit={handleSubmit}>
            <input
              disabled={isSubmitState}
              value={word}
              onChange={(e) => setWord(e.target.value)}
              type="text"
              placeholder="Search for words"
              className="outline outline-1 rounded-md p-1 outline-indigo-500 w-full sm:w-64 md:w-96 disabled:text-gray-500"
            />
            <button
              disabled={isSubmitState}
              type="submit"
              className="bg-indigo-500 text-white rounded-md p-1 ml-1 disabled:bg-indigo-300"
            >
              Search
            </button>
          </form>
        </div>

        <RiMenuFill
          onClick={() => setIsMobile(!isMobile)}
          className={`sm:hidden w-7 h-7 cursor-pointer font-bold text-3xl`}
        />
      </nav>
      {isSubmitState ? (
        <Steps />
      ) : (
        <div className="flex flex-col justify-center items-center  h-screen bg-black bg-opacity-5">
          <Loading />
          <h1 className="font-semibold text-base mt-2">
            Loading, please wait...
          </h1>
        </div>
      )}

      {isSubmitState ? <Dictionary word={word} /> : <></>}
    </div>
  );
}
