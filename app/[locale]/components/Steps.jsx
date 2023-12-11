"use client";

import React from "react";
import { useSelector } from "react-redux";
import StepsData from "./StepsData";
import { CgSearchLoading } from "react-icons/cg";
import { useRouter } from "next/navigation";

export default function Steps() {
  const router = useRouter();
  const data = useSelector((state) => state.dataDictionarySlice.dataDictionary);

  const numberOfDefinitions = data?.definitions.length;

  // go to #dictionary
  if (data) {
    router.push("#dictionary");
  }

  // Determine the number of steps to render (max 3)
  const numberOfSteps = Math.min(numberOfDefinitions, 3);
  return (
    data && (
      <div>
        <div className="flex flex-col sm:flex-row" id="dictionary">
          {/* English steps */}
          <section className="text-gray-600 body-font" dir="ltr">
            <div className="container px-2 py-20 mx-auto flex flex-wrap">
              {Array.from({ length: numberOfSteps }, (_, index) => (
                <div
                  key={index}
                  className="flex relative pt-10 pb-16 sm:items-center md:w-2/3 mr-[15%] md:mx-auto"
                >
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    <CgSearchLoading className="w-[1.15rem] h-[1.15rem]" />
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <StepsData data={data} i={index} first={index === 0} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kurdish steps */}
          <section className="text-gray-600 body-font" dir="rtl">
            <div className="container px-2 py-20 mx-auto flex flex-wrap">
              {Array.from({ length: numberOfSteps }, (_, index) => (
                <div
                  key={index}
                  className="flex relative pt-10 pb-16 sm:items-center md:w-2/3 ml-[15%] md:mx-auto"
                >
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    <CgSearchLoading className="w-[1.15rem] h-[1.15rem]" />
                  </div>
                  <div
                    className="flex-grow md:pr-8 pr-6 flex sm:items-center items-start flex-col sm:flex-row"
                    dir="rtl"
                  >
                    <StepsData
                      data={data}
                      i={index}
                      first={index === 0}
                      ku={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* <hr className="w-[80%] mb-6 mx-auto h-[1px] bg-gray-300 dark:bg-white/40 border-none" /> */}

        {/* Word Origin */}
        <div className="flex w-[80%] mx-auto mb-10 space-x-8">
          <div className="text-center">
            <div className="flex flex-col bg-gray-100 border border-gray-200 dark:bg-gray-500 dark:border-gray-700 shadow rounded-md">
              <div className="flex-grow pl-5 pr-2 rtl:pr-5 rtl:pl-2 mt-6 sm:mt-4 mb-6 dark:text-white">
                {data && (
                  <>
                    <div className="mt-2">
                      <div className="mb-4">
                        <h1 className="font-bold mb-2">WORD ORIGIN</h1>
                        <p className="leading-relaxed pl-1.5 text-gray-700 dark:text-white/90">
                          {data.wordOrigin}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-col bg-gray-100 border border-gray-200 dark:bg-gray-500 dark:border-gray-700 shadow rounded-md">
              <div className="flex-grow pl-5 pr-2 rtl:pr-5 rtl:pl-2 mt-6 sm:mt-4 mb-6 dark:text-white">
                {data && (
                  <>
                    <div className="mt-2">
                      <div className="mb-4">
                        <h1 className="font-bold mb-2 font-rabar text-xl">
                          مێژووی وشە
                        </h1>
                        <p className="leading-relaxed pl-1.5 text-gray-700 dark:text-white/90 font-rabar">
                          {data.resKu.wordOrigin}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
