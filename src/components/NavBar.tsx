import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import Wave from "react-wavify";

const NavBar: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  return (
    <nav className="slide-left w-screen flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <Wave
        className="position-wave w-screen rotate-180 inset-x-0 object-top absolute top z-0"
        fill="#FFFFFF"
        opacity={0.9}
        paused={false}
        options={{
          height: 20,
          amplitude: 10,
          speed: 0.15,
          points: 4,
        }}
      />
      <div className="flex items-center flex-shrink-0 text-slate-700 mr-6 z-10">
        <span className="text-lg mr-1">🔮</span>
        <span className="nunito font-semibold text-xl tracking-tight">
          Kyle McShea
        </span>
      </div>
      <div className="z-10 block md:hidden lg:hidden">
        <button
          onClick={() => setIsBurgerOpen((prev) => !prev)}
          className="flex items-center px-3 py-2 border rounded text-slate-700 border-teal-400 hover:text-black hover:border-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className={`${isBurgerOpen ? `showMenuNav` : `hideMenuNav`}`}>
          <div
            className="CROSS-ICON cursor-pointer absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsBurgerOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="">Resume</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="https://github.com/kylemcshea" target="_blank">
                GitHub
              </a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a
                href="https://www.linkedin.com/in/kyle-mcshea/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden z-10 w-full block flex-grow lg:flex md:flex md:items-center lg:items-center md:w-auto lg:w-auto">
        <div className="text-sm md:flex-grow lg:flex-grow"></div>
        <div>
          <a
            href="#"
            className="ease-in-out duration-300 mr-2 inline-block text-sm px-4 py-2 leading-none rounded text-slate-700 border-white hover:border-transparent hover:text-white hover:bg-black mt-4 md:mt-0 lg:mt-0"
          >
            <FontAwesomeIcon className="mr-1" icon={faChevronCircleRight} />
            <span className="border-b-2 border-black">Resume</span>
          </a>
          <a
            href="https://github.com/kylemcshea"
            target="_blank"
            className="ease-in-out duration-300 mr-2 inline-block text-sm px-4 py-2 leading-none rounded text-slate-700 border-white hover:border-transparent hover:text-white hover:bg-black mt-4 md:mt-0 lg:mt-0"
          >
            <FontAwesomeIcon className="mr-1" icon={faChevronCircleRight} />
            <span className="border-b-2 border-black">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-mcshea/"
            target="_blank"
            className="ease-in-out duration-300 mr-2 inline-block text-sm px-4 py-2 leading-none rounded text-slate-700 border-white hover:border-transparent hover:text-white hover:bg-black mt-4 md:mt-0 lg:mt-0"
          >
            <FontAwesomeIcon className="mr-1" icon={faChevronCircleRight} />
            <span className="border-b-2 border-black">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
