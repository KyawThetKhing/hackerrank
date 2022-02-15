import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import "./Contest.scss";

const Contest = ({ expanded, contest, index, handleChange, activeContest }) => {
  return (
    <Accordion
      className="contest"
      expanded={expanded === index}
      onChange={handleChange(index)}
    >
      <AccordionSummary
        className="accordionSummary"
        sx={{
          borderBottom: "1px solid lightgray"
        }}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <div className="accordionLeft">{contest.title}</div>
        <div className="accordionRight">
          <p className="accordionRight__text">Feb 11th, 6:00 pm +0630</p>
          <p className="accordionRight__text2">
            {activeContest ? "View Details" : "Ended"}
          </p>
          <button className={activeContest ? "accordionRight__button" : "accordionRight__btnOutline"}>
            {activeContest ? "Sign Up" : "View Challenges"}
          </button>
        </div>
      </AccordionSummary>
      <AccordionDetails className="accordiaonDetals">
        <div className="accordionSubtitle">{contest.subtitle}</div>
        {contest.imageUrl && <img src={contest.imageUrl} alt="" />}
        <div className="accordionDesc">{contest.desc}</div>
      </AccordionDetails>
    </Accordion >
  );
};

export default Contest;
