import React from "react";
import { ErrorOutline } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import "./CertificationCard.scss";

const CertificationCard = ({ title, description }) => {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black
    }
  }));

  return (
    <div className="certificationCard">
      <div className="certificationCard__title">
        {title}
        <BootstrapTooltip
          title={<Typography color="inherit">{description}</Typography>}
        >
          <ErrorOutline />
        </BootstrapTooltip>
      </div>
      <button className="certificationCard__btn">Get Certified</button>
    </div>
  );
};

export default CertificationCard;
