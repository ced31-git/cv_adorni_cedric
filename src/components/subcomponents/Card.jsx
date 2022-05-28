import React from "react";

const Card = (props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto px-auto items-center">
      {props.details.map((value, index) => (
        <div
          className="cards"
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
                <img className="icon" src={value.iconTechno01} />
                <img className="icon" src={value.iconTechno02} />
                <img className="icon" src={value.iconTechno03} />
              </div>
            </div>
            <div className="flex">
              <button className="btn">
                <a href={value.urlCode} target="_blank">
                  Voir le code
                </a>
              </button>
              <button className="btn">
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
