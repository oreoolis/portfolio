import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/Employment.css'

const Employment = () => {
    return (
        <div className="employment">
            <section className="headerText">
                <h1>My Employment History</h1>
                <p>All employment experience are listed in chronological order.</p>
                <hr></hr>
            </section>
            <section className="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="July 2022 - May 2024"
                        dateClassName="empDate"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>Singapore Civil Defence Force</b></h3>
                        <h4 className="vertical-timeline-element-subtitle"><b>Assistant Medical Trainer</b></h4>
                        <h5 className="vertical-timeline-element-subtitle"><b>Singapore</b></h5>
                        <p>Job Responsibilities:</p>
                        <ul>
                            <li>Assisted in conducting medical lessons and proficiency certification tests to force personnel and civilians nationwide. </li>
                            <li>Administrated manual data entry and verification of medical certification test results using <b>Microsoft Excel. </b></li>
                            <li>Organized various internal events within the force and facilitated inter-unit logistical communications among force personnel.</li>
                            <ul>
                                <li>
                                    Singapore Firefighters & Paramedics Challenge 2023
                                </li>
                            </ul>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2019 - April 2022"
                        dateClassName='empDate'
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>X0PA.Ai</b></h3>
                        <h4 className="vertical-timeline-element-subtitle"><b>Full Stack Engineer Intern</b></h4>
                        <h5 className="vertical-timeline-element-subtitle"><b>Singapore</b></h5>
                        <p>Job Responsibilities: </p>
                        <ul>
                            <li>Regulated full-stack maintenance and development of various software as a service (SaaS) products for various clients across Singapore (mySkillsFuture, Republic Polytechnic). </li>
                            <li>Utilized full-stack web technologies such as <b>React.js, PostgreSQL and Node.js,</b> alongside version control tools, such as <b>Git</b> and <b>Jira</b>, within an AGILE software development life-cycle.</li>
                            <li>Actively contributed to team development meetings by providing status reports on client tickets, application functionality and user interface.</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>
        </div>
    )
}

export default Employment;