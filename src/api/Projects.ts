import DreamState from "../assets/dreamstate_logo.png";
import Breez from "../assets/breez_logo.png";
import DreamScripts from "../assets/dream_scripts_logo.png";

export interface ProjectProps {
  website_url: string;
  name: string;
  image_src: string;
  description: string;
}

export const Projects: ProjectProps[] = [
  {
    website_url: "https://discord.gg/KysbXbrYNN",
    name: "DreamScripts",
    image_src: DreamScripts,
    description:
      "2,000+ Users. Online Ecommerce store to sell Grand Theft Auto v Modification Scripts. React, TypeScript, Lua, MySQL",
  },
  {
    website_url: "https://www.youtube.com/watch?v=IlI81114ao0",
    name: "DreamState",
    image_src: DreamState,
    description:
      "5,000+ Users. 19+ Years Total Playtime. Lua, React, TypeScript, mySQL, HTML, CSS, jQuery.",
  },
  {
    website_url: "https://breez-music-kylemcshea.vercel.app/",
    name: "Breez Website",
    image_src: Breez,
    description:
      "Passion Project. Made Sleek Landing page for a friend. HTML, CSS, jQuery.",
  },
];

export default Projects;
