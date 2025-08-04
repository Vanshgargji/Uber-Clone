import React from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const CaptainLogout = () => {
  const token = localStorage.getItem("token");

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    if(response.status === 200) {
      localStorage.removeItem("token");
      return <Navigate to="/captain-login" replace />;
    }
  })
 

  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout