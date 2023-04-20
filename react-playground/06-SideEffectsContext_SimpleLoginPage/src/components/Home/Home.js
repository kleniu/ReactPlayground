import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import GlobalContext from '../../state/global-data';

const Home = (props) => {
  const ctxGlobal = useContext(GlobalContext);
 
  const buttonMakeDarkHandler = () => {
    //console.log("DEBUG theme button clicked");
    ctxGlobal.onThemeChange('DARK');
  }

  const buttonMakeLightHandler = () => {
    //console.log("DEBUG theme button clicked");
    ctxGlobal.onThemeChange('LIGHT');
  }

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <p>Current Theme: {ctxGlobal.theme}</p>
      <Button onClick={buttonMakeDarkHandler}>Change theme to "DARK"</Button>
      <p></p>
      <Button onClick={buttonMakeLightHandler}>Change theme to "LIGHT"</Button>
    </Card>
  );
};

export default Home;

// onClick={ctxGlobal.onThemeChange('DARK')}
