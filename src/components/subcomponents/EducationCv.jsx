import React from "react";
import CvListingEducation from "./CvListingEducation";
import CvListingEducation2 from "./CvListingEducation2";
import CvListingEducation3 from "./CvListingEducation3";
import DataEducation from "../dataComponents/EducationData1";
import DataBis from "../dataComponents/EducationData2";
import DataTer from "../dataComponents/EducationData3";


const EducationCv = () => {
  return (
    <div>
      <CvListingEducation details={DataEducation} />
      <CvListingEducation3 details={DataTer} />
      <CvListingEducation2 details={DataBis} />

    </div>
  );
};

export default EducationCv;
