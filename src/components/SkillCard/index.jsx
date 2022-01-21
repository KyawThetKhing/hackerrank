import React from "react";

import "./SkillCard.scss";

const SkillCard = props => {
  const { type, title, solved, total } = props.skill;
  return (
    <div className="skillCard">
      <div className="skillCard__type">{type}</div>
      <div className="skillCard__title">{title}</div>
      <button className="skillCard__btn">Continue Pratice</button>
    </div>
  );
};

export default SkillCard;
