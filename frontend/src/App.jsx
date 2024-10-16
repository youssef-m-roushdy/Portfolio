import Layout from "./components/Layout/Layout";
import MobileNav from "./components/MobileNav/MobileNav";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";


function App() {
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
  );
}

export default App;
