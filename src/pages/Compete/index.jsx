import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getActiveContests, getArchivedContests } from "redux/apiCalls";
import "./Compete.scss";
import Contest from "components/Contest";

const Compete = () => {
  const dispatch = useDispatch();
  const activeContests = useSelector(state => state.contests.activeContests);
  const archivedContests = useSelector(state => state.contests.archivedContests);
  const contests = useSelector(state => state.contests);
  const isLast = (contests.page * contests.limit) >= contests.totalCount;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getActiveContests(dispatch);
    getArchivedContests(dispatch, contests.page, contests.limit);
  }, [dispatch]);

  console.log("Active Contests", archivedContests);
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
          <div className="compete__archivedContests">
            <div className="compete__archivedContestTitle">Archived Contests</div>
            {archivedContests.map((contest, index) => (
              <Contest
                key={index}
                index={index}
                contest={contest}
                activeContest={false}
                expanded={expanded}
                handleChange={handleChange}
              />
            ))}

            {!isLast && <div className="compete__showMore">Show More Archived Contests</div>}
          </div>
        </div>
        <div className="compete__right"></div>
      </div>
    </div>
  );
};

export default Compete;
