import React from "react";
import { useSelector } from "react-redux";
import StepsData from "./StepsData";
import { CgSearchLoading } from "react-icons/cg";

export default function Steps() {
  const data = useSelector((state) => state.dataDictionarySlice.dataDictionary);

  const numberOfDefinitions = data?.definitions.length;

  // Determine the number of steps to render (max 3)
  const numberOfSteps = Math.min(numberOfDefinitions, 3);

  return (
    <div className="flex flex-col sm:flex-row">
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto flex flex-wrap">
          {Array.from({ length: numberOfSteps }, (_, index) => (
            <div
              key={index}
              className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
            >
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                <CgSearchLoading />
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
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div className="flex-grow md:pr-8 pr-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pr-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
