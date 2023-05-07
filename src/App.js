import React, { useState, useEffect } from "react";
import UserList from "./components/Users/UserList";
import "./App.css";
import TaskDisplay from "./components/Users/TaskDisplay";
import SOMEDAY_DATA from "./components/Users/somedayData";
import localforage from "localforage";
let DUMMY_DATA = [
  {
    id: "e1",
    taskDescription:
      "Write more content on Linkedin and start increasing online presence",
    alarmTime: "10:00 PM",
    date: "2019-02-11",
  },
  {
    id: "e2",
    taskDescription:
      "Use ChatGPT to create a general purpose trading algorithm that could predict the dogecoin fluctuations in real time and notify me on time.",
    alarmTime: "11:00 PM",
    date: "2019-02-21",
  },
  {
    id: "e3",
    taskDescription: "Eat the biscuits with chai ☕",
    alarmTime: "10:00 PM",
    date: "2019-02-10",
  },
  {
    id: "e4",
    taskDescription: "Go for a walk with Jenifer’s doggu 🐕",
    alarmTime: "10:00 PM",
    date: "2019-02-1",
  },
  {
    id: "e5",
    taskDescription:
      "Read data driven applications before going to bed tonight",
    alarmTime: "10:00 PM",
    date: "2019-02-16",
  },
];

function App() {
  const [showTaskDisplay, setShowTaskDisplay] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    localforage.getItem("dummyData").then((value) => {
      if (value) {
        setDummyData(value);
      } else {
        setDummyData(DUMMY_DATA);
        localforage.setItem("dummyData", DUMMY_DATA);
      }
    });
  }, []);

  const handleUserListClick = (id) => {
    const task = dummyData.find((task) => task.id === id);

    setSelectedTask(task);
    setShowTaskDisplay(true);
  };

  const handleDateChange = (date) => {
    if (selectedTask) {
      const updatedTask = { ...selectedTask, date };
      const index = dummyData.findIndex((task) => task.id === selectedTask.id);
      const updatedData = [...dummyData];
      updatedData[index] = updatedTask;
      setDummyData(updatedData);
      localforage.setItem("dummyData", updatedData);
      setSelectedTask(updatedTask);
    }
  };

  const handleTimeChange = (time) => {
    if (selectedTask) {
      const updatedTask = { ...selectedTask, alarmTime: time };
      const index = dummyData.findIndex((task) => task.id === selectedTask.id);
      const updatedData = [...dummyData];
      updatedData[index] = updatedTask;
      setDummyData(updatedData);
      localforage.setItem("dummyData", updatedData);
      setSelectedTask(updatedTask);
    }
  };

  const handleHeaderClick = () => {
    setShowTaskDisplay(false);
  };

  return (
    <div>
      {showTaskDisplay ? (
        <>
          <TaskDisplay
            users={selectedTask}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
            onHeaderClick={handleHeaderClick}
          />
        </>
      ) : (
        <>
          <h2 className="title">Schedule</h2>
          <div className="dayName">Today</div>
          <div className="dayNameDate">5 May</div>
          <UserList users={dummyData} onClick={handleUserListClick} />
          <div className="dayName">Someday</div>
          <UserList users={SOMEDAY_DATA} onClick={handleUserListClick} />
        </>
      )}
    </div>
  );
}

export default App;
