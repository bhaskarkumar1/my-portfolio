import React from "react";
import Card from "./Card";
import "./Project.css";
const Project = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Project;
