import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  // the function App() will be called every time on initial rendering and when defined state is changed! 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // this will be executed only once - on initial rendering
  //      it will never be executed when isLoggedIn state is changed (no dependencies)
  useEffect(
    () => {
      // this will read key/value from browser local storage
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      if (storedLoginStatus === '1') {
        setIsLoggedIn(true);
      }
    },
    [] // no dependencies because we do not modify the state in useEffect function
  );

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
