import React, { useEffect, useState, useContext } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { _user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUserProfile();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return <>{children}</>;
};

export default UserProtectedWrapper;
