import React from "react";

import classes from "./Header.module.css";

import mealsImage from "../assets/meals.jpg";
import HeaderCardButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>My Restaurant</h1>
        <HeaderCardButton>Cart</HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table of food." />
      </div>
    </>
  );
};

export default Header;
