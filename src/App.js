import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import "./App.css";
import TaskDisplay from "./components/Users/TaskDisplay";
import DUMMY_DATA from "./components/Users/dummyData";
import SOMEDAY_DATA from "./components/Users/somedayData";

function App() {
  const [showTaskDisplay, setShowTaskDisplay] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleUserListClick = (id) => {
    const task = DUMMY_DATA.find((task) => task.id === id);
    console.log(task);

    setSelectedTask(task);
    setShowTaskDisplay(true);
  };

  const handleDateChange = (date) => {
    if (selectedTask) {
      const updatedTask = { ...selectedTask, date };
      setSelectedTask(updatedTask);
    }
  };

  const handleTimeChange = (time) => {
    if (selectedTask) {
      const updatedTask = { ...selectedTask, time };
      setSelectedTask(updatedTask);
    }
  };

  return (
    <div>
      {showTaskDisplay ? (
        <>
          <TaskDisplay
            users={selectedTask}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
          />
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
