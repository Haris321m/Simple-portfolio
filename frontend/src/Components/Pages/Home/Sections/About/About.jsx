import React from "react";

export default function About() {
  return (
    <div className="bg-[#131331] p-20">
      <div>
        <div className="text-center relative w-[39%] m-[auto] overflow-hidden">
          <h1 className="text-9xl font-bold text-[#ffffff09]">ABOUT ME</h1>
          <div className="absolute flex top-12 left-72 ">
            <div className="w-20 h-[4px] bg-red-500 absolute -left-28 top-5"></div>
            <h1 className="text-4xl">About</h1>
          </div>
        </div>
        <div className="font-mono bg-gray-900 text-gray-300 p-20 rounded-md w-fit flex flex-col gap-5 text-xl m-auto mt-10">
          <p>
            <span className="text-red-400">#include</span>
            <span className="text-green-400"> &lt;iostream&gt;</span>
          </p>
          <p>
            <span className="text-purple-400">using namespace</span>
            <span className="text-yellow-400"> std</span>
            <span className="text-blue-400">;</span>
          </p>
          <p>
            <span className="text-blue-400">int</span>
            <span className="text-orange-400"> main</span>
            <span className="text-blue-400">()</span>
            <span className="text-white"> {"{"}</span>
          </p>
          <p className="ml-5">
            <span className="text-blue-400">string</span>
            <span className="text-yellow-400"> Name</span>
            <span className="text-blue-400"> = </span>
            <span className="text-green-400">
              Muhammad Haris
            </span>
            <span className="text-blue-400">;</span>
          </p>
          <p className="ml-5">
            <span className="text-blue-400">string</span>
            <span className="text-yellow-400"> aboutMe</span>
            <span className="text-blue-400"> = </span>
            <span className="text-green-400">
              "Hi, I'm a passionate developer with experience in web and mobile
              development and Ai!"
            </span>
            <span className="text-blue-400">;</span>
          </p>
          <p className="ml-5">
            <span className="text-orange-400">cout</span>
            <span className="text-blue-400"> &lt;&lt; </span>
            <span className="text-yellow-400">name</span>
            <span className="text-blue-400"> &lt;&lt; </span>
            <span className="text-green-400">endl</span>
            <span className="text-blue-400">;</span>
          </p>
          <p className="ml-5">
            <span className="text-orange-400">cout</span>
            <span className="text-blue-400"> &lt;&lt; </span>
            <span className="text-yellow-400">aboutMe</span>
            <span className="text-blue-400"> &lt;&lt; </span>
            <span className="text-green-400">endl</span>
            <span className="text-blue-400">;</span>
          </p>
          <p>
            <span className="text-white">{"}"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
