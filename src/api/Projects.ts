import POSH from "../assets/posh_logo.jpg";
import DreamState from "../assets/dreamstate_logo.png";
import Breez from "../assets/breez_logo.png";

export interface ProjectProps {
  website_url: string;
  name: string;
  image_src: string;
  description: string;
}

export const Projects: ProjectProps[] = [
  {
    website_url: "https://discord.gg/dreamstaterp",
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
  {
    website_url: "https://posh.vip",
    name: "POSH",
    image_src: POSH,
    description: "Event Marketing Startup. HTML, CSS, jQuery, Node, MongoDB",
  },
];

export default Projects;
