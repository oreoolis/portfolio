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
                        <p>Currently a Year 3 student.</p>
                        <p>Completed modules in:</p>
                        <ul>
                            <li>Operating Systems and Networking</li>
                            <li>Web Application Development 1 & 2 <b>(PHP, Supabase, Vue.js)</b></li>
                            <li>Algorithms and Programming</li>
                            <li>Collaborative Software Development <b>(Java SpringBoot)</b></li>
                            <li>Enterprise Solution Development <b>(Python FastAPI)</b></li>
                            <li>Enterprise Solution Management <b>(Microsoft Azure, Grafana)</b></li>
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
                </VerticalTimeline>
            </section>
            
        </div>
        
    );
}

export default Education;