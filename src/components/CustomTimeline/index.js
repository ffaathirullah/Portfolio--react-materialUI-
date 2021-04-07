import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import "./Timeline.css";
import Typography from "@material-ui/core/Typography";

const CustomTimeline = ({ title, children }) => {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot"}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
      <TimelineItem>
        <CustomSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
const CustomSeparator = () => (
  <TimelineSeparator>
    <TimelineDot className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);
export default CustomTimeline;
