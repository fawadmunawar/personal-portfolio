import React from "react";
import { PROJECTS } from "../constants";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects" className="relative">
      <h2 className="mt-20 text-center text-4xl font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-center py-8">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="font-light">More Projects On GitHub</p>
        <a
          href="https://github.com/fawadmunawar"
          className="font-semibold hover:underline transition duration-150"
        >
          "Click Here"
        </a>
      </div>
    </div>
  );
};

export default Projects;
