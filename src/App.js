import './App.css';
import './index.css';

import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home'
import Projects from './pages/projects'
import Courses from './pages/courses';
import Employment from './pages/employment';
import Education from './pages/education';
import SchoolProjects from './pages/school-projects';
import PersonalProjects from './pages/personal-projects';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/navbar';
import Footer from './components/footer';
import Aurora from './components/aurora';


//animated router handler
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<PageWrapper><Home /></PageWrapper>}></Route>
        <Route path='/portfolio' element={<PageWrapper><Home /></PageWrapper>}></Route>
        <Route path='/employment' element={<PageWrapper><Employment /></PageWrapper>}></Route>
        <Route path='/projects' element={<PageWrapper><Projects /></PageWrapper>}></Route>
        <Route path='/personal-projects' element={<PageWrapper><PersonalProjects /></PageWrapper>}></Route>
        <Route path='/school-projects' element={<PageWrapper><SchoolProjects /></PageWrapper>}></Route>
        <Route path='/education' element={<PageWrapper><Education /></PageWrapper>}></Route>
        <Route path='/courses' element={<PageWrapper><Courses /></PageWrapper>}></Route>
      </Routes>
    </AnimatePresence>
  )
}

// transition animation
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}


// main skeleton
function App() {
  return (
    <div>
      <NavBar />
      <Aurora >
        colorStops={["#FFFFFF", "#00FFAA", "#00EEFF"]}
        speed={0.5}
      </Aurora>
      <AnimatedRoutes />
      <Footer />
    </div>

  );
}

export default App;
