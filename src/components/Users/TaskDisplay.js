import React from "react";
import Card from "../UI/Card";
import "./TaskDisplay.css";
import dele from "../../img/delete.svg";
import Tick from "../../img/Tick.svg";
import bell from "../../img/bell.svg";
import Calendar from "../../img/Calendar.svg";
import Notes from "../../img/Notes.svg";
import Add from "../../img/Add.svg";
const TaskDisplay = (props) => {
  return (
    <div>
      <div className="header"></div>
      <div className="TaskInsider">
        <div className="TaskHeading">
          Use ChatGPT to create a general purpose trading algorithm that could
          predict the dogecoin fluctuations in real time and notify me on time.
        </div>
        <div className="tasklist">
          <div className="TaskCheckList">
            <img src={Add}></img>
            <div className="TaskChecker">Checklist</div>
          </div>

          <div className="TaskCheckL">
            <div className="TaskChecker">Notes</div>
            <img src={Notes}></img>
          </div>

          <div className="TaskCheckL">
            <div className="TaskChecker">Today</div>
            <img src={Calendar}></img>
          </div>

          <div className="TaskCheckL2">
            <div className="TaskChecker">On the day at 12:00PM</div>
            <img src={bell} width="12" height="14"></img>
          </div>
        </div>
      </div>
      <button className="taskopenclose">
        <img src={dele}></img>
        <img src={Tick}></img>
      </button>
    </div>
  );
};

export default TaskDisplay;
