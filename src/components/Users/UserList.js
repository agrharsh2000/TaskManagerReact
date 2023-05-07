import React from "react";
import Card from "../UI/Card";
import "./UserList.css";
import bell from "../../img/bell.svg";
const UserList = (props) => {
  const handleUserListClick = (id) => {
    props.onClick(id);
  };
  return (
    <div className="users">
      {props.users.map((user) => (
        <Card
          className="tasks"
          key={user.id}
          onClick={() => handleUserListClick(user.id)}
        >
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
