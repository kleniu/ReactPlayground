import React, { useState } from "react";

import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if ( userName.trim().length === 0 || age.trim().length === 0 ) {
      return;
    }
    // + chat ensures that the age is number :) 
    if ( +age.trim() < 1) {
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
