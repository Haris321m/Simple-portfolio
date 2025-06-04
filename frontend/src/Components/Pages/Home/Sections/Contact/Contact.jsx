import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      console.log(name, email, content)
      const Response = await axios.post("http://localhost:5000/message", {
        name,
        email,
        content,
      });
    }catch(error){
      console.log('error: ', error)
    }
  }

  return (
    <div className="py-20 px-4">
      {/* Heading */}
      <div className="text-center relative w-full max-w-lg mx-auto overflow-hidden mb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#ffffff09]">
          HIRE ME
        </h1>
        <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
          <div className="w-10 sm:w-20 h-[2px] sm:h-[4px] bg-red-500"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Contact</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto flex flex-col gap-4">
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-red-500 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-red-500 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="content"
            rows="5"
            className="w-full p-3 border border-red-500 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
