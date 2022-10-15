import React, { useState } from "react";
import Headshot from "../assets/chilling_LA.jpg";
import { Jobs } from "../data/jobs";
import { Projects } from "../data/Projects";
import JobCard from "./JobCard";
import ProjectCard from "./ProjectCard";
import TechSection from "./TechSection";

const Introduction: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 pt-12">
        <div className="slide-left ml-12">
          <span className="nunito font-semibold text-2xl">
            Hello World<span className="wave-emoji ml-1">👋</span>
            <div className="text-sm ml-3">
              Thank you for stopping by my page ✨
            </div>
          </span>
          <div className="mt-6">
            <span className="nunito font-semibold text-xl">SUMMARY 📰</span>
            <div className="nunito ml-3 text-base">
              Kyle McShea is a hardworking individual who likes to smoke weed.
            </div>
          </div>
          <div className="mt-6">
            <span className="text-xl">EXPERIENCE 🏢</span>
            <div className="ml-3">
              {Jobs.map((job) => {
                return <JobCard {...job} />;
              })}
            </div>
          </div>
        </div>
        <div className="slide-right mr-12">
          <div className="flex justify-center">
            <div className="smooth-image-wrapper">
              <span className="z-20 rotate-45"></span>
              <img
                src={Headshot}
                height={200}
                width={400}
                alt={"Head shot of Kyle McShea"}
                className={`polaroid smooth-image ${
                  imageLoaded ? "image-visible" : "image-hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
          <div className="mt-6">
            <TechSection />
          </div>
        </div>
        <div>
          <span className="nunito font-semibold text-xl ml-6">PROJECTS ✨</span>
          <hr className="mt-2 w-screen divider-line" />
          <div className="w-screen px-12 mt-3 grid grid-flow-col flex justify-between">
            {Projects.map((project) => {
              return <ProjectCard {...project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
