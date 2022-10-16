import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import dino_a from "../assets/dinosaur_a.png";
import dino_g from "../assets/dino_g.png";

const Footer: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <footer className="mt-20 w-screen p-2 bg-slate-200 opacity-80 rounded-sm shadow sm:flex sm:items-center sm:justify-between sm:p-3 dark:bg-gray-800">
      <div className="w-full md:w-3/4 lg:w-3/4 grid grid-flow-col flex justify-between">
        <div>
          <img
            src={dino_g}
            height={50}
            width={50}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_a}
            height={30}
            width={30}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_g}
            height={50}
            width={50}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_a}
            height={30}
            width={30}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_g}
            height={50}
            width={50}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className="flex justify-center"></div>
      <ul className="flex justify-center md:flex-wrap lg:flex-wrap items-center mt-3 text-sm text-black dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/kylemcshea/kyle-mcshea-resume"
            target="_blank"
            className="font-bold hover:underline"
          >
            Made with{" "}
            <FontAwesomeIcon className="mr-1 text-rose-400" icon={faHeart} />
            By Kyle
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
