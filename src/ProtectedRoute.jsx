import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn]);

  return children;
};
