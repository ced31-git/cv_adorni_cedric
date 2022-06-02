import React from "react";

const CvListingEducation = (props) => {
  return (
    <div>
      {props.details.map((value, index) => (
        <div key={index} className="p-4 border-b last:border-0">
          <p className="font-italic text-vertfluo text-md ">{value.date}</p>
          <div className="font-bold text-xl py-2 ">
            <h3>{value.title}</h3>
            <h3>{value.indicationSupplementaire}</h3>
          </div>
          <h5 className="italic text-sm pb-2">{value.location}</h5>
          <div className="flex justify-center items-center py-4">
            <img className="w-[50%]" src={value.urlObtention} alt="" />
          </div>
          <div className="flex justify-center items-start pb-4 italic text-sm">
            <p>{value.obtentionDiplome}</p>
          </div>
          <div>
            <p className="px-4 text-md">{value.description}</p>
            <p className="px-4 py-4 text-md">{value.description2}</p>
            <p className="px-4 text-md">{value.description3}</p>
          </div>
          <div className=" flex justify-center items-center">
            <div className="w-3/4 flex justify-center items-center p-2 m-2 shadow-md rounded shadow-black hover:bg-[#071d3e] hover:rounded hover:shadow-md hover:shadow-white">
              <a href={value.urlVideo}>
                <p className="flex justify-center items-center text-md">{value.btnVideo}</p>
                <p className="flex justify-center items-center text-[10px] py-2 italic">
                  {value.redirectionVideo}
                </p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CvListingEducation;
