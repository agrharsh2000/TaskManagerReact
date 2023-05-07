import React, { useState } from "react";
import Card from "../UI/Card";
import "./TaskDisplay.css";
import dele from "../../img/delete.svg";
import Tick from "../../img/Tick.svg";
import bell from "../../img/bell.svg";
import Calendar from "../../img/Calendar.svg";
import Notes from "../../img/Notes.svg";
import Add from "../../img/Add.svg";
const TaskDisplay = (props) => {
  console.log(props.users);
  return (
    <div className="task-display-container">
      <div className="header"></div>
      <div className="TaskInsider">
        <div className="TaskHeading">{props.users.taskDescription}</div>
        <div className="tasklist">
          <div className="TaskCheckList">
            <img src={Add} alt=""></img>
            <div className="TaskChecker">Checklist</div>
          </div>

          <div className="TaskCheckL">
            <div className="TaskChecker">Notes</div>
            <img src={Notes} alt=""></img>
          </div>

          <div className="TaskCheckL">
            <div className="TaskChecker">{props.users.date}</div>
            <img src={Calendar} alt=""></img>
          </div>

          <div className="TaskCheckL2">
            <div className="TaskChecker">
              On the day at {props.users.alarmTime}
            </div>
            <img src={bell} width="12" height="14" alt=""></img>
          </div>
        </div>
      </div>
      <button className="taskopenclose">
        <img src={dele} alt=""></img>
        <img src={Tick} alt=""></img>
      </button>
    </div>
  );
};
export default TaskDisplay;
