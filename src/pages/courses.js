import React, { Component } from 'react';
import './Courses.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';


class Courses extends Component {

    componentDidMount(){
        Aos.init();
    }

    state = {  }    
    render() { 
        return (
        <div className = "coursePage">
            <div className = "header">
                <div data-aos="zoom-in-up"  data-aos-duration="500" className = "headerText">
                    <h1>Courses</h1>
                    <p>Courses that I have attended to further enrich my knowledge.</p>
                </div>    
            </div>
            <hr></hr>
            <div className = "course1">
                <Card className="text-center" data-aos = "flip-up"  data-aos-duration = "500" style = {{width: "80rem", fontFamily: 'Rubik'}}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/636398381664829481/1064786033016836217/IMG_6138.JPG" style={{ objectFit: 'none', height:'30rem', width: "50rem'"}}/>
                    <Card.Body>
                        <Card.Title><h2>Global Entrepreneurship Internship Program</h2></Card.Title>
                        <Card.Text>
                        <h4>Ngee Ann Polytechnic</h4>
                        <h6><b>Finalist in the Global Startup Hackathon Challenge 2021</b></h6>
                        <h6><b>Most Innovative Solution</b></h6>
                        <p><a href = {"https://www.credential.net/f9799c14-4e32-4045-afd3-13d44cba5855"}>Certificate of Completion</a></p>
                        <p>Collaborated with Ngee Ann Polytechnic students to pitch a collective travel saving application targeted for youths and millenials.</p>
                        <p>Studied <u>multiple methods</u> of creating a pitch to ensure that concepts stay relevant within the current market of similar applications.</p>
                        <hr className = "divider"></hr>
                        <li> Drafting a Lean Canvas template to understand the current market's demands.</li>
                        <li> Understanding market validation, opportunity & competition.</li>
                        <li> Attaining customer aquisition and revenue.</li>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">September 2021 - March 2022</Card.Footer>

                </Card>
            </div>
        </div>
        );
    }
}
 
export default Courses;