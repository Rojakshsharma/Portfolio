import React from "react";
import me from "../assets/me2.png";
function Aboutme() {
  return (
    <div id="aboutme" className="bg-black flex flex-col-reverse sm:flex-row-reverse justify-evenly items-center p-10 ">
      <div className="sm:w-[400px] space-y-3 text-white p-5">
        <h1 className="text-3xl sm:text-5xl uppercase">So, Who am I</h1>
        <p className=" tracking-wide p-2">
          I’m a <span className="text-blue-600">Front-End Developer</span> with
          expertise in <span className="text-blue-600">React</span> and{" "}
          <span className="text-blue-600">Tailwind CSS</span>. I specialize in
          creating{" "}
          <span className="text-blue-600">
            responsive, user-friendly interfaces
          </span>
          . While my main focus is on the{" "}
          <span className="text-blue-600">front-end</span>, I also have
          experience with <span className="text-blue-600">back-end</span>{" "}
          technologies and am expanding my skills in{" "}
          <span className="text-blue-600">Python</span> and{" "}
          <span className="text-blue-600">C++</span> for{" "}
          <span className="text-blue-600">
            Data Structures and Algorithms (DSA)
          </span>
          .
        </p>

        <button className="m-2 py-2 px-3 sm:px-6 bg-blue-600 text-white rounded-xl font-semibold tracking-widest uppercase">
            <a href="#mySkills"> My Skills</a>
        </button>
      </div>

      <div className="rounded-full circle1">
        <img src={me} alt="" className="img1 w-[400px] sm:h-96 z-20" />
      </div>
    </div>
  );
}

export default Aboutme;
