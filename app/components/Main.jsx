"use client";

import React from "react";
import Steps from "./Steps";
import Dictionary from "./Dictionary";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubmitState } from "../lib/services/submitSlice";
import { debounce } from "lodash";

import Loading from "../assets/Loading";
import ThemeSwitch from "./DarkMode";

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
      <nav className="sticky z-50 bg-white top-0 px-2 py-3 shadow-md flex border-b sm:flex-row items-center justify-between dark:bg-gray-800 dark:border-white dark:text-white dark:border-white/20">
        <div className="font-semibold text-xl md:text-2xl">KurdLex</div>

        <ThemeSwitch />
      </nav>

      {!isSubmitState ? (
        <>
          <form onSubmit={handleSubmit} className="mt-24 ">
            <h1 className="text-center mb-4 font-bold text-2xl sm:text-4xl">
              Search For Your Words!
            </h1>
            <div className="flex flex-col items-center justify-center">
              <div className="w-64 sm:w-96 ">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                    disabled={isSubmitState}
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    type="text"
                    class="peer w-full h-full bg-transparent text-gray-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border-[1.5px] placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-900 dark:focus:border-white/30"
                    placeholder=" "
                  />
                  <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-900 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500
                   dark:peer-disabled:peer-placeholder-shown:text-gray-900 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-gray-200 peer-focus:before:!border-gray-900 after:border-gray-200 peer-focus:after:!border-gray-900  dark:peer-focus:text-white"
                  >
                    Search
                  </label>
                </div>
              </div>
            </div>
          </form>

          <Steps />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen -mt-16">
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
