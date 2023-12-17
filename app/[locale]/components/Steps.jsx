"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StepsData from "./StepsData";
import { CgSearchLoading } from "react-icons/cg";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import "./Arrow.css";

export default function Steps() {
  const t = useTranslations("Index");
  const data = useSelector((state) => state.dataDictionarySlice.dataDictionary);
  const locale = useLocale();
  const [errorDisplayed, setErrorDisplayed] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const isKu = document.documentElement.lang === "ku";

  useEffect(() => {
    if (data?.status === 500 && data.suggestion.length > 0) {
      setErrorDisplayed(true);

      if (locale === "en") {
        toast.error(data.message);
      } else {
        toast.error(data.messageKu);
      }
      setSuggestion(data.suggestion[0]);
    } else if (data?.status === false && !errorDisplayed) {
      setErrorDisplayed(true);

      if (locale === "en") {
        toast.error(data.message);
      } else {
        toast.error(data.messageKu);
      }
    }
  }, [data, errorDisplayed, locale]);

  const numberOfDefinitions = data?.definitions?.length ?? 0;

  // Determine the number of steps to render (max 3)
  const numberOfSteps = Math.min(numberOfDefinitions, 3);

  return (
    (data?.status === 500 && (
      <div className="flex flex-col justify-center items-center -mt-16">
        <p className="mb-2">{t("You may")}</p>
        <div className="transition-all text-center bg-white border border-gray-300 rounded-md px-6 py-3 text-gray-800  w-fit mx-auto cursor-pointer hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/40 dark:text-white dark:border-gray-600">
          {suggestion}
        </div>
      </div>
    )) ||
    (((data && data?.status !== false) || (data && data?.status !== 500)) && (
      <>
        <a class="down-arrow" href="#dictionary"></a>
        <div dir="ltr">
          <div className="flex flex-col sm:flex-row" id="dictionary">
            {/* English steps */}
            <motion.section
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0 }}
              onMount={(el) => el.animate(false)}
              className="text-gray-600 body-font"
              dir="ltr"
            >
              <div className="container px-2 py-6 sm:py-20 mx-auto flex flex-wrap">
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
            </motion.section>

            {/* Kurdish steps */}
            <motion.section
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0 }}
              onMount={(el) => el.animate(false)}
              className="text-gray-600 body-font"
              dir="rtl"
            >
              <div className="container px-2 py-6 sm:py-20 mx-auto flex flex-wrap">
                {Array.from({ length: numberOfSteps }, (_, index) => (
                  <div
                    key={index}
                    className="flex relative pt-10 pb-16 sm:items-center md:w-2/3 ml-[15%] md:mx-auto"
                  >
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
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
            </motion.section>
          </div>
          {/* <hr className="w-[80%] mb-6 mx-auto h-[1px] bg-gray-300 dark:bg-white/40 border-none" /> */}

          {/* Word Origin */}
          {(data?.status !== false || data?.status !== 500) &&
            data?.wordOrigin && (
              <div className="flex flex-col sm:flex-row w-[80%] mx-auto mb-10 max-sm:space-y-6 sm:space-x-8">
                <div className="text-center">
                  <div className="flex flex-col transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg bg-gray-100 border border-gray-200 dark:bg-gray-500 dark:border-gray-700 shadow rounded-md">
                    <div className="flex-grow pl-5 pr-2 rtl:pr-5 rtl:pl-2 mt-6 sm:mt-4 mb-6 dark:text-white">
                      {(data?.status !== false || data?.status !== 500) &&
                        data?.wordOrigin && (
                          <>
                            <div className="mt-2">
                              <div className="mb-4">
                                <h1 className="font-bold mb-2">WORD ORIGIN</h1>
                                <p className="leading-relaxed pl-1.5 text-gray-700 dark:text-white/90">
                                  {data?.wordOrigin}
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex flex-col transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg bg-gray-100 border border-gray-200 dark:bg-gray-500 dark:border-gray-700 shadow rounded-md">
                    <div className="flex-grow pl-5 pr-2 rtl:pr-5 rtl:pl-2 mt-6 sm:mt-4 mb-6 dark:text-white">
                      {(data?.status !== false || data?.status !== 500) &&
                        data?.wordOrigin && (
                          <>
                            <div className="mt-2">
                              <div className="mb-4">
                                <h1 className="font-bold mb-2 font-rabar text-xl">
                                  ڕەگی وشە
                                </h1>
                                <p className="leading-relaxed pl-1.5 text-gray-700 dark:text-white/90 font-rabar">
                                  {data?.resKu?.wordOrigin}
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </>
    ))
  );
}
