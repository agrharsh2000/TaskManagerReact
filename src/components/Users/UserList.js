import React from "react";
import Card from "../UI/Card";
import "./UserList.css";
import bell from "../../img/bell.svg";
const UserList = (props) => {
  const handleUserListClick = () => {
    console.log("sharma");
    props.onClick();
  };
  return (
    <div className="users">
      {props.users.map((user) => (
        <Card className="tasks" onClick={props.onClick}>
          <div className="taskDesc"> {user.taskDescription} </div>
          <div className="taskSchedule">
            <img src={bell} />
            <div className="taskAlarmTime">{user.alarmTime}</div>
            <div className="taskAlarmDate">{user.date}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default UserList;
