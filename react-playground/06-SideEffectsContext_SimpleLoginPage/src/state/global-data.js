import React, { useState, useEffect } from 'react';

const GlobalContext = React.createContext({
  isLoggedIn: false,
  userEmail: '',
  userToken: '',
  theme: '',
  onLogout: () => {},
  onLogin: (email, password) => {},
  onThemeChange: (theme) => {}
});

export const GlobalContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
