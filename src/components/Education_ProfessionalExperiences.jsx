import React, { useState } from "react";
import EducationCv from "./subcomponents/EducationCv";
import WorksCv from "./subcomponents/WorksCv";

const Education_ProfessionalExperiences = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleOnglets = (index) => {
    setToggleState(index);
  };
  return (
    <div
      name="education"
      className="w-full md:h-full text-slate-100 bg-darkblue md:pt-32"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-6">
          <p className="text-4xl font-bold inline border-b-4 border-vertfluo ">
            Formations & Expériences Professionnelles
          </p>
        </div>
        <div className="max-w-[1000px] mx-auto shadow-lg shadow-[#0a0a0a]">
          <div className="grid grid-cols-2">
            <button
              className={
                toggleState === 1
                  ? "onglets onglet-actif"
                  : "onglets select-onglet"
              }
              onClick={() => toggleOnglets(1)}
            >
              Formations
            </button>
            <button
              className={
                toggleState === 2
                  ? "onglets onglet-actif"
                  : "onglets select-onglet"
              }
              onClick={() => toggleOnglets(2)}
            >
              <p>Expériences</p>
              <p>Professionnelles</p>
            </button>
          </div>
          <div>
            <div
              className={
                toggleState === 1 ? "contenus contenu-actif" : "contenus"
              }
            >
              <EducationCv />
            </div>
            <div
              className={
                toggleState === 2 ? "contenus contenu-actif" : "contenus"
              }
            >
              <WorksCv />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education_ProfessionalExperiences;
