import React from "react";
import { Link } from "react-router-dom";

//local imports
import { certifications, skills } from "utils/constants";
import CertificationCard from "components/CertificationCard";

import "./Dashboard.scss";
import SkillCard from "components/SkillCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__certificationsSection">
        <div className="dashboard__certificationTitle">
          Get Your Skills Certified
        </div>
        <div className="dashboard__certificationCards">
          <div className="dashboard__certificationCard1">
            <CertificationCard
              title={certifications[0].title}
              description={certifications[0].description}
            />
          </div>
          <div className="dashboard__certificationCard1">
            <CertificationCard
              title={certifications[1].title}
              description={certifications[1].description}
            />
          </div>

          <div className="dashboard__veiwAllSkills">
            <div className="dashboard__viewAllSkillsTitle">
              Stand out from the crowd
            </div>
            <div className="dashboard__viewAllSkillsDescription">
              Take the HackerRank Skills Certification Test and make your
              profile stand out
            </div>
            <div className="dashboard__viewAllSkillsBtn">
              <Link to="/certifications">View All Skills</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__yourSkillsSection">
        <div className="dashboard__yourSkillsTitle">Your Skills</div>
        <div className="dashboard__skillCards">
          {skills.map(skill => (
            <div className="dashboard__yourSkillCard">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard__availableSkillsSection"></div>
      <div className="dashboard__tutorialsSeci"></div>
    </div>
  );
};

export default Dashboard;
