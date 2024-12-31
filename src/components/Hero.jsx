import React from "react";
import bg from "../assets/hero-img.jpg";
import me from "../assets/me-img.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
function Hero() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" bg-black w-[100%] ">
      <div className="hero ">
        {/* navbar */}
        <div className="flex justify-center">
          <div className="shadow shadow-blue-500/40 z-20 absolute bg-black rounded-2xl py-2 px-0 md:px-4  top-0 text-white  my-8 flex w-[90%] justify-between items-center ">
            <h1 className="p-2 text-[15px] md:text-[20px] lg:text-[25px] uppercase tracking-widest">
              Rojaksh Sharma
            </h1>
            <h1
              onClick={() => {
                setMenu(!menu);
              }}
              className={`md:hidden cursor-pointer ${
                menu ? `hidden` : `block`
              }`}
            >
              <GiHamburgerMenu className="m-2" />
            </h1>
            <div
              className={`bg-black shadow shadow-blue-500/40 md:shadow-none w-[100%] md:w-auto  p-5 ${
                menu ? `mt-0` : `mt-[-100rem]`
              } top-0 md:p-0  md:block md:mt-0 md:transition-none absolute md:static transition-all duration-500 ease-in-out`}
            >
              <ul className="hero-list md:flex md:space-x-5 md:flex-row flex-col space-x-0 ">
                <a href="#aboutme">
                  <li
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    className="p-2 "
                  >
                    {" "}
                    About me
                  </li>
                </a>
                <a href="#mySkills">
                  <li
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    className="p-2"
                  >
                    My skills
                  </li>
                </a>
                <a href="#projects">
                  <li
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    className="p-2"
                  >
                    Projects
                  </li>
                </a>
                <a href="#contact">
                  <li
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    className="p-2"
                  >
                    Contact me
                  </li>
                </a>
              </ul>
              <RxCross2
                onClick={() => {
                  setMenu(!menu);
                }}
                className="text-2xl cursor-pointer absolute top-4 right-4 block md:hidden"
              />
            </div>
          </div>
        </div>

        {/* introduction */}
        <div className="flex justify-center">
          <div className="   z-10 top-[6rem] w-[90%] ">
            <div className="flex justify-evenly flex-col-reverse sm:flex-row">
              <div className="p-10 my-auto ">
                <div className="space-y-2 text-white">
                  <p className="text-3xl">
                    Hello{" "}
                    <span className="border-b-2 border-blue-600 w-[50%] lg:w-[80%] inline-block"></span>
                  </p>
                  <p className="text-4xl md:text-5xl ">I am <span className="text-blue-600">Rojaksh Sharma</span></p>
                  <p className="text-2xl md:text-3xl">Fronted Developer</p>
                </div>

                <div className="space-x-3 space-y-2">
                  <button className="py-2 px-3 sm:px-6 bg-blue-600 text-white rounded-xl font-semibold tracking-widest uppercase">
                    <a
                      href="https://drive.google.com/file/d/1ZiitwQcarvAYYaKqbJQ_DDvXOZHKQnJJ/view?usp=sharing"
                      target="_blank"
                    >
                      Get CV
                    </a>
                  </button>
                  <button className="py-2 px-3 sm:px-6 text-white border border-white rounded-xl font-semibold tracking-widest uppercase">
                    <a href="#contact">Contact me</a>
                  </button>
                </div>
              </div>

              <div className=" mx-auto mt-32 circle1 rounded-full circle1 z-10 mb-5">
                <img src={me} alt="" className="img1 h-80 sm:h-96 z-20 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
