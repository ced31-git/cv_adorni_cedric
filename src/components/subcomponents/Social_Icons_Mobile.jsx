import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";

const Social_Icons_Mobile = () => {
  return (
    <div className="flex justify-between items-center fixed top-[83%] left-0 lg:hidden">
      <ul className="flex">
        <li className="w-[60px] h-[270px] flex justify-center items-start mt-[110px] hover:mt-[-80px] duration-300 bg-blue-700 py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="/"
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
        <li className="w-[60px] h-[270px] flex justify-center items-start mt-[110px] hover:mt-[-80px] duration-300 bg-[#1a1919] py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href={`url('https://github.com/ced31-git')`}
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
        <li className="w-[60px] h-[270px] flex justify-between items-start mt-[110px] hover:mt-[-80px] duration-300 bg-[#409683] py-2">
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
        <li className="w-[60px] h-[270px] flex justify-between items-start mt-[110px] hover:mt-[-80px] duration-300 bg-[#565f69] py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="/"
          >
            <ul>
              <li>
                <BsFillPersonLinesFill size={30} />
              </li>
              <br />
              <li className="flex justify-center items-center">R</li>
              <li className="flex justify-center items-center">e</li>
              <li className="flex justify-center items-center">s</li>
              <li className="flex justify-center items-center">u</li>
              <li className="flex justify-center items-center">m</li>
              <li className="flex justify-center items-center">e</li>
            </ul>
          </a>
        </li>
        <li className="w-[60px] h-[270px] flex justify-between items-start mt-[110px] hover:mt-[-80px] duration-300 bg-[#852222] py-2">
          <a
            className="flex justify-center items-center w-full text-gray-300"
            href="/"
            download
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
