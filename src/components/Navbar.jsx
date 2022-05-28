import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";
import Logo from "../assets/icons/Logo_CA.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-darkblue text-slate-100">
      <div>
        <img src={Logo} alt="Logo de la page" className="w-14 mt-6" />
      </div>

      {/*Menu */}
      <div className="hidden md:flex ">
        <ul className="flex">
          <li className=" md:hover:underline md:hover:text-vertfluo">
            <Link to="home" smooth={true} duration={500}>
              Accueil
            </Link>
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            <Link to="about" smooth={true} duration={500}>
              A propos
            </Link>
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            {/*<Link to="formation" smooth={true} duration={500}>*/}
            Formations & Expériences
            {/*</Link>*/}
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            <Link to="skills" smooth={true} duration={500}>
              Compétences
            </Link>
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            <Link to="hobbies" smooth={true} duration={500}>
              Hobbies
            </Link>
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            <Link to="work" smooth={true} duration={500}>
              Projets Réalisés
            </Link>
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Menu mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-darkblue flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            A propos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {/*<Link onClick={handleClick} to="formation" smooth={true} duration={500}> */}
          Formations & Expériences
          {/*</Link>*/}
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Compétences
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="hobbies" smooth={true} duration={500}>
            Hobbies
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projets Réalisés
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}> 
          Contact
          </Link>
        </li>
      </ul>
      {/* Icones Réseaux Sociaux */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a1919]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`url('https://github.com/ced31-git')`}
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#409683]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:adorni.cedric@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#852222]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              download
            >
              Télécharger CV <BsFillFileEarmarkPdfFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
