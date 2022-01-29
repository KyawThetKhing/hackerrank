import React from "react";
import "./TutorialCard.scss";

const TutorialCard = ({ tutorial }) => {
  const { category, title, description, resume } = tutorial;
  return (
    <div className="tutorialCard">
      <div className="tutorialCard__category">{category}</div>
      <div className="tutorialCard__title">{title}</div>
      <div className="tutorialCard__desc">{description}</div>
      <div className="tutorialCard__status">
        {resume ? "Resume Tutorial" : "View Tutorial"}
      </div>
    </div>
  );
};

export default TutorialCard;
