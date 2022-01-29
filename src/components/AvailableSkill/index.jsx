import React from "react";
import "./AvailableSkill.scss";

const AvailableSkill = ({ technologies }) => {
  return (
    <div className="availableSkill">
      {technologies.map((technology, index) => (
        <div className="availableSkill__row" key={index}>
          <div className="availableSkill__data">{technology.data1}</div>
          <div className="availableSkill__data">{technology.data2}</div>
          <div className="availableSkill__data">{technology.data3}</div>
        </div>
      ))}
    </div>
  );
};

export default AvailableSkill;
