import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";

const Social_Icons_Mobile = () => {
  return (
    <div className="flex justify-between items-center fixed top-[83%] left-0 lg:hidden 7xs:top-[76%] 6xs:top-[79%] 5xs:top-[77%] 4xs:top-[81%] 3xs:top-[82%] 2xs:top-[83%]">
      <ul className="flex">
        <li className="w-[60px] h-[270px] flex justify-center items-start mt-[110px] hover:mt-[-100px] duration-300 bg-blue-700 py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/adorni-cedric"
            target="_blank"
            rel="noreferrer"
          >
            <ul>
              <li>
                <FaLinkedin size={30} />
              </li>
              <br />
              <li className="flex justify-center items-center">L</li>
              <li className="flex justify-center items-center">i</li>
              <li className="flex justify-center items-center">n</li>
              <li className="flex justify-center items-center">k</li>
              <li className="flex justify-center items-center">e</li>
              <li className="flex justify-center items-center">d</li>
              <li className="flex justify-center items-center">I</li>
              <li className="flex justify-center items-center">n</li>
            </ul>
          </a>
        </li>
        <li className="w-[60px] h-[270px] flex justify-center items-start mt-[110px] hover:mt-[-60px] duration-300 bg-[#1a1919] py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="https://github.com/ced31-git"
            target="_blank"
            rel="noreferrer"
          >
            <ul>
              <li>
                <FaGithub size={30} />
              </li>
              <br />
              <li className="flex justify-center items-center">G</li>
              <li className="flex justify-center items-center">i</li>
              <li className="flex justify-center items-center">t</li>
              <li className="flex justify-center items-center">h</li>
              <li className="flex justify-center items-center">u</li>
              <li className="flex justify-center items-center">b</li>
            </ul>
          </a>
        </li>
        <li className="w-[60px] h-[270px] flex justify-between items-start mt-[110px] hover:mt-[-40px] duration-300 bg-[#409683] py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="mailto:adorni.cedric@gmail.com"
          >
            <ul>
              <li>
                <HiOutlineMail size={30} />
              </li>
              <br />
              <li className="flex justify-center items-center">E</li>
              <li className="flex justify-center items-center">m</li>
              <li className="flex justify-center items-center">a</li>
              <li className="flex justify-center items-center">i</li>
              <li className="flex justify-center items-center">l</li>
            </ul>
          </a>
        </li>

        <li className="w-[60px] h-[270px] flex justify-between items-start mt-[110px] hover:mt-[-10px] duration-300 bg-[#852222] py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="https://drive.google.com/file/d/1LRvo1rpWa7uEg5NkKW-uHdAUyAahX7Lm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <ul>
              <li>
                <BsFillFileEarmarkPdfFill size={30} />
              </li>
              <br />
              <li className="flex justify-center items-center">C</li>
              <li className="flex justify-center items-center">V</li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social_Icons_Mobile;
