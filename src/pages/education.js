import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/Education.css';


const Education = () => {
    return (
        <div className='education'>
            <section className = "headerText">
                <h1>My Education Pathway</h1>
                <p>All academic milestones are listed in chronological order.</p>
                <hr></hr>
            </section>
            <section className = "timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="August 2024 - Present"
                        dateClassName="schoolDate"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>Singapore Management University</b></h3>
                        <h4 className="vertical-timeline-element-subtitle"><b>B(Sc) Software Engineering</b></h4>
                        <h5 className="vertical-timeline-element-subtitle"><b>Singapore</b></h5>
                        <p>Currently a Year 2 student.</p>
                        <p>Completed modules in:</p>
                        <ul>
                            <li>Operating Systems and Networking</li>
                            <li>Web Application Development 1 <b>(HTML, PHP, SQL: myPHPAdmin)</b></li>
                            <li>Algorithms and Programming</li>
                            <li>Data Management <b>(MySQLWorkbench)</b></li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2019 - April 2022"
                        dateClassName='schoolDate'
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>Temasek Polytechnic</b></h3>
                        <h4 className="vertical-timeline-element-subtitle"><b>Diploma in Information Technology</b></h4>
                        <h5 className="vertical-timeline-element-subtitle"><b>Singapore</b></h5>
                        <p>Graduated with GPA 3.66.</p>
                        <p>Completed modules in: </p>
                        <ul>
                            <li>User Experience and Interface Design</li>
                            <li>Coding and Development Project + Database Application Project <b>(HTML, CSS, MySQLWorkbench)</b></li>
                            <li>Mobile App Development <b>(Ionic Native, Android Studio, Google Firebase)</b></li>
                            <li>Full Stack Web Development <b>(Angular, MongoDB)</b></li>
                            <li>Microservices <b>(ReactJS, Visual Studio C# ASP.NET Core)</b></li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Janurary 2015 - November 2018"
                        dateClassName='schoolDate'
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>Serangoon Secondary School</b></h3>
                        <h4 className="vertical-timeline-element-subtitle"><b>GCE 'O' Levels</b></h4>
                        <h5 className="vertical-timeline-element-subtitle"><b>Singapore</b></h5>
                        <p>Attained A2 grade in GCE 'O' Level Computing.</p>
                        <ul>
                            <li>Basic Network Systems & Computer Hardware</li>
                            <li>Python Programming</li>
                            <li>Microsoft Excel</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>
            
        </div>
        
    );
}

export default Education;

// class Education extends Component {
    
//     componentDidMount(){
//         Aos.init();
//     }
    
//     state = {  } 
//     render() { 
//         return (
//             <div className = "education">
//                 <div className ="box1">
//                     <div data-aos = "zoom-in-up" data-aos-duration = "500" className = "headerText">
//                         <h1>My Education Pathway</h1>
//                         <p>All academic achievements are listed in chronological order.</p>
//                         <hr></hr>
//                     </div>
//                 </div>

//                 <div className = 'educationContainer'>
//                     <div data-aos = "fade-right" className = "poly">
//                         <div className = "box2Text">
//                                 <div className = "jobs">
//                                     <h1>Diploma in Information Technology</h1>
//                                     <h4>Temasek Polytechnic</h4>
//                                     <h4>Graduated with GPA of 3.66 </h4>
//                                     <h6>April 2019 - April 2022</h6>
//                                     <hr></hr>
//                                     <p>Completed relevant web development modules such as:</p>
//                                     <li>Full Stack Web Development</li>
//                                     <li>Microservices</li>
//                                     <li>Mobile Application and Development</li>
//                                     <li>User Experience and Interface Design</li>
//                                     <li>Object Oriented Application Design</li>
//                                     <p>All projects completed within the curriculum are showcased under the <Link to ='/projects' style  = {{color: 'white'}}>Projects</Link> tab.</p>
//                                     <p>Selected to participate in the Global Entrepreneurship Internship Programme at Ngee Ann Polytechnic.</p>
//                                     <p><i>More information is listed under <Link to ="/courses" style  = {{color: 'white'}}>Courses.</Link></i></p>
//                                 </div>
//                                 <hr></hr>
//                             </div>     
//                     </div>

//                     <div data-aos = "fade-right" className = "poly">
//                         <div className = "box2Text">
//                                 <div className = "jobs">
//                                     <h1>GCE 'O' Levels</h1>
//                                     <h4>Serangoon Secondary School</h4>
//                                     <h6>January 2015 - November 2018</h6>
//                                     <hr></hr> 
//                                     <li><b>L1R4: 13</b></li>
//                                     <li><b>L1R5: 15</b></li>
//                                     <p>Attained <b>A2 grade</b> for subjects in <b>Computing</b> and <b>History</b>.</p>
//                                     <p>Full examination transcript is avaiable on my <a href ="https://www.linkedin.com/in/dwayne-otero-7693b1213/" style  = {{color: 'white'}}>LinkedIn</a>.</p>
//                                 </div>
//                                 <hr></hr>
//                             </div>     

//                     </div>
//                 </div>
//                 {/* <div className = "poly">  
//                     <Card className="text-center" data-aos = "flip-up"  data-aos-duration = "500" style={{ width: "100rem", height: "30rem", fontFamily: 'Rubik' }}>
//                         <Card.Header><h3>Temasek Polytechnic</h3></Card.Header>
//                         <Card.Body>
//                             <Card.Title><h4>Diploma in Information Technology</h4></Card.Title>
//                             <Card.Text>
//                             <h5>Graduated with GPA of 3.66.</h5>
//                             <p>Completed relevant web development modules such as:</p>
//                             <li>Full Stack Web Development</li>
//                             <li>Microservices</li>
//                             <li>Mobile Application and Development</li>
//                             <li>User Experience and Interface Design</li>
//                             <li>Object Oriented Application Design</li>
//                             <p>All projects completed within the curriculum are showcased under the <Link to ='/projects'>Projects</Link> tab.</p>
//                             <p>Selected to participate in the <a href = "#">Global Entrepreneurship Internship Programme</a> at Ngee Ann Polytechnic.</p>
//                             <p><i>More info. under <Link to ="/courses">Courses.</Link></i></p>
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">April 2019 - April 2022</Card.Footer>
//                     </Card>
//                 </div> */}

//                 {/* <div className = "secondarySchool">
//                     <Card className="text-center" data-aos="fade-up" data-aos-duration="500"style={{ width: "100rem", height: "20rem", fontFamily: 'Rubik' }}>
//                         <Card.Header><h3>Serangoon Secondary School</h3></Card.Header>
//                         <Card.Body>
//                             <Card.Title><h4>GCE 'O' Levels</h4></Card.Title>
//                             <Card.Text>
//                             <li><b>L1R4: 13</b></li>
//                             <li><b>L1R5: 15</b></li>
//                             <p>Attained <b>A2 grade</b> for subjects in <b>Computing</b> and <b>History</b>.</p>
//                             <i>Full examination transcript is avaiable on my <a href ="https://www.linkedin.com/in/dwayne-otero-7693b1213/">LinkedIn</a>.</i>
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">January 2015 - December 2018</Card.Footer>
//                     </Card>
//                 </div> */}

//             </div>
            
//         );
//     }
// }
 
// export default Education;