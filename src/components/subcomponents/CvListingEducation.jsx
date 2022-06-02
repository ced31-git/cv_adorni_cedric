import React from "react";

const CvListingEducation = (props) => {
  return (
    <div>
      {props.details.map((value, index) => (
        <div key={index} className="p-4 border-b">
          <p className="font-italic text-vertfluo text-md ">{value.date}</p>
          <div className="font-bold text-xl py-2 ">
            <h3>{value.title}</h3>
            <h3>{value.indicationSupplementaire}</h3>
          </div>
          <h5 className="italic text-sm pb-2">{value.location}</h5>
          <div>
            <p className="px-4 text-md">{value.description}</p>
            <ul className="grid grid-cols-2 pt-2 sm:grid-cols-4">
              <li className="icon-list">
                <img src={value.imgListe1} className="img-list " />
                <p>{value.nameImgListe1}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe2} className="img-list " />
                <p>{value.nameImgListe2}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe3} className="img-list " />
                <p>{value.nameImgListe3}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe4} className="img-list " />
                <p>{value.nameImgListe4}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe5} className="img-list " />
                <p>{value.nameImgListe5}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe6} className="img-list " />
                <p>{value.nameImgListe6}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe7} className="img-list " />
                <p>{value.nameImgListe7}</p>
              </li>
              <li className="icon-list">
                <img src={value.imgListe8} className="img-list " />
                <p>{value.nameImgListe8}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CvListingEducation;
