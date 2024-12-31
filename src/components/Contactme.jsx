import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

function Contactme() {
  return (
    <div className="bg-black py-10 " id="contact">
      <div className="bg-black  text-white flex justify-around flex-col md:flex-row p-5 border border-blue-700 mx-10 rounded-lg">
        <div className="main1">
          <h1 className="text-xl md:text-2xl ">Made By: Rojaksh Sharma</h1>
          <ul className="space-y-2 cursor-pointer">
            <li className="mt-2"><a href={"#aboutme"}> About me </a></li>
            <li> <a href="#mySkills">My Skills</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="https://drive.google.com/file/d/1ZiitwQcarvAYYaKqbJQ_DDvXOZHKQnJJ/view">My CV</a></li>
          </ul>
        </div>

        <div className="my-5 md:my-0 main2">
          <h1 className="text-xl">Contact me</h1>
          <div className="flex">
            <ul className="space-y-2 cursor-pointer">
              <li className="mt-2">
                <FaPhoneAlt className="text-blue-600 inline p-[1px] m-[4px]"/>
                91-7986536851
              </li>
              <li>
                {" "}
                <MdEmail className="text-blue-600 inline p-[1px] m-[4px]"/>
                rojakshsharma987@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="my-5 md:my-0 main3">
          <h1 className="text-xl">Follow me</h1>
          <ul className="space-y-2 cursor-pointer">
            <li className="mt-2">
              {" "}
              <a href="https://www.linkedin.com/in/rojaksh-sharma-54a128231?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><FaLinkedin className="text-blue-600 inline p-[1px] m-[4px]"/>
              LinkedIn</a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/Rojakshsharma" target="_blank">
              <FaGithub className="text-blue-600 inline p-[1px] m-[4px]"/>
              GitHub
              </a>
            </li>
            <li>
            <a href="https://leetcode.com/u/rojaksh21/" target="_blank">
            <TbBrandLeetcode className="text-blue-600 inline p-[1px] m-[4px] "/>
               Leetcode </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
