import React, { useState } from "react";
import ProjectEducation from './subcomponents/ProjectEducation';
import FullProjects from './subcomponents/FullProjects';

const Work = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div
      name="work"
      className="w-full md:h-full text-slate-100 bg-darkblue md:pt-32"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-vertfluo">
            Projets Réalisés
          </p>
          <p className="py-4">
            Mise en pratique des savoirs acquis lors d'apprentissage en
            autodidacte ou lors de différents modules de formations
          </p>
        </div>
        <div className="max-w-[1000px] mx-auto shadow-lg shadow-[#0a0a0a]">
          <div className="grid grid-cols-2 gap-4">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Projets d'apprentissage
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Projets Complets
            </button>
          </div>

          <div className="">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
                <ProjectEducation />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <FullProjects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
