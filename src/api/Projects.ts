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
    website_url: "https://github.com/kylemcshea/dream-postal",
    name: "GTA Modding",
    image_src: DreamScripts,
    description:
      "Created a fairly popular Grand Theft Auto 5 Modification Scripts. Built this using Lua!",
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
