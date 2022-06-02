import React from "react";
import Moi from "../assets/icons/adorniCedric.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-darkblue text-slate-100  md:pt-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-vertfluo">
              A propos
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-3xl font-bold sm:text-right md:text-4xl ">
            <div>
              <p>Bonjour,</p>
              <p>Je m'appelle Cédric.</p>
              <p>
                Et je suis enchanté que vous preniez le temps de regarder mon
                portfolio
              </p>
            </div>
          </div>
          <div>
            <p>J'ai 32 ans et je suis en reconversion professionnelle.</p>
            <p>
              Depuis, mon adolescence j'ai toujours été attiré par le monde du
              numérique. Mais je suis partis dans d'autres directions qui me
              plaisaient aussi.
            </p>
            <p>
              Dans un premier temps, j'ai visité le monde de l'industrie. La
              fabrication assisté de tour et de fraiseuse à commande numérique
              que l'on <span className="font-bold italic">programmait</span>{" "}
              afin d'usiner les pièces que l'on souhaitait à plus ou moins
              grande série.
            </p>
            <p>
              Dans un second temps, j'ai été attiré par le monde du transport.
              Je suis devenu chauffeur routier frigorifique en super-lourd.
            </p>
            <p>
              Dans un troisième temps, j'ai travaillé auprès de personnes
              atteinte de handicap au sein d'un foyer de vie.
            </p>
            <p>
              Pour finir, je reviens à mes premières amours qui n'est pas moins
              le monde de la programmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
