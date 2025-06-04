import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prev => !prev);
  };
  
  

  useGSAP(() => {
    gsap.from(".navbar", {
      opacity: 0,
      y: -100,
      duration: 1,
    });

    gsap.from(".logo", {
      delay: 1,
      opacity: 0,
      x: -100,
      duration: 1,
    });

    gsap.from(".list", {
      delay: 1,
      opacity: 0,
      x: 100,
      duration: 1,
    });
  });

  return (
    <div>
      <div className="flex bg-transparent justify-between items-center border-b-2 border-[#ffffff0d] navbar">
        <Link to="/">
          <div>
            <h1 className="text-3xl p-10 bg-red-500 font-semibold logo">M.H</h1>
          </div>
        </Link>
        <div className="block lg:hidden mr-10" onClick={handleClick}>
          <FaBars className="text-3xl" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-7 mr-10 list">
            <Link to="/">
              <li className="text-xl relative hover:cursor-pointer group">
                <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/Work">
              <li className="text-xl relative hover:cursor-pointer group">
                <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                <span>Work</span>
              </li>
            </Link>
            <Link to="/About">
              <li className="text-xl relative hover:cursor-pointer group">
                <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                <span>About</span>
              </li>
            </Link>
            <Link to="/Contact">
              <li className="text-xl relative hover:cursor-pointer group">
                <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                <span>Contact</span>
              </li>
            </Link>
          </ul>
        </div>

      </div>
        {active && (
          <div className=" w-full p-20 top-40 z-10 bg-[#0a0a0a]">
            <ul className="flex flex-col gap-7 mr-10 list">
              <Link to="/">
                <li className="text-xl relative hover:cursor-pointer group">
                  <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                  <span className="text-3xl">Home</span>
                </li>
              </Link>
              <Link to="/Work">
                <li className="text-xl relative hover:cursor-pointer group">
                  <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                  <span className="text-3xl">Work</span>
                </li>
              </Link>
              <Link to="/About">
                <li className="text-xl relative hover:cursor-pointer group">
                  <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                  <span className="text-3xl">About</span>
                </li>
              </Link>
              <Link to="/Contact">
                <li className="text-xl relative hover:cursor-pointer group">
                  <span className="block absolute -bottom-1 h-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
                  <span className="text-3xl">Contact</span>
                </li>
              </Link>
            </ul>
          </div>
        )}
    </div>
  );
}
