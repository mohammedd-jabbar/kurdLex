"use client";

import React, { useState } from "react";
import Steps from "./Steps";
import axios from "axios";

export default function Main() {
  const [data, setData] = useState(null);

  const handleFetch = async (word) => {
    lo;

    try {
      const response = await axios.get(
        `http://localhost:3000/api/scrape?word=${word}`
      );
      const data = response.data;

      console.log(data);
      // setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      <nav className="p-2 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="font-semibold text-xl md:text-2xl">KurdLex</div>
        <div className="flex items-center mt-1">
          <form onSubmit={handleFetch}>
            <input
              type="text"
              placeholder="Search for words"
              className="outline outline-1 rounded-md p-1 outline-indigo-500 w-full sm:w-64 md:w-96"
            />
            <button className="bg-indigo-500 text-white rounded-md p-1 ml-1">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Steps />

      {/* {data && <div>{data}</div>} */}
    </div>
  );
}
