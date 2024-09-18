import React from 'react';
import './App.css';
import TabPanel from "./components/TabPanel";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Minigame from "./pages/Minigame";
import Resume from "./pages/Resume";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Background from "./components/Background";
import {Slide} from "@mui/material";
import SlideIn from "./components/SlideIn";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})


function App() {
    const tabs = [
        {
            name: 'About Me',
            content: <About/>
        },
        {
            name: 'Experience',
            content: <Experience/>
        },
        {
            name: 'Projects',
            content: <Projects/>
        },
        {
            name: 'Contact',
            content: <Contact/>
        },
        {
            name: 'Resume',
            content: <Resume/>
        },
        // {
        //     name: 'Minigame',
        //     content: <Minigame/>
        // }
    ]
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <div style={{zIndex: -1, position: "fixed"}}>
            <Background/>
          </div>
          <TabPanel tabs={tabs}/>
      </ThemeProvider>
);
}

export default App;
