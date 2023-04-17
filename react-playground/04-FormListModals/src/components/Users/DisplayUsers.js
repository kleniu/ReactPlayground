import React from "react";

import classes from "./DisplayUsers.module.css";
import Card from "../UI/Card";

const DisplayUsers = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old.)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayUsers;
