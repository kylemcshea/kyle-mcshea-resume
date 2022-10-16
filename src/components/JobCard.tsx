import React from "react";
import { JobProps } from "../api/Jobs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingCircleArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const JobCard: React.FC<JobProps> = ({
  position,
  company,
  start_date,
  end_date,
  location,
}) => {
  return (
    <div className="mb-4 jobcard-font">
      <div>
        <span className="text-lg">{position}</span>
      </div>
      <div className="ml-3 text-base">
        <span>
          <FontAwesomeIcon className="mr-1" icon={faBuildingCircleArrowRight} />
          {company}
          <span className="hidden lg:inline md:inline"> ({location})</span>
        </span>
      </div>
      <div className="ml-6 text-base">
        <span>
          <FontAwesomeIcon className="mr-1" icon={faClock} />
          {start_date} - {end_date}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
