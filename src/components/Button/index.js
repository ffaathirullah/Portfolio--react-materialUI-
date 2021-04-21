import React from "react";
import { Button } from "@material-ui/core";
import "./button.css";

const Buttons = ({ text, icon }) => {
  return (
    <Button
      className="cstm_btn"
      endIcon={icon ? <div className="btnItmContainer">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default Buttons;
