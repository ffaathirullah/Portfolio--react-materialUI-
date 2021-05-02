import React from "react";
import "./Resume.css";
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomSeparator,
} from "../../components/CustomTimeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import Timeline from "@material-ui/lab/Timeline";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import Icon from "@material-ui/core/Icon";
import { Paper } from "@material-ui/core";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_txt">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="about_txt" variant="body2">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="section mb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_txt">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <CustomTimeline
                title="Work And Organization Experience"
                icon={<WorkIcon />}
              >
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomSeparator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_desc">
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomSeparator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_desc">
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section mb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_txt">Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography variant="h6" className="serivce_title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="serivce_description">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skillss">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;
