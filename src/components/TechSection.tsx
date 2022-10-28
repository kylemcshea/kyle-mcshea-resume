import React, { useState } from "react";
import Tech from "../api/Tech";

const TechSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div className="w-full justify-center">
      <span className="nunito font-semibold text-xl border-b-2 border-white lg:ml-0 md:ml-0 ml-6">
        TECH 💻
      </span>
      <div className="ml-3 mt-3 grid grid-cols-3 gap-3">
        {Tech.map((t) => {
          return (
            <div className="flex justify-center mt-3">
              <img
                src={t.image}
                height={t.size}
                width={t.size}
                alt={`${t.name} Logo`}
                className={`smooth-image ${
                  imageLoaded ? "image-visible" : "image-hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechSection;
