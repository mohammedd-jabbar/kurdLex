"use client";

import React from "react";
import Steps from "./Steps";

import Dictionary from "./Dictionary";

export default function Main() {
  const [word, setWord] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(e.target.elements[0].value);
  };

  return (
    <div>
      <nav className="p-2 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="font-semibold text-xl md:text-2xl">KurdLex</div>
        <div className="flex items-center mt-1">
          <form onSubmit={handleSubmit}>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              type="text"
              placeholder="Search for words"
              className="outline outline-1 rounded-md p-1 outline-indigo-500 w-full sm:w-64 md:w-96"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-md p-1 ml-1"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <Steps />

      {word ? <Dictionary word={word} /> : <></>}
    </div>
  );
}
