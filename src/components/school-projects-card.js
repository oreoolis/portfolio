import './component-css/projects-card.css';
import { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import { LazyLoadImage } from 'react-lazy-load-image-component';


// project data hierarchy
const schoolProjectItems = [
    {
        title: "APD Labs Events Management Portal",
        subheading: "Polytechnic Final Year Project",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/apdLabsPortal/proj7-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/apdLabsPortal/proj7-2.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/apdLabsPortal/proj7-3.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/apdLabsPortal/proj7-4.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/apdLabsPortal/proj7-5.png"
        ],
        desc: [
            "Allows users to create, edit and attend events created, based on their user permissions.",
            "Implements a payment API (Stripe) for administrator registration and event attendance."
        ],
        skills: ["Angular", "Node.JS", "Visual Studio C++ (.NET)", "Stripe"],
        repo: "https://github.com/oreoolis/APDLabsApplication"
    },
    {
        title: "Student Grade Predictor",
        subheading: "Machine Learning for Developers",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/gradePredictor/proj6-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/gradePredictor/proj6-2.png"
        ],
        desc: [
            "A simple website that predicts the grade of the student based on environmental or social factors.",
            "Utilises Python libraries to compute imported data from Kaggle to output a predicted grade."
        ],
        skills: ["HTML", "CSS", "Python"],
        repo: "https://github.com/oreoolis/StudentGradePredictor"
    },
    {
        title: "Covid-19 Cases Dashboard",
        subheading: "Microservices",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/covidDashboard/proj5-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/covidDashboard/proj5-2.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/covidDashboard/proj5-3.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/covidDashboard/proj5-4.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/covidDashboard/proj5-5.png"
        ],
        desc: [
            "Allows users to create, update, and delete statistics of COVID-19 cases.",
            "Displays the number of Covid-19 cases using a Google Pie Chart API.",
            "Integrates an external Authentication login (Auth0) that allows administrators to edit data."
        ],
        skills: ["React.JS", "Node.JS", "Visual Studio C++ (.NET)", "Auth0"],
        repo: "https://github.com/oreoolis/CovidDashboard"
    },
    {
        title: "Recipe Creation and Compilation Mobile Application",
        subheading: "Mobile Application Development",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/confitRecipeApp/proj4-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/confitRecipeApp/proj4-2.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/confitRecipeApp/proj4-3.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/confitRecipeApp/proj4-4.png"
        ],
        desc: [
            "Allows users to compile recipes of their own or save from online websites.",
            "Recipes and user data is stored and retrieved from Google Firebase",
            "Integrates with a Google login as a user login/registration alternative."
        ],
        skills: ["Android Studio", "Java", "Ionic Native", "Google Firebase"]
    },
    {
        title: "Learning Management System Portal",
        subheading: "Full Stack Web Development",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/quizPortal/proj3-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/quizPortal/proj3-2.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/quizPortal/proj3-3.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/quizPortal/proj3-4.png"
        ],
        desc: [
            "Simulates a chatbot where portal administrators are able to add or remove questions based on students' inputs.",
            "Student users are able to attempt graded quizzes created by portal administrators and interact with the chatbot."
        ],
        skills: ["MongoDB", "Express", "Angular.JS", 'Node.JS']
    },
    {
        title: "Restaurant Review Website",
        subheading: "Coding and Development Project + Database Application Project",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/restaurantReview/proj2-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/restaurantReview/proj2-2.png"
        ],
        desc: [
            "Users are able to read information about their favorite restaurants and leave reviews.",
            "Utilises a Google Maps API to visualize the location of the restaurant."
        ],
        skills: ["HTML", "CSS", "XAMPP", 'mySQL']
    },
    {
        title: "Music Player",
        subheading: "Computational Thinking + User Experience and Interface Design",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/snappyMusicPlayer/proj1-1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/snappyMusicPlayer/proj1-2.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/snappyMusicPlayer/proj1-3.png"
        ],
        desc: [
            "Serves basic music player functionalities such as looping, shuffling, fast forwarding through the use of arrays.",
            "Songs and album covers are loaded from a school-provided API."
        ],
        skills: ["Android Studio", "Java"]
    }
]

function VerticallyCenteredModal({ item, ...props }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <h4>{item.title}</h4>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    {item.image.map((images, index) => (
                        <Carousel.Item>
                            <LazyLoadImage className="slideshowImage" src={images} />
                            <Carousel.Caption className="captions">
                                {item.title}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <button class="btn-close-modal" onClick={props.onHide}>
                    <span>Close</span>
                </button>
            </Modal.Footer>
        </Modal>
    );
}

const ProjectItem = ({ item, index }) => {

    const [modalShow, setModalShow] = useState(false);

    let lgVal = 0;
    if (index % 2 === 0) {
        lgVal = 7;
    } else {
        lgVal = 5;
    };
    return (
        <Col xs={12} lg={lgVal}>
            <div className="card">
                <div className="content">
                    <div className="project-image-container">
                        <img
                            className="project-image"
                            src={item.image[0]}
                            alt="project-image"
                            onClick={() => setModalShow(true)}
                        />
                    </div>
                    <VerticallyCenteredModal
                        item={item}
                        show={modalShow}
                        dialogClassName="modal-90w"
                        onHide={() => setModalShow(false)}
                    />
                    <div className = "card-title">
                        <h4>{item.title}</h4>
                        <h5>{item.subheading}</h5>
                    </div>
                    <p className="para">
                        <ul>
                            {item.desc.map((description, descIndex) => (
                                <li key={descIndex}>{description}</li>
                            ))}
                        </ul>
                    </p>
                    <Row>
                        {item.skills.map((skill, skillIndex) => (
                            <Col key={skillIndex}>
                                <button className="btn-skills">{skill}</button>
                            </Col>
                        ))}
                    </Row>
                    {/* conditional rendering for github repositories (to be updated) */}
                    {item.repo && (
                        <button
                            className="btn-repo"
                            onClick={() => window.open(item.repo, '_blank')}
                        >
                            View Repository
                        </button>
                    )}
                </div>
            </div>
        </Col>
    );
};

const SchoolProjectsCard = () => {
    return (
        <>
            {schoolProjectItems.map((item, index) => (
                <ProjectItem key={index} item={item} index={index} />
            ))}
        </>
    );
}

export default SchoolProjectsCard;
