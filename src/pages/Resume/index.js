import React from "react";
import "./Resume.css";
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45">
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
      <Grid container className=""></Grid>
      <Grid container className=""></Grid>
      <Grid container className=""></Grid>
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;
