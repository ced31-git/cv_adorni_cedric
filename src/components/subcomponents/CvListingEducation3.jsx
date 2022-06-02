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
          <div className="flex justify-center items-start pb-4 italic text-sm">
            <p>{value.obtentionDiplome}</p>
          </div>
          <div>
            <p className="px-4 text-md">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CvListingEducation;
