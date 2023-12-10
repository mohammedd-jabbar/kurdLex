import React from "react";
import { AiOutlineSound } from "react-icons/ai";

export default function StepsData({ data, i, first = false, ku = false }) {
  const handleAudioPlay = async () => {
    new Audio(data.audio).play();
  };

  // Determine the number of steps to display, capped at a maximum of 3
  // It is based on the length of examples for the current definition that we pass to the component (if available)
  const numberOfSteps = Math.min(3, data.definitions?.[i].example.length);

  return (
    <div className="flex flex-col bg-gray-100 border border-gray-200 dark:bg-gray-500 dark:border-gray-700 shadow rounded-md">
      {first && data && (
        <div className="pl-4 pr-2 rtl:pr-4 rtl:pl-2 mt-4">
          <div className="flex justify-start items-center mb-2">
            <AiOutlineSound
              onClick={handleAudioPlay}
              className="ltr:mr-3 rtl:ml-3 bg-[#6366f1] text-white dark:text-gray-700 w-10 h-10 rounded-full p-1 cursor-pointer hover:bg-[#6366f1]/90 focus:scale-110 hover:scale-110 active:scale-105 transition rtl:rotate-180"
            />
            <h2
              className={`font-bold text-gray-900 dark:text-gray-200 mb-1.5 text-4xl ${
                ku && "font-rabar"
              }`}
            >
              {ku ? data.resKu.word : data.word}
            </h2>
          </div>

          <p className="text-base mb-2 text-gray-800 dark:text-gray-200">
            {data.phon}
          </p>

          {/* Line under first stuff */}
          <hr className="h-[1px] bg-gray-300 dark:bg-white/40 border-none" />
        </div>
      )}
      <div className="flex-grow pl-5 pr-2 rtl:pr-5 rtl:pl-2 mt-6 sm:mt-4 mb-6 dark:text-white">
        {data && (
          <>
            <div className="mt-2">
              <div className="mb-4">
                <h1 className={`font-bold mb-1 ${ku && "font-rabar"}`}>
                  {ku ? "پێناسە" : "DEFINITION"}
                </h1>
                <p
                  className={`leading-relaxed pl-1.5 text-gray-700 dark:text-white/90 ${
                    ku && "font-rabar"
                  }`}
                >
                  {ku
                    ? data.resKu.definitions?.[i].definition
                    : data.definitions?.[i].definition}
                </p>
              </div>
              <div>
                <h1 className={`font-bold mb-1 ${ku && "font-rabar"}`}>
                  {ku ? "نموونەکان" : "EXAMPLES"}
                </h1>
                <ul className="pl-1.5">
                  {/* Loop over the number of steps (up to 3) for examples by each definition */}
                  {Array.from({ length: numberOfSteps }, (_, index) => (
                    <li key={index}>
                      <p
                        className={`mt-2 text-gray-700 dark:text-white/90 ${
                          ku && "font-rabar"
                        }`}
                      >
                        <span className={`font-medium`}>{index + 1}.</span>{" "}
                        {ku
                          ? data.resKu.definitions?.[i].examples[index]
                          : data.definitions?.[i].example[index]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
