import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/Courses.css';

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const courseDetails = [
    // course data hierarchy (chronological order)
    {
        title: "SCDF-Dell Lifesavers’ Innovation Challenge 2025",
        img: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/SCDFHackathon/1.jpg",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/SCDFHackathon/2.jpg"
        ]
    },
    {
        title: "Global Startup Hackathon Challenge 2021",
        img: ["https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/GEIP.png"]
    }
]

const Courses = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='courses'>
            <section className="headerText">
                <h1>Courses</h1>
                <p>Courses that I have attended to further enrich my knowledge.</p>
                <hr></hr>
            </section>
            <section className="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2025"
                        dateClassName="courseDate"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>SCDF-Dell Lifesavers’ Innovation Challenge 2025</b></h3>
                        <h5 className="vertical-timeline-element-subtitle"><b>Participant</b></h5>
                        <br></br>
                        <div className="img-container">
                            <img
                                className="course-image"
                                src={courseDetails[0].img[0]}
                                alt="project-image"
                                onClick={handleShow}
                            />
                            <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={show}
                                onHide={handleClose}
                            >
                                <Modal.Header closeButton>
                                    <p className = "course-title">{courseDetails[0].title}</p>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel>
                                        {courseDetails[0].img.map((images, index) => (
                                            <Carousel.Item>
                                                <LazyLoadImage className="slideshowImage" src={images} />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button class="btn-close-modal" onClick={handleClose}>
                                        <span>Close</span>
                                    </button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <p>Proposed an application and business system to allow Singaporean civilians to learn first-aid and apply their skills in real situations.</p>
                        <ul>
                            <li>
                                <a href="https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/SCDFHackathon/CODEREDY_SCDF+Competition.pdf"  target="_blank"><b>
                                    Research and Development Document
                                </b></a>
                            </li>
                            <li>
                                <a href="https://www.figma.com/design/OWsX7x37rRJtumgC3WtXj2/Untitled?node-id=0-1&t=WH8aIT5hkuEcntPo-1"  target="_blank"><b>
                                    Figma Mockup Prototype
                                </b></a>
                            </li>
                            
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="September 2021 - March 2022"
                        dateClassName='courseDate'
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"><b>Global Startup Hackathon Challenge 2021</b></h3>
                        <h4 className="vertical-timeline-element-subtitle"><b>Global Entrepreneurship Internship Program</b></h4>
                        <h5 className="vertical-timeline-element-subtitle"><b>Finalist (Most Innovative Solution)</b></h5>
                        <br></br>
                        <div className="img-container">
                            <img
                                className="course-image"
                                src={courseDetails[1].img[0]}
                                alt="project-image"
                            />
                        </div>
                        <br></br>
                        <ul>
                            <li><b><a href="https://www.credential.net/f9799c14-4e32-4045-afd3-13d44cba5855" target="_blank" >Certificate of Completion</a></b></li>
                            <li><b><a href="https://docs.google.com/presentation/d/1FVPySaJlVgMsnfK3hPkPKQUq01tlbF9Wpal0aErMxXs/edit?usp=sharing" target="_blank">Presentation Pitch Deck</a></b></li>
                        </ul>
                        <p>Collaborated with Ngee Ann Polytechnic students to pitch a collective travel saving application targeted for youths and millenials.</p>
                        <p><b>Learning Outcomes:</b></p>
                        <ul>
                            <li> Drafting a Lean Canvas template to understand the current market's demands.</li>
                            <li> Understanding market validation, opportunity & competition.</li>
                            <li> Attaining customer acquisition and revenue.</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>

        </div>
    )
}


export default Courses;