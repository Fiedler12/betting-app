"use client";
import ActionButton from "@/app/components/actionbutton";
import { lads } from "@/app/components/users";
import { setPriority } from "os";
import { useState } from "react";

export default function FiftyFifty() {
  const [opponent, setOpponent] = useState("");

  const handleChange = (val: string) => {
    setOpponent(val);
    console.log("Changed");
  };

  return (
    <div className="flex flex-row h-full w-full">
      <div>
        <h1 className="px-5 py-5 font-semibold text-lg">
          Vælg din modstander:
        </h1>
      </div>
      <div>
        <select
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          onChange={(val) => handleChange(val.target.value)}
        >
          {lads.map(function (lad) {
            return <option value={lad.nickname}>{lad.nickname}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
