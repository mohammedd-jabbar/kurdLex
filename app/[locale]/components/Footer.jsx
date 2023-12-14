import React from "react";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-center items-center mt-16">
      <a href="https://t.me/Mohammed_jabbar" target="_blank">
        <FaTelegram className="w-6 h-6 ltr:mr-3 rtl:ml-3 mb-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-125 focus:scale-125 active:scale-105" />
      </a>
      <a
        href="https://mohammedd.com"
        target="_blank"
        className="inline-block mb-4 bg-none font-bold text-sm border-2 transition-all duration-200 ease-in-out py-[4px] px-[6px] rounded-xl cursor-pointer hover:scale-110 focus:scale-110 active:scale-105"
      >
        &copy; 2023 - Mohammed Jabbar
      </a>
    </div>
  );
}
