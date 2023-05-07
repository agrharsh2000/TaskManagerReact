import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";
import TaskDisplay from "./components/Users/TaskDisplay";

const DUMMY_DATA = [
  {
    id: "e1",
    taskDescription:
      "Write more content on Linkedin and start increasing online presence",
    alarmTime: "10:00 PM",
    date: "Today",
  },
  {
    id: "e2",
    taskDescription:
      "Use ChatGPT to create a general purpose trading algorithm that could predict the dogecoin fluctuations in real time and notify me on time.",
    alarmTime: "10:00 PM",
    date: "Today",
  },
  {
    id: "e3",
    taskDescription: "Eat the biscuits with chai ☕",
    alarmTime: "10:00 PM",
    date: "Today",
  },
  {
    id: "e4",
    taskDescription: "Go for a walk with Jenifer’s doggu 🐕",
    alarmTime: "10:00 PM",
    date: "Today",
  },
  {
    id: "e5",
    taskDescription:
      "Read data driven applications before going to bed tonight",
    alarmTime: "10:00 PM",
    date: "Today",
  },
];

const SOMEDAY_DATA = [
  {
    id: "e6",
    taskDescription: "Learn driving and also apply for my driver’s license 🚗",
    alarmTime: "10:00 PM",
    date: "Today",
  },
];

function App() {
  const [showTaskDisplay, setShowTaskDisplay] = useState(false);

  const handleUserListClick = () => {
    console.log("hello ji");
    setShowTaskDisplay(true);
  };

  return (
    <div>
      {showTaskDisplay ? (
        <>
          <TaskDisplay users={SOMEDAY_DATA} />
        </>
      ) : (
        <>
          <h2 className="title">Schedule</h2>
          <div className="dayName">Today</div>
          <div className="dayNameDate">5 May</div>
          <UserList users={DUMMY_DATA} onClick={handleUserListClick} />
          <div className="dayName">Someday</div>
          <UserList users={SOMEDAY_DATA} onClick={handleUserListClick} />
        </>
      )}
    </div>
  );
}

export default App;
