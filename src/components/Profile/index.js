import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Profile.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { profile } from "../../assests/images";
import CustomTimeline, { CustomSeparator } from "../CustomTimeline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import resumeData from "../../utils/resumeData";
import Buttons from "../Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text2">
            <span>{title} : </span>{" "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text2">
            <span>{title} : </span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={profile} />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="BirthDay" text={resumeData.birthDay} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className="button_container">
          <Buttons text="Download CV" icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
