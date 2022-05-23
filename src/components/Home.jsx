import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-darkblue">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-vertfluo">Bonjour, je m'appelle</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Cédric ADORNI
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Je suis étudiant en 2ème année Bachelor IT
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          En pleine reconversion professionnelle,
        </p>
        <p className="text-[#8892b0] pt-0 pb-4 max-w-[700px]">
          Je suis à la recherche d'un apprentissage afin d'effectuer ma 3ème
          année.
        </p>
        <p className="text-[#8892b0] pt-0 pb-4 max-w-[700px]">
          C'est pour cela que j'ai créé ce Portfolio.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-vertfluo hover:border-vertfluo hover:text-darkblue">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
