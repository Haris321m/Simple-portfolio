import React from "react";
import Cards from "./Cards";
import img1 from "../../assets/projects/project1.png";
import img2 from "../../assets/projects/project2.png";
import img3 from "../../assets/projects/project3.png";

export default function Projects() {
  const arr = [
    { img: img1, title: "Title", project: "web" },
    { img: img2, title: "Title", project: "web" },
    { img: img3, title: "Title", project: "web" },
  ];

  return (
    <div className="my-10 md:my-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] mx-auto">
        <div className="relative w-full md:w-[80%] lg:w-[60%] xl:w-[32%] mx-auto text-center mb-12 md:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ffffff09]">
            PROJECTS
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-10 md:w-16 h-1 md:h-[4px] bg-red-500"></div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Work
              </h1>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 xl:gap-16 px-2 sm:px-0">
          {arr.map((item, index) => (
            <Cards
              key={index}
              img={item.img}
              title={item.title}
              pro={item.project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
