import React from "react";
import "./footer.css";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name"> Fachrul Faathirullah </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by
          <a href="/" target="_blank">
            .Fachrul Faathirullah
          </a>
          <br />
          Clone Idea From.
          <a href="http://tavonline.net/" target="_blank">
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
