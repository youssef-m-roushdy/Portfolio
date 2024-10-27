import React, { useEffect, useState } from 'react'
import MobileNav from '../../components/MobileNav/MobileNav'
import Layout from '../../components/Layout/Layout'
import About from '../About/About'
import Education from '../Education/Education'
import TechStack from '../TechStack/TechStack'
import Projects from '../Projects/Projects'
import WorkExp from '../WorkExp/WorkExp'
import Contact from '../Contact/Contact'
import ScrollToTop from 'react-scroll-to-top'
import { useTheme } from '../../context/ThemeContext'
import { jwtDecode } from 'jwt-decode';

const PortfolioPage = () => {
  const [theme] = useTheme();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the token
        setUser(decoded); // Set user data to state
        
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);
  
  console.log(user)

    return (
      <>
      <div id={theme}>
        <MobileNav/>
        <Layout user={user} setUser={setUser}/>
        <div className="container">
          <About />
          <Education theme={theme}/>
          <TechStack />
          <Projects user={user}/>
          <WorkExp theme={theme}/>
          <Contact />
        </div>
        </div>
        <ScrollToTop
          smooth
          color="#f29f67"
          style={{
            backgroundColor: "#1e1e2c",
            WebkitBorderRadius: "80px",
            display: "inline-block",
          }}
        />
      </>
    )
}

export default PortfolioPage