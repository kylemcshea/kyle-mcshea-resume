import Sass_Logo from "../assets/sass_logo.png";
import Typescript_Logo from "../assets/typescript_logo.png";
import Tailwind_Logo from "../assets/tailwind_logo.png";
import Jest_Logo from "../assets/jest_logo.png";
import Java_Logo from "../assets/java_logo.png";
import Lua_Logo from "../assets/lua_logo.png";
import TeamCity_Logo from "../assets/teamcity_logo.png";
import MySQL_Logo from "../assets/mysql_logo.png";
import React_Logo from "../assets/react.svg";

export interface TechProps {
  image: string;
  name: string;
  size: number; // height / width.
}

export const Tech: TechProps[] = [
  {
    image: Sass_Logo,
    name: "Sass",
    size: 120,
  },
  {
    image: Typescript_Logo,
    name: "TypeScript",
    size: 100,
  },
  {
    image: Tailwind_Logo,
    name: "TailWind CSS",
    size: 100,
  },
  {
    image: Jest_Logo,
    name: "Jest",
    size: 100,
  },
  {
    image: React_Logo,
    name: "React",
    size: 100,
  },
  {
    image: Java_Logo,
    name: "Java",
    size: 100,
  },
  {
    image: Lua_Logo,
    name: "Lua",
    size: 100,
  },
  {
    image: TeamCity_Logo,
    name: "TeamCity",
    size: 100,
  },
  {
    image: MySQL_Logo,
    name: "mySQL",
    size: 100,
  },
];

export default Tech;
