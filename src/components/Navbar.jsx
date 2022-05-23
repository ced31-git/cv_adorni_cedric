import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo_CA.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-slate-100">
      <div>
        <img src={Logo} alt="Logo de la page" className="w-14 mt-6" />
      </div>

      {/*Menu */}
      <div className="hidden md:flex ">
        <ul className="flex">
          <li>Accueil</li>
          <li>Qui suis-je ?</li>
          <li>Expériences</li>
          <li>Compétences</li>
          <li>Projets Réalisés</li>
          <li>Contact</li>
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
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Accueil</li>
        <li className="py-6 text-4xl">Qui suis-je ?</li>
        <li className="py-6 text-4xl">Formations & Expériences</li>
        <li className="py-6 text-4xl">Compétences & Hobbies</li>
        <li className="py-6 text-4xl">Projets Réalisés</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* Icones Réseaux Sociaux */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
