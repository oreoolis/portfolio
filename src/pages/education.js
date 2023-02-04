import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom';
import './Education.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



class Education extends Component {
    
    componentDidMount(){
        Aos.init();
    }
    
    state = {  } 
    render() { 
        return (
            <div className = "education">
                <div className ="header">
                    <div data-aos = "zoom-in-up" data-aos-duration = "500" className = "headerText">
                        <h1>My Education Pathway</h1>
                        <p>All academic achievements are listed in chronological order.</p>
                    </div>
                </div>
                <hr>
                </hr>
                <div className = "poly">  
                    <Card className="text-center" data-aos = "flip-up"  data-aos-duration = "500" style={{ width: "100rem", height: "30rem", fontFamily: 'Rubik' }}>
                        <Card.Header><h3>Temasek Polytechnic</h3></Card.Header>
                        <Card.Body>
                            <Card.Title><h4>Diploma in Information Technology</h4></Card.Title>
                            <Card.Text>
                            <h5>Graduated with GPA of 3.66.</h5>
                            <p>Completed relevant web development modules such as:</p>
                            <li>Full Stack Web Development</li>
                            <li>Microservices</li>
                            <li>Mobile Application and Development</li>
                            <li>User Experience and Interface Design</li>
                            <li>Object Oriented Application Design</li>
                            <p>All projects completed within the curriculum are showcased under the <Link to ='/projects'>Projects</Link> tab.</p>
                            <p>Selected to participate in the <a href = "#">Global Entrepreneurship Internship Programme</a> at Ngee Ann Polytechnic.</p>
                            <p><i>More info. under <Link to ="/courses">Courses.</Link></i></p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">April 2019 - April 2022</Card.Footer>
                    </Card>
                </div>

                <div className = "secondarySchool">
                    <Card className="text-center" data-aos="fade-up" data-aos-duration="500"style={{ width: "100rem", height: "20rem", fontFamily: 'Rubik' }}>
                        <Card.Header><h3>Serangoon Secondary School</h3></Card.Header>
                        <Card.Body>
                            <Card.Title><h4>GCE 'O' Levels</h4></Card.Title>
                            <Card.Text>
                            <li><b>L1R4: 13</b></li>
                            <li><b>L1R5: 15</b></li>
                            <p>Attained <b>A2 grade</b> for subjects in <b>Computing</b> and <b>History</b>.</p>
                            <i>Full examination transcript is avaiable on my <a href ="https://www.linkedin.com/in/dwayne-otero-7693b1213/">LinkedIn</a>.</i>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">January 2015 - December 2018</Card.Footer>
                    </Card>
                </div>

            </div>
            
        );
    }
}
 
export default Education;