import { Outlet } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import { useEffect } from "react";

function App() {
  
  const isTokenExpired = (exp) => {
    return new Date().getTime() > exp * 1000;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("auth-token");
      if (!token) return; // No token, nothing to check

      try {
        const payload = jwtDecode(token);
        
        if (payload && payload.exp && isTokenExpired(payload.exp)) {
          localStorage.removeItem("auth-token");
          window.location.reload("/")
          clearInterval(interval); // Stop checking once the token is removed
          console.log("Token removed due to expiration.");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("auth-token");
        clearInterval(interval);
      }
    }, 1000 * 60); // Check every minute
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <Outlet />;
}

export default App;
