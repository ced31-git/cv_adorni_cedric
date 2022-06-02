import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";
import Logo from "../assets/icons/Logo_CA.png";
import { Link } from "react-scroll";
import SocialIcons from "./subcomponents/Social_Icons";

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
            <Link to="education" smooth={true} duration={500}>
              Formations & Expériences
            </Link>
          </li>
          <li className="md:hover:underline md:hover:text-vertfluo">
            <Link to="skills" smooth={true} duration={500}>
              Compétences
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
          <Link
            onClick={handleClick}
            to="education"
            smooth={true}
            duration={500}
          >
            <ul className="">
              <li className="flex justify-center items-center">Formations</li>
              <li className="flex justify-center items-center">&</li>
              <li className="flex justify-center items-center">Expériences</li>
            </ul>
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Compétences
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
      {/* Icones Réseaux Sociaux: lg screen*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Navbar;
