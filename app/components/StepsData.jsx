import React from "react";
import { AiOutlineSound } from "react-icons/ai";

export default function StepsData({ data, i, first = false }) {
  const handleAudioPlay = async () => {
    new Audio(data.audio).play();
  };

  return (
    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
      {data && (
        <>
          <div className="flex justify-start items-center mb-2">
            {first && (
              <AiOutlineSound
                onClick={handleAudioPlay}
                className="mr-2 bg-[#6366f1] text-white w-8 h-8 rounded-full p-1 cursor-pointer hover:bg-[#6366f1]/90 focus:scale-110 hover:scale-110 active:scale-105 transition"
              />
            )}
            <h2 className="font-semibold title-font text-gray-900 mb-1 text-2xl">
              {data.word}
            </h2>
          </div>

          <div>
            {first && <p className="text-sm mb-2">{data && data.phon}</p>}
            <p className="leading-relaxed">
              {data && data.definitions?.[i].definition}
            </p>
            <p className="mt-2 ">
              {data && `"${data.definitions?.[i].example[0]}"`}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
