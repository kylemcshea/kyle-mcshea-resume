import Breez from "../assets/breez_logo.png";
import DreamScripts from "../assets/dream_scripts_logo.png";
import VerseLabs from "../assets/VerseLabs_Simple_Background.png";

export interface ProjectProps {
  website_url: string;
  name: string;
  image_src: string;
  description: string;
}

export const Projects: ProjectProps[] = [
  {
    website_url: "https://verselabs.io/",
    name: "Verse Labs",
    image_src: VerseLabs,
    description:
      "Worked with over 5 clients in the North East Region. We build web and mobile applications.",
  },
  {
    website_url: "https://discord.gg/KysbXbrYNN",
    name: "DreamScripts",
    image_src: DreamScripts,
    description:
      "2,000+ Users. Online Ecommerce store to sell Grand Theft Auto v Modification Scripts. React, TypeScript, Lua, MySQL",
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
