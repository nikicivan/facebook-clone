import React from "react";
import "./story.css";

import { Avatar } from "@material-ui/core";

const Story = ({ image, profileSrc, title }) => {
  return (
    <div className="story">
      <img src={image} alt="title" />
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
