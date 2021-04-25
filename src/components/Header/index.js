import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter, Link, NavLink } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import Buttons from "../Button";
import "./header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/*Home ink*/}
      <Nav.Link as={NavLink} to="/" className="headder_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded style={{ fill: "white" }} />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className={
              pathName == "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <a href="https://t.me/ffaathirullah">
            <Buttons text="Contact Me" icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
