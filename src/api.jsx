import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from "react";

const register = async (firstName, lastName, email, college, password) => {
    const response = await axios.post('https://minihub-py.herokuapp.com/register', {
        firstName,
        lastName,
        college,
        email,
        password
    });
    return response.data;
};



const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user){
    localStorage.setItem("user", user);
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const response = await axios.post("https://minihub-py.herokuapp.com/login", {
        email,
        password,
      });
      if (response.data.message === "Login successful") {
        const user =  await axios.get(`https://minihub-py.herokuapp.com/user/${email}`);
        const user_data = JSON.stringify(user.data)
        console.log("Response API : " + response.data.message);
        console.log("User API : " + user_data);
        setUser(user_data);
      }
      console.log("User API 2 : " + JSON.stringify(user));
      return response.data;

    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};




export { AuthProvider, useAuth , register};


// export { register, login };