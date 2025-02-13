'use client'
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen bg-gradient-to-tr from-[#1565C0] to-[#E3F2FD] text-white flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col sm:flex-row items-center">
        {/* Image Section (Mobile View) */}
        <div
          className={`sm:w-1/2 mt-6 sm:mt-0 sm:pl-6 md:hidden transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="main_picture.jpeg" // Replace with your image URL
            alt="Abdul Munim Arain"
            className="w-3/4  max-w-xs mx-auto rounded-full mt-7 shadow-xl shadow-black border-2 border-white"
          />
        </div>
        {/* Text Section */}
        <div
          className={`sm:w-1/2 transform transition duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-7">
            Hello, I'm Abdul Munim Arain, a Graphic Designer
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            I create stunning visuals and designs that inspire.
          </p>
          <a
            href="#projects"
            className="mt-6 sm:mt-3 inline-block bg-white text-blue-600 px-6 py-2 rounded font-semibold"
          >
            View My Work
          </a>
        </div>

        {/* Image Section (Desktop View) */}
        <div
          className={`sm:w-1/2 mt-6 sm:mt-0 sm:pl-6 hidden md:block transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="main_picture.jpeg" // Replace with your image URL
            alt="Abdul Munim Arain"
            className="w-full max-w-xs mx-auto rounded-full shadow-xl shadow-black border-2 border-white bg-black"
          />
        </div>
      </div>
    </section>
  );
}
