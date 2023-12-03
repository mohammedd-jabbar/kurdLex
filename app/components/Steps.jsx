import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineSound } from "react-icons/ai";

export default function Steps() {
  const data = useSelector((state) => state.dataDictionarySlice.dataDictionary);

  const handleAudioPlay = async () => {
    new Audio(data.audio).play();
  };

  console.log(data);

  return (
    <div className="flex flex-col sm:flex-row">
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                {data && (
                  <div className="flex justify-start items-center mb-2">
                    <AiOutlineSound
                      onClick={handleAudioPlay}
                      className="mr-2 bg-[#6366f1] text-white w-8 h-8 rounded-full p-1 cursor-pointer hover:bg-[#6366f1]/90 focus:scale-110 hover:scale-110 active:scale-105 transition"
                    />
                    <h2 className="font-semibold title-font text-gray-900 mb-1 text-2xl">
                      {data.word}
                    </h2>
                  </div>
                )}
                <p className="text-sm mb-2">{data && data.phon}</p>
                <p className="leading-relaxed">
                  {data && data.definitions.definitionSet?.[0].definition}
                </p>
                <p className="mt-2 ">
                  {data &&
                    `"${data.definitions.definitionSet?.[0].example[0]}"`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-semibold title-font text-gray-900 mb-1 text-xl">
                  The Catalyzer
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
      <section className="text-gray-600 body-font" dir="rtl">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
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
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pr-8 pr-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pr-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  The Catalyzer
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
