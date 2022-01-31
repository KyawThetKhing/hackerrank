import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getActiveContests } from "redux/apiCalls";
import "./Compete.scss";
import Contest from "components/Contest";

const Compete = () => {
  const dispatch = useDispatch();
  const activeContests = useSelector(state => {
    console.log("State", state);
    return state.contests.activeContests;
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getActiveContests(dispatch);
  }, [dispatch]);

  console.log("Active Contests", activeContests);
  return (
    <div className="compete">
      <div className="compete__header">
        <div className="compete__headerTitle">All Contests</div>
        <div className="compete__headerTitle2">Contests</div>
      </div>
      <div className="compete__content">
        <div className="compete__left">
          <div className="compete__activeContest">
            <div className="compete__activeContestTitle">Active Contests</div>
            {activeContests.map((activeContest, index) => (
              <Contest
                key={index}
                index={index}
                contest={activeContest}
                activeContest={true}
                expanded={expanded}
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className="compete__archivedContests"></div>
        </div>
        <div className="compete__right"></div>
      </div>
    </div>
  );
};

export default Compete;
