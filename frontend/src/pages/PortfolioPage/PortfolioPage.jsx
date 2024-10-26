import React from 'react'
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

const PortfolioPage = () => {
    const[theme] = useTheme()
    return (
      <>
      <div id={theme}>
        <MobileNav/>
        <Layout />
        <div className="container">
          <About />
          <Education theme={theme}/>
          <TechStack />
          <Projects />
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