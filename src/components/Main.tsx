import React, { useState, useEffect } from "react";
import Headshot from "../assets/headshot.jpg";
import Jobs from "../api/Jobs";
import Projects from "../api/Projects";
import JobCard from "./JobCard";
import ProjectCard from "./ProjectCard";
import TechSection from "./TechSection";

// Animations
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../hooks/Main";

const projectVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const experienceVariants: Variants = {
  offscreen: {
    x: -600,
    filter: "blur(20px)",
  },
  onscreen: {
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

const techVariants: Variants = {
  offscreen: {
    x: 600,
    filter: "blur(20px)",
  },
  onscreen: {
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Main: React.FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const [isInView, setIsInView] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div>
      <div className="pt-12 md:pt-24 lg:pt-24 content-evenly grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-2 lg:gap-2">
        <div className="slide-left mx-10 md:ml-12 lg:ml-12">
          <span className="nunito font-semibold text-2xl">
            <span className="border-b-2 border-white"> Hello World </span>
            <span className="wave-emoji ml-1">👋</span>
            <div className="text-base ml-3 mt-2">
              ✨ Senior Software Engineer
            </div>
            <div className="text-base ml-3">✅ 4 Years Experience</div>
            <div className="text-base ml-3">
              📝 Stevens Institute Of Technology{" "}
              <span className="hidden lg:inline md:inline">Class of 2021</span>
            </div>
            <div className="text-base ml-3">
              💌{" "}
              <a
                className="underline decoration-blue-400"
                href="mailto: hi@kylemcshea.com"
              >
                hi@kylemcshea.com
              </a>
            </div>
          </span>
          <div className="lg:block md:block hidden mt-10">
            <span className="nunito font-semibold text-xl border-b-2 border-white">
              SUMMARY 📰
            </span>
            <div className="nunito ml-3 text-base mt-2">
              A passionate Software Engineer having experience with building
              Web/Mobile applications with Reactjs, data collection via
              Puppeteer, cool libraries, and frameworks for various projects. He
              has had the opportunity to develop software in the Banking,
              Gaming, Compliance, Shipping, and Hospitality industry. Their
              focus is to create business impact for clients and build out a
              reputable brand. Kyle holds a Bachelor's degree in Software
              Engineering with a concentration in Data Analytics.
            </div>
          </div>

          <div className="mt-10 block lg:hidden md:hidden ">
            <div className="smooth-image-wrapper">
              <span className="z-20 rotate-45"></span>
              <motion.div
                initial={false}
                animate={
                  imageLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
              >
                <img
                  src={Headshot}
                  alt={"Head shot of Kyle McShea"}
                  className={`polaroid smooth-image ${
                    imageLoaded ? "image-visible" : "image-hidden"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-10">
            {width < 768 ? (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={experienceVariants}>
                  <span className="nunito font-semibold text-xl border-b-2 border-white">
                    EXPERIENCE 🏢
                  </span>
                  <div className="ml-3 mt-2">
                    {Jobs.map((job) => {
                      return <JobCard {...job} />;
                    })}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <>
                <span className="nunito font-semibold text-xl border-b-2 border-white">
                  EXPERIENCE 🏢
                </span>
                <div className="ml-3 mt-2">
                  {Jobs.map((job) => {
                    return <JobCard {...job} />;
                  })}
                </div>
              </>
            )}
          </div>
        </div>
        <div className={`${width > 768 && "slide-right"} mr-12`}>
          <div className="hidden lg:flex md:flex justify-center">
            <div className="smooth-image-wrapper">
              <span className="z-20 rotate-45"></span>
              <motion.div
                initial={false}
                animate={
                  imageLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
              >
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
              </motion.div>
            </div>
          </div>
          <div className="mt-10">
            {width < 768 ? (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={techVariants}>
                  <TechSection />
                </motion.div>
              </motion.div>
            ) : (
              <TechSection />
            )}
          </div>
        </div>
        <motion.div
          className="w-screen mt-10 lg:mt-0 md:mt-0"
          variants={projectVariant}
          initial="hidden"
          ref={ref}
          animate={control}
        >
          <span className="nunito font-semibold text-xl ml-6 border-b-2 lg:border-b-0 md:border-b-0 border-white">
            PROJECTS ✨
          </span>
          <hr className="mx-6 mt-2 divider-line invisible lg:visible md:visible" />
          <div className="w-screen px-12 mt-10 grid flex md:grid-flow-col lg:grid-flow-col md:justify-between lg:justify-between">
            {Projects.map((project) => {
              return <ProjectCard {...project} />;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
