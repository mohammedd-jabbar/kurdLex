"use client";

import React from "react";
import Steps from "./Steps";

export default function Main() {
  return (
    <div>
      <nav className="p-2 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="font-semibold text-xl md:text-2xl">KurdLex</div>
        <div className="flex items-center mt-1">
          <input
            type="text"
            placeholder="Search for words"
            className="outline outline-1 rounded-md p-1 outline-indigo-500 w-full sm:w-64 md:w-96"
          />
          <button
            
            className="bg-indigo-500 text-white rounded-md p-1 ml-1"
          >
            Search
          </button>
        </div>
      </nav>
      <Steps />
    </div>
  );
}
