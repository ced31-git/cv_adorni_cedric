import React from "react";

const Card = (props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4 py-2 my-2 justify-self-auto mx-auto px-auto">
      {props.details.map((value, index) => (
        <div
          className="border-transparent rounded-lg shadow-lg shadow-[#0a0a0a] hover:scale-110 duration-500 w-3/4 py-4 m-4 sm:w-[250px]"
          key={index}
        >
          <div className="w-full">
            <img src={value.image} />
          </div>
          <div className="">
            <h3 className="text-center  font-bold text-lg py-2 my-2 ">
              {value.title}
            </h3>
            <div className="">
              <h4 className="font-light text-xs pl-4">
                Technologie(s) utilisée(s):
              </h4>
              <div className="flex justify-center items-center p-2">
                <img className="w-8 px-1 mx-1 py-2 " src={value.iconTechno01} />
                <img className="w-8 px-1 mx-1 py-2" src={value.iconTechno02} />
                <img className="w-8 px-1 mx-1 py-2" src={value.iconTechno03} />
              </div>
            </div>
            <div className="flex">
              <button className="w-full p-2 m-2 hover:bg-[#071d3e] hover:rounded hover:shadow-sm hover:shadow-white ">
                <a href={value.urlCode} target="_blank">
                  Voir le code
                </a>
              </button>
              <button className="w-full p-2 m-2 hover:bg-[#071d3e] hover:rounded hover:shadow-sm hover:shadow-white">
                <a href={value.urlProjet} target="_blank">
                  Voir le projet
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
