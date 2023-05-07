import React, { useState } from "react";
import Card from "../UI/Card";
import "./TaskDisplay.css";

import DUMMY_DATA from "./dummyData";

import dele from "../../img/delete.svg";
import Tick from "../../img/Tick.svg";
import bell from "../../img/bell.svg";
import Calendar from "../../img/Calendar.svg";
import Notes from "../../img/Notes.svg";
import Add from "../../img/Add.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskDisplay = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date(props.users.date));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedTime, setSelectedTime] = useState(props.users.alarmTime);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [notesInput, setNotesInput] = useState("");
  const [notes, setNotes] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString();
    props.onDateChange(formattedDate);
  };

  const handleCalendarClick = () => {
    setShowDatePicker(true);
  };

  const handleDatePickerClose = () => {
    setShowDatePicker(false);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    props.onTimeChange(time);
  };

  const handleTimeClick = () => {
    setShowTimePicker(true);
  };

  const handleTimePickerClose = () => {
    setShowTimePicker(false);
  };

  const handleNotesInputChange = (event) => {
    setNotesInput(event.target.value);
  };

  const handleNotesInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setNotes(notesInput);
      setNotesInput("");
    }
  };

  return (
    <div className="task-display-container">
      <div className="header" onClick={props.onHeaderClick}></div>
      <div className="TaskInsider">
        <div className="TaskHeading">{props.users.taskDescription}</div>

        <div className="tasklist">
          <div className="TaskCheckList">
            <img src={Add} alt=""></img>
            <div className="TaskChecker">Checklist</div>
          </div>

          <div className="TaskCheckL">
            {notes ? (
              <div className="TaskChecker">{notes}</div>
            ) : (
              <div className="NotesInputWrapper">
                <input
                  type="text"
                  value={notesInput}
                  onChange={handleNotesInputChange}
                  onKeyDown={handleNotesInputKeyDown}
                  placeholder="Notes"
                />
              </div>
            )}
            <img src={Notes} alt=""></img>
          </div>

          <div className="TaskCheckL">
            <div className="TaskChecker">
              {selectedDate.toLocaleDateString()}
            </div>
            <div onClick={handleCalendarClick}>
              <img src={Calendar} alt=""></img>
            </div>
            {showDatePicker && (
              <div className="datepicker-wrapper">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  calendarClassName="custom-datepicker"
                  withPortal
                />
                <button onClick={handleDatePickerClose}>Close</button>
              </div>
            )}
          </div>

          <div className="TaskCheckL2">
            <div className="TaskChecker">{selectedTime}</div>
            <div onClick={handleTimeClick}>
              <img src={bell} alt="" width={14} height={14}></img>
            </div>
            {showTimePicker && (
              <div className="timepicker-wrapper">
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(event) => handleTimeChange(event.target.value)}
                />
                <button onClick={handleTimePickerClose}>Close</button>
              </div>
            )}
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
