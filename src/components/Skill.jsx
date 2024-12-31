import React from "react";
import Skills from "../assets/skills";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import node from '../assets/node.png'

function Skill() {
  return (
    <div id="mySkills" className="w-[100%] bg-black flex justify-around flex-col-reverse md:flex-row">
    <div className="p-10 ">
      <div>
        <h1 className="text-white text-5xl p-2 md:text-center tracking-wider uppercase">My Skills</h1>
      </div>

      <div>
        {Skills.map((skill, index) => (
          <div key={index} className="m-2">
             <span className="tracking-wider text-xl text-blue-600">{skill.category + ": "}</span>
             {skill.skills.map((tech,index)=>(
                <span className=" tracking-wide  text-white" key={index}>{tech + ", "}</span>
             ))}
          </div>
        ))}
      </div>
    </div>

    <div className="rotate rounded-full mx-auto md:mx-0 relative  border border-white w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] my-10 p-10">
        <img src={html} alt="" className="w-[80px] sm:w-[100px]  absolute top-[-5%] left-[10%]" />
        <img src={css} alt="" className="w-[70px] sm:w-[80px] absolute top-[-5%] right-[5%]"/>
        <img src={js} alt="" className=" w-[100px] sm:w-[120px] absolute bottom-[-5%] right-[5%]"/>
        <img src={react} alt="" className="w-[80px] sm:w-[100px] absolute bottom-[-5%] left-5"/>
        <img src={python} alt="" className="w-[60px] sm:w-[80px] absolute top-[35%] left-[-10%]"/>
        <img src={node} alt="" className="w-[60px] sm:w-[80px] absolute top-[35%] right-[-10%]"/>
    </div>
    </div>
  ); 
}

export default Skill;
