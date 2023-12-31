import React from "react";
import { AiOutlineSound } from "react-icons/ai";

export default function StepsData({ data, i, first = false, ku = false }) {
  const handleAudioPlay = async () => {
    new Audio(data.audio).play();
  };
  const handleAudio = async (textToRead) => {
    if ("speechSynthesis" in window) {
      // Cancel any previous speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance();
      utterance.text = textToRead;
      // utterance.voice = speechSynthesis.getVoices()[4];
      utterance.volume = 1; // Full volume

      speechSynthesis.speak(utterance);
    } else {
      alert(t("your browser does not support"));
    }
  };

  // Determine the number of steps to display, capped at a maximum of 3
  // It is based on the length of examples for the current definition that we pass to the component (if available)
  const numberOfSteps = Math.min(3, data.definitions?.[i].example.length);

  return (
    <div
      // ref={ref}
      // its make the website unresponsive, but I'm not in a position to fix it hahaha
      // style={{
      //   transform: isInView
      //     ? "none"
      //     : ku
      //     ? "translateX(200px)"
      //     : "translateX(-200px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      // }}
      className="flex flex-col bg-gray-100 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg border border-gray-200 dark:bg-gray-500 dark:border-gray-700 shadow rounded-md !overflow-hidden"
    >
      {first && data && (
        <div className={`${ku ? "pr-4 pl-2" : "pl-4 pr-2"} mt-4`}>
          <div className="flex justify-start items-center mb-2">
            {!ku && (
              <AiOutlineSound
                onClick={handleAudioPlay}
                className="mr-2 bg-[#6366f1] text-white dark:text-gray-200 w-10 h-10 rounded-full p-1 cursor-pointer hover:bg-[#6366f1]/90 focus:scale-110 hover:scale-110 active:scale-105 transition"
              />
            )}
            <h2
              className={`font-bold text-gray-900 dark:text-gray-200 text-4xl ${
                ku && "font-rabar"
              }`}
            >
              {ku ? data?.resKu?.word : data?.word}
            </h2>
          </div>

          <p className="text-base mb-2 text-gray-800 dark:text-gray-200">
            {ku
              ? data?.phon || "شیوازی خوێندەوە بەردەست نییە"
              : data?.phon || "No phonetics"}
          </p>

          {/* Line under first stuff */}
          <hr className="h-[1px] bg-gray-300 dark:bg-white/40 border-none" />
        </div>
      )}
      <div
        className={`flex-grow ${
          ku ? "pr-5 pl-2" : "pl-5 pr-2"
        } mt-6 sm:mt-4 mb-6 dark:text-white`}
      >
        {data && (
          <>
            <div className="mt-2">
              <div className="mb-8">
                <h1 className={`font-bold mb-1 ${ku && "font-rabar text-xl"}`}>
                  {ku ? "پێناسە" : "DEFINITION"}{" "}
                  {!ku && (
                    <AiOutlineSound
                      onClick={() =>
                        handleAudio(data?.definitions?.[i]?.definition)
                      }
                      className="ml-1 inline bg-[#6366f1] text-white dark:text-gray-200 w-5 h-5 rounded-full p-1 cursor-pointer hover:bg-[#6366f1]/90 sm:focus:scale-110 sm:hover:scale-110 sm:active:scale-105 transition"
                    />
                  )}
                </h1>

                <p
                  className={`leading-relaxed pl-1.5 text-gray-700 dark:text-white/90 ${
                    ku && "font-rabar"
                  }`}
                >
                  {ku
                    ? data?.resKu?.definitions?.[i]?.definition
                    : data?.definitions?.[i]?.definition}
                </p>
              </div>
              <div>
                <h1 className={`font-bold mb-1 ${ku && "font-rabar text-xl"}`}>
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
                          ? data?.resKu?.definitions?.[i]?.examples?.[index] ||
                            "ببوورە هیچ نموونەیەک بەردەست نیە!"
                          : (
                              <span>
                                {data?.definitions?.[i]?.example?.[index]}
                                {!ku && (
                                  <AiOutlineSound
                                    onClick={() =>
                                      handleAudio(
                                        data?.definitions?.[i]?.example?.[index]
                                      )
                                    }
                                    className="ml-1 inline bg-[#6366f1] text-white dark:text-gray-200 w-5 h-5 rounded-full p-1 cursor-pointer hover:bg-[#6366f1]/90 sm:focus:scale-110 sm:hover:scale-110 sm:active:scale-105 transition"
                                  />
                                )}
                              </span>
                            ) || "Sorry, no examples available!"}
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
