import React from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const UserLogout = () => {
  const token = localStorage.getItem("token");

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    if(response.status === 200) {
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  })
 

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout