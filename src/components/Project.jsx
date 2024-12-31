import React from "react";
import projects from "../assets/projects";
import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    <div id="projects" className="p-5 bg-black text-white">
      <div className="">
        <h1 className="text-center text-5xl p-2">My Projects</h1>
          <div className="flex p-10  md:mt-0 justify-around flex-row flex-wrap">
            {projects.map((project, index) => (
              <div id={index} className="w-[300px] mt-5  cursor-pointer card border border-blue-600 rounded p-5 " >
                <p className="text-xl m-2 cursor-pointer"> <a href={project.link} target="_blank">{project.name} </a> </p>
                <span className="text-sm m-2">Technologies: </span>
                {project.tech_used.map((tech, index) => (
                  <span className="m-2 text-sm" id={index}>{tech + ", "}</span>
                ))}
                <p className="text-sm m-2" >Description : {project.description}</p>
                <a className="m-2 text-blue-700" href={project.github_link} target="_blank"> <FaGithub className="inline" /> GitHub</a>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Project;
