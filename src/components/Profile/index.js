import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Profile.css";
import { profile } from "../../assests/images";
import CustomTimeline from "../CustomTimeline";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Fachrul Faathirullah</Typography>
        <Typography className="title">Student at Telkom University</Typography>
      </div>

      <figure className="profile_image">
        <img src={profile} />
      </figure>

      <div className="profile_information">
        <CustomTimeline />
        <br />
        <Button>My Button</Button>
      </div>
    </div>
  );
};

export default Profile;
