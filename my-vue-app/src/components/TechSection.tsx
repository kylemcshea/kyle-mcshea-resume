import React, { useState } from "react";
import React_Logo from "../assets/react.svg";
import Sass_Logo from "../assets/sass_logo.png";
import Typescript_Logo from "../assets/typescript_logo.png";
import Tailwind_Logo from "../assets/tailwind_logo.png";
import Jest_Logo from "../assets/jest_logo.png";
import Java_Logo from "../assets/java_logo.png";
import Lua_Logo from "../assets/lua_logo.png";
import TeamCity_Logo from "../assets/teamcity_logo.png";
import MySQL_Logo from "../assets/mysql_logo.png";

const TechSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div className="w-full justify-center">
      <span className="nunito font-semibold text-xl">TECH 💻</span>
      <div className="ml-3 mt-6 grid grid-cols-3 gap-3">
        <div className="flex justify-center">
          <img
            src={Sass_Logo}
            height={120}
            width={120}
            alt={"Sass Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex justify-center">
          <img
            src={Typescript_Logo}
            height={100}
            width={100}
            alt={"TypeScript Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex justify-center">
          <img
            src={Tailwind_Logo}
            height={100}
            width={100}
            alt={"Tailwind Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex justify-center mt-3">
          <img
            src={Jest_Logo}
            height={100}
            width={100}
            alt={"Jest Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex justify-center mt-3">
          <img
            src={React_Logo}
            height={100}
            width={100}
            alt={"React Logo"}
            className={`rotating smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex justify-center mt-3">
          <img
            src={Java_Logo}
            height={100}
            width={100}
            alt={"Java Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex justify-center mt-3">
          <img
            src={Lua_Logo}
            height={100}
            width={100}
            alt={"Lua Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex justify-center mt-3">
          <img
            src={TeamCity_Logo}
            height={120}
            width={120}
            alt={"TeamCity Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex justify-center mt-3">
          <img
            src={MySQL_Logo}
            height={120}
            width={120}
            alt={"mySQL Logo"}
            className={`smooth-image ${
              imageLoaded ? "image-visible" : "image-hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default TechSection;
