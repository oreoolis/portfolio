import React, { Component, useState } from 'react';
import './Projects.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Card, Carousel } from 'react-bootstrap';

import img1 from '../img/proj1-1.png'
import img2 from '../img/proj1-2.png'
import img3 from '../img/proj1-3.png'
import img4 from '../img/proj2-1.png'
import img5 from '../img/proj2-2.png'
import img6 from '../img/proj3-1.png'
import img7 from '../img/proj3-2.png'
import img8 from '../img/proj3-3.png'
import img9 from '../img/proj3-4.png'
import img10 from '../img/proj4-1.png'
import img11 from '../img/proj4-2.png'
import img12 from '../img/proj4-3.png'
import img13 from '../img/proj4-4.png'
import img14 from '../img/proj5-1.png'
import img15 from '../img/proj5-2.png'
import img16 from '../img/proj5-3.png'
import img17 from '../img/proj5-4.png'
import img18 from '../img/proj5-5.png'
import img19 from '../img/proj6-1.png'
import img20 from '../img/proj6-2.png'
import img21 from '../img/proj7-1.png'
import img22 from '../img/proj7-2.png'
import img23 from '../img/proj7-3.png'
import img24 from '../img/proj7-4.png'
import img25 from '../img/proj7-5.png'


class Projects extends Component {

    componentDidMount(){
        Aos.init();
        
    }

    state = {} 
    
    render() { 
        return (
            <div className = "projects" >
                <div className ="header">
                    <div data-aos = "zoom-in-up"   className = "headerText">
                        <h1>Projects</h1>
                        <p>All projects that I have completed during my Polytechnic curriculum.</p>
                        <hr></hr>
                    </div>
                </div>
                
                <div className = "proj" data-aos="fade-right"  >
                    <div className = "projDesc">
                        <h1>Music Player</h1>
                        <h4>Android Studio</h4>
                        <hr></hr>
                        <li> Songs and album covers are loaded from an API.</li>
                        <li> Serves basic music player functionalities such as looping, shuffling, fast forwarding through the use of arrays.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "mobileImage" src={img1}/>
                    </div>
                </div>

                <div className = "proj" data-aos="fade-right"  >
                    <div className = "projDesc">
                        <h1>Restaurant Review Website</h1>
                        <h4>HTML, CSS, XAMPP, mySQL</h4>
                        <hr></hr>
                        <li> Users are able to read information about their favorite restaurants and leave reviews.</li>
                        <li> Utilises a Google Maps API to visualize the location of the restaurant.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "desktopImage" src={img4}/>
                    </div>
                </div>

                <div className = "proj" data-aos="fade-right"  >
                    <div className = "projDesc">
                        <h1>Learning Management System Portal</h1>
                        <h4>MEAN Stack: MongoDB, Express, Angular.js, Node.js</h4>
                        <hr></hr>
                        <li> Utilises a chatbot where portal administrators are able to add or remove questions based on students' inputs.</li>
                        <li> Student users are able to attempt graded quizzes created by portal administrators and interact with the chatbot.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "desktopImage" src={img6}/>
                    </div>
                </div>

                <div className = "proj" data-aos="fade-right"  >
                    <div className = "projDesc">
                        <h1>Recipe Creation and Compilation Mobile Application</h1>
                        <h4>Android Studio, Ionic, Firebase</h4>
                        <hr></hr>
                        <li> Allows users to compile recipes of their own or save from online websites.</li>
                        <li> Integrates with a Google login as a user login/registration alternative.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "mobileImage" src={img10}/>
                    </div>
                </div>

                <div className = "proj" data-aos="fade-right"  >
                    <div className = "projDesc">
                        <h1>Covid-19 Cases Dashboard</h1>
                        <h4>React.js, Node.js, .NET Framework APIs</h4>
                        <hr></hr>
                        <li> Displays the number of Covid-19 cases using a Google Pie Chart API.</li>
                        <li> Integrates an external Authentication login (Auth0) that allows administrators to edit data.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "desktopImage" src={img14}/>
                    </div>
                </div>

                <div className = "proj" data-aos="fade-right"  >
                    <div className = "projDesc">
                        <h1>Student Grade Predictor</h1>
                        <h4>HTML, CSS, Python</h4>
                        <hr></hr>
                        <li> A simple website that predicts the grade of the student based on environmental or social factors.</li>
                        <li> Utilises Python machine learning data, libraries and methods to calculate the grade.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "desktopImage" src={img19}/>
                    </div>
                </div>

                <div className = "proj" data-aos="fade-right" >
                    <div className = "projDesc">
                        <h1>APD Labds Events Management Portal</h1>
                        <h4>Angular, Node.js, .NET Framework APIs</h4>
                        <hr></hr>
                        <li> Allows users to create, edit and attend events created, based on their user permissions.</li>
                        <li> Implements a payment API (Stripe) for administrator registration and event attendance.</li>
                    </div>
                    <div className = "projImg">
                        <LazyLoadImage className = "desktopImage" src={img21}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Projects;