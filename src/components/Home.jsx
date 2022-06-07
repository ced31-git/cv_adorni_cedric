import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-darkblue">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <p className="text-vertfluo70">Bonjour, je m'appelle</p>
        <h1 className="py-4 text-4xl sm:text-7xl font-bold text-white">
          Cédric ADORNI
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-blanc60">
          Je suis étudiant en 2ème année Bachelor IT
        </h2>
        <p className="text-blanc40 pt-4 pb-0 max-w-[700px]">
          En pleine reconversion professionnelle,
        </p>
        <p className="text-blanc40 pt-0 pb-0 max-w-[700px]">
          Je suis à la recherche d'un apprentissage afin d'effectuer ma 3ème
          année.
        </p>
        <p className="text-blanc40 pt-0 pb-4 max-w-[700px]">
          C'est pour cela que j'ai créé ce Portfolio.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 pl-0 ml-0 pr-10 mr-10 py-2">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-vertfluo hover:border-vertfluo hover:text-darkblue">
              Voir le portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4 " />
              </span>
            </button>
          </Link>

          <a
            href="src\assets\doc\cv-adorni-cedric-2022 .pdf"
            download="cv-adorni-cedric-2022.pdf"
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-vertfluo hover:border-vertfluo hover:text-darkblue">
              Télécharger le CV
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
