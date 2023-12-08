"use client";

import React, { useEffect } from "react";
import Steps from "./Steps";
import Dictionary from "./Dictionary";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubmitState } from "../lib/services/submitSlice";
import { debounce } from "lodash";
import Loading from "../assets/Loading";

export default function Main() {
  const isSubmitState = useSelector((state) => state.submitState.isSubmitState);
  const dispatch = useDispatch();

  const [word, setWord] = React.useState("");

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
    <div className="max-w-6xl mx-auto">
      {!isSubmitState ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          >
            <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
              <div className="text-center">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                      Discover Words
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-white">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-500 dark:text-blue-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="b039bae0-fdd5-4311-b198-8557b064fce0"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">The</span>
                    </span>{" "}
                    Explore a vast collection of words and meanings
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg dark:text-white/80">
                    Unlock the richness of language with our comprehensive
                    dictionary. Find definitions, synonyms, and more.
                  </p>
                </div>
                <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                  <input
                    disabled={isSubmitState}
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    type="text"
                    placeholder="Search For Your Word"
                    required
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-indigo-400 focus:outline-none focus:shadow-outline dark:bg-black/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-400 focus:shadow-outline focus:outline-none hover:bg-[#6366f1]/90 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-indigo-900"
                  >
                    Search
                  </button>
                </div>
                <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16 dark:text-white/50">
                  Dive into the world of knowledge with our extensive dictionary
                  entries.
                </p>
              </div>
              {!isSubmitState && (
                <a
                  href="#dictionary"
                  aria-label="Scroll down"
                  className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                  </svg>
                </a>
              )}
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
