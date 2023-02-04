import Aos from 'aos';
import React, { Component } from 'react';
import './Employment.css' 
import 'aos/dist/aos.css';

class Employment extends Component {
    
    componentDidMount(){
        Aos.init();
    }

    state = {  } 
    render() { 
        return (
            <div data-aos="zoom-in" data-aos-duration = "500" className = "jobPage">
                <div className = "box1">
                    <div className = "box1Text">
                        <h1 className = "title">Employment History</h1>
                        <p className = "titleDesc">This page lists down the various companies I have contributed to.</p>
                        <hr></hr>
                    </div>     
                </div>

                <div className = "jobsContainer">
                    <div data-aos="fade-right" className = "box2">
                        <div className = "box2Text">
                            <div className = "jobs">
                                <h1>AFTERSHOCK PC, Singapore</h1>
                                <h4>Part-time Retail Salesperson</h4>
                                <h6>May 2022 - June 2022</h6>
                                <li> Assisted in the sales of various computer products for customers.</li>
                                <li> Attended to customers' queries regarding the performance and utility of various computer parts based on their use cases.</li>
                            </div>
                            <hr></hr>
                        </div>     
                    </div>


                    <div data-aos="fade-right" className = "box2">
                        <div  className = "box2Text">
                            <div className = "jobs">
                                <h1>X0PA Ai Pte. Ltd., Singapore</h1>
                                <h4>Junior Full Stack Web Developer Intern</h4>
                                <h6>September 2021 - February 2022</h6>
                                <li> Assisted in the development of various full stack web systems for the company's clients and themselves.</li>
                                <li> Utilized <b>React.js, MERN stack & Git</b> for development of full stack web systems.</li>
                                <li> Proactively collaborated with team members within various branches of the team to complete various user interface and functionalities during development.</li>
                            </div>
                            <hr></hr>     

                        </div>
                    </div>

                    <div data-aos="fade-right" className = "box2">
                        <div  className = "box2Text">
                            <div className = "jobs">
                                <h1>High End Communications Pte. Ltd., Singapore</h1>
                                <h4>Part-time Video Recording Engineer</h4>
                                <h6>December 2020 - December 2020</h6>
                                <li> Assisted in recording old video tapes into modern format & perform quality checks on recorded video.</li>
                            </div>
                            <hr></hr>
                        </div>    
                    </div>

                    <div data-aos="fade-right" className = "box2">
                        <div  className = "box2Text">
                            <div className = "jobs">
                                <h1>COMEX, Singapore</h1>
                                <h4>Part-time Computer Promoter</h4>
                                <h6>September 2019 - September 2019</h6>
                                <li> Promoted the sale of various laptop models and assisted customers' queries regarding various computer specifications.</li>
                            </div>
                            <hr></hr>
                        </div>     
                    </div>
                </div>

                

            </div>
        );
    }
}
 
export default Employment;