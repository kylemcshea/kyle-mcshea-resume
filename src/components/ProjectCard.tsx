import React from "react";
import { ProjectProps } from "../api/Projects";

const ProjectCard: React.FC<ProjectProps> = ({
  website_url,
  name,
  image_src,
  description,
}) => {
  return (
    <div className="w-full mt-8 md:w-48 lg:w-96 ease-in duration-200 hover:scale-105 bg-slate-300 rounded-lg border border-white shadow-white md:shadow-none lg:shadow-none shadow-lg md:shadow-sm lg:shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href={website_url} target="_blank">
        <img className="rounded-t-lg w-full" src={image_src} alt={name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={website_url}
          target="_blank"
          className="ease-in duration-200 hover:scale-105 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          😎 Check it out
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
