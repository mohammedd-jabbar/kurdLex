import React from "react";

export default function Idioms({ data, ku = false }) {
  return (
    <div className="mt-2">
      <div className="mb-4">
        <div className="flex justify-center items-center mb-2">
          <h1
            className={`relative font-bold text-xl mb-6 ${ku && "font-rabar"}`}
          >
            {ku ? "ئیدیۆمەکان" : "Idioms"}
          </h1>
          <div className="relative group">
            <span
              className={`pointer-events-none text-sm sm:text-base bg-gray-600 text-white dark:bg-white rounded-md dark:text-gray-800 p-1.5 absolute top-6 ${
                ku
                  ? "-right-[5.5rem] sm:-right-[6.5rem]"
                  : "-right-[6rem] sm:-right-[7.5rem]"
              } w-max opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100`}
            >
              {ku
                ? ".ئەو وتەیانەی کە مانای قووڵتر و کولتووری دەشارنەوە"
                : "Sayings that hide deeper, cultural meanings."}
            </span>
            <svg
              class="transition-all mb-6 w-5 h-5 ml-1 cursor-pointer hover:text-indigo-500 group-focus:text-indigo-500 group-active:text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className={`${ku ? "text-end" : "text-start"}`}>
          {ku
            ? data?.resKu.idioms
              ? data?.resKu?.idioms.map((idiom, i) => (
                  <div key={i} className="mb-6">
                    <h1 className="text-xl mb-0.5 font-bold">
                      {idiom?.header}
                    </h1>
                    <div className="flex justify-end items-baseline">
                      <span
                        dir="rtl"
                        className="mb-2 text-start text-base font-normal text-gray-800 dark:text-gray-100"
                      >
                        {idiom?.status &&
                          idiom?.status.split(" ").length <= 3 && (
                            <span className="text-gray-600 dark:text-gray-300 font-normal text-base">
                              {`'${idiom?.status}' `}{" "}
                            </span>
                          )}
                        {idiom?.meaning}
                      </span>
                    </div>
                    {idiom?.example && (
                      <div className="flex justify-end items-baseline">
                        <p className="italic">
                          {idiom?.example && idiom?.example.includes(".")
                            ? idiom?.example.replace(/\./g, "")
                            : idiom?.example}
                        </p>
                        <div className="h-[6px] w-[6px] rounded-full bg-white ml-2"></div>
                      </div>
                    )}
                    <hr className="w-full mt-2 mb-6 mx-auto h-[1px] bg-gray-300 dark:bg-white/40 border-none" />
                  </div>
                ))
              : "ببوورە ئیدیۆمەکان بەردەست نین!"
            : data?.idioms
            ? data?.idioms.map((idiom, i) => (
                <div key={i} className="relative mb-6">
                  <h1 className="text-xl mb-0.5 font-bold">{idiom?.header}</h1>
                  <p className="mb-2 text-base font-normal text-gray-800 dark:text-gray-100">
                    {idiom?.status && idiom?.status.split(" ").length <= 3 && (
                      <span className="text-gray-600 dark:text-gray-300 font-normal text-base">
                        {`'${idiom?.status}' `}
                      </span>
                    )}
                    {idiom?.meaning}
                  </p>
                  {idiom?.example && (
                    <div className="flex justify-center items-baseline">
                      <div className="h-[6px] w-[6px] rounded-full bg-white mr-2"></div>
                      <p className="italic">{idiom?.example}</p>
                    </div>
                  )}
                  <hr className="w-full mt-2 mb-6 mx-auto h-[1px] bg-gray-300 dark:bg-white/40 border-none" />
                </div>
              ))
            : "Sorry, Idioms not available!"}
        </div>
      </div>
    </div>
  );
}
