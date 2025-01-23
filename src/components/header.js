import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SlClose } from "react-icons/sl";
import { CSSTransition } from "react-transition-group";
import { IconContext } from "react-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    // const menu = document.getElementById("divnav");
    // setMenuOpen(!menuOpen);
    // menu.classList.toggle("hidden");
    // document.body.classList.toggle("overflow-hidden");
    const menu = document.getElementById("divnav");

    if (menuOpen) {
      // Menu is currently open, start fadeOut animation
      menu.classList.remove("fadeIn");
      menu.classList.add("fadeOut");

      // Wait for animation to finish before hiding
      menu.addEventListener(
        "animationend",
        () => {
          menu.classList.add("hidden");
          menu.classList.remove("fadeOut");
          document.body.classList.toggle("overflow-hidden");
        },
        { once: true }
      );
    } else {
      // Menu is currently closed, show and start fadeIn animation
      menu.classList.remove("hidden", "fadeOut");
      menu.classList.add("fadeIn");
      document.body.classList.toggle("overflow-hidden");
    }

    setMenuOpen(!menuOpen); // Toggle menuOpen state
  };

  const itemClicked = () => {
    if (menuOpen === true) {
      const menu = document.getElementById("divnav");
      menu.classList.remove("fadeIn");
      menu.classList.add("fadeOut");

      // Wait for animation to finish before hiding
      menu.addEventListener(
        "animationend",
        () => {
          menu.classList.add("hidden");
          menu.classList.remove("fadeOut");
        },
        { once: true }
      );
    }
    setMenuOpen(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white", className: "close" }}>
        {menuOpen ? (
          <SlClose
            size={30}
            className="sm:hidden fixed z-50 top-0 right-0 m-4 hover:fill-red-500 text-white cursor-pointer"
            onClick={toggleMenu}
          ></SlClose>
        ) : (
          <AiOutlineMenu
            size={30}
            className="sm:hidden fixed z-50 top-0 right-0 m-4 hover:fill-red-500 text-white cursor-pointer rounded-full hover:border hover:border-dblue p-1"
            onClick={toggleMenu}
          ></AiOutlineMenu>
        )}
      </IconContext.Provider>
      <nav
        className="fadeIn divnav w-screen sm:flex hidden h-auto fixed top-0 left-0 z-49 pb-4 bg-opacity-50 sm:bg-opacity-0 bg-[#1f1f1f] backdrop-blur-[2px] sm:backdrop-blur-none"
        id="divnav"
      >
        <ul
          className={`sm:backdrop-blur-sm sm:mt-2 bg-opacity-0 sm:bg-opacity-50 bg-[#1f1f1f] sm:p-4 rounded-full navbar list-none justify-center items-center h-screen sm:h-auto gap-8 mx-auto flex sm:flex-row flex-col text-center transition-all duration-300 ease-out`}
        >
          <li>
            <a href="#about" onClick={() => toggleMenu()}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => toggleMenu()}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => toggleMenu()}>
              Projects
            </a>
          </li>
          <li>
            <a href="#additional" onClick={() => toggleMenu()}>
              Skills
            </a>
          </li>
          <li>
            <a href="#additional" onClick={() => toggleMenu()}>
              Education
            </a>
          </li>
          <li>
            <a href="#additional" onClick={() => toggleMenu()}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
