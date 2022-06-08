import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";

const Social_Icons = () => {
  return (
    <ul>
      <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-700">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.linkedin.com/in/adorni-cedric"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#1a1919]">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://github.com/ced31-git"
          target="_blank"
          rel="noreferrer"
        >
          Github <FaGithub size={30} />
        </a>
      </li>
      <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#409683]">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="mailto:adorni.cedric@gmail.com"
        >
          Email <HiOutlineMail size={30} />
        </a>
      </li>
      <a
        className="flex justify-between items-center w-full text-gray-300"
        href="https://drive.google.com/file/d/1LRvo1rpWa7uEg5NkKW-uHdAUyAahX7Lm/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#852222]">
          Télécharger CV <BsFillFileEarmarkPdfFill size={30} />
        </li>
      </a>
    </ul>
  );
};

export default Social_Icons;
