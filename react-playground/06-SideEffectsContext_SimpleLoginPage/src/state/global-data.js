import React, { useState, useEffect } from "react";

const defaultGlobalState = {
  isLoggedIn: false,
  userEmail: "",
  userToken: "",
  theme: "LIGHT",
}

const GlobalContext = React.createContext({
  ...defaultGlobalState,
  onLogout: () => {},
  onLogin: (email, password) => {},
  onThemeChange: (theme) => {},
});

export const GlobalContextProvider = (props) => {
  const [globalState, setGlobalState] = useState(defaultGlobalState);

  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const savedUserEmail = localStorage.getItem("userEmail");
    const savedUserToken = localStorage.getItem("userToken");
    const savedTheme = localStorage.getItem("theme");

    if (savedIsLoggedIn === "1") {
      setGlobalState((prevGlobalState) => {
        return {
          ...prevGlobalState,
          isLoggedIn: true,
          userEmail: savedUserEmail,
          userToken: savedUserToken,
          theme: savedTheme,
        };
      });
    }
  }, []);

  const logoutHandler = () => {
    setGlobalState(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userToken");
      localStorage.removeItem("theme");
      return defaultGlobalState;
    });
  };

  const loginHandler = (email, password) => {
    setGlobalState((prevGlobalState) => {
      //console.log('DEBUG: loginHandler', prevGlobalState);
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userToken", password);
      localStorage.setItem("theme", prevGlobalState.theme);
      return {
        ...prevGlobalState,
        isLoggedIn: true,
        userEmail: email,
        userToken: password
      };
    });
  };

  const changeThemeHandler = (theme) => {
    //console.log('DEBUG changeThemeHandler theme=',theme);
    setGlobalState((prevGlobalState) => {
      localStorage.setItem("theme", theme);
      return {
        ...prevGlobalState,
        theme: theme,
      };
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: globalState.isLoggedIn,
        userEmail: globalState.userEmail,
        userToken: globalState.userToken,
        theme: globalState.theme,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onThemeChange: changeThemeHandler
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
