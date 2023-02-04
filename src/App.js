import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Projects from './pages/projects'
import Courses from './pages/courses';
import Employment from './pages/employment';
import Footer from './components/footer';
import Education from './pages/education';
import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path = '/' element ={<Home/>}></Route>
      <Route path = '/home' element ={<Home/>}></Route>
      <Route path = '/Employment' element = {<Employment></Employment>}></Route>
      <Route path = '/projects' element ={<Projects/>}></Route>
      <Route path = '/education' element = {<Education/>}></Route>
      <Route path = '/courses' element = {<Courses/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </>
    
  );
}

export default App;
