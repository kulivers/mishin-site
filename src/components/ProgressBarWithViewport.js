import React from "react";
import ProgressBar from "./ProgressBar";
import handleViewport from "react-in-viewport";

const ProgressBarWithHandleViewPort = handleViewport(ProgressBar, {
  rootMargin: "-80px 0px 0px 0px",
});

const PrgProgressBarWithViewPort = ({ ...props }) => {
  return (
    <React.Fragment>
      <ProgressBarWithHandleViewPort {...props} />
    </React.Fragment>
  );
};

export default PrgProgressBarWithViewPort;
