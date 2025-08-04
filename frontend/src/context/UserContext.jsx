import React, { useState, createContext } from "react";

// Create and export the context
const UserDataContext = createContext();

// Main Context Provider Component
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: ""
    },
    email: "",
    password: ""
  });

  return (
    <UserDataContext.Provider value={{user, setUser}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
export { UserDataContext };
