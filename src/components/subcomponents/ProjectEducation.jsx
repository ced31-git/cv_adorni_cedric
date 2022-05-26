import React from "react";
import Card from "./Card";
import Data from "../dataComponents/dataProjetsApprentissage";

const ProjectEducation = () => {
  return (
    <div>
      <Card details={Data} />
    </div>
  );
};

export default ProjectEducation;
