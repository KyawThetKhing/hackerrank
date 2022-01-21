import React from "react";

//local imports
import { certifications } from "utils/constants";
import CertificationCard from "components/CertificationCard";
import "./Certifications.scss";

const Certifications = () => {
  return (
    <div className="certifications">
      <div className="certifications__certificationsSection">
        <div className="certifications__certificationTitle">
          Get Your Skills Certified
        </div>
        <div className="certifications__certificationCards">
          {certifications.map(certification => (
            <div className="certifications__certificationCard">
              <CertificationCard
                title={certification.title}
                description={certification.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
