import './component-css/projects-card.css';
import { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const personalProjectsItems = [
    {
        title: "HAWKR Restaurant Website",
        subheading: "E-Commerce/Marketing",
        image: [
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/clientProjects/hawkrMenuApp/hawkrImg1.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/clientProjects/hawkrMenuApp/hawkrImg2.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/clientProjects/hawkrMenuApp/hawkrImg3.png",
            "https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/clientProjects/hawkrMenuApp/hawkrImg4.png"
        ],
        desc: [
            "A website that aims to increase customer engagement of my cousin's Philippine-based restaurant by providing essential details. ",
            "Users are able to view the menu, contact the restaurant and view business goals and achievements in a centralized location."
        ],
        skills: ["React.JS", "AWS S3"],
        rep: "https://github.com/oreoolis/HAWKR-Menu",
        website: "https://hawkr-menu.vercel.app"
    }
];

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
    const viewRepo = () => {
        window.open(item.rep, "_blank")
    }
    return (
        <Col sm>
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
                    <div className="para">
                        <ul>
                            {item.desc.map((description, descIndex) => (
                                <li key={descIndex}>{description}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <Row>
                        {item.skills.map((skill, skillIndex) => (
                            <Col key={skillIndex}>
                                <button className="btn-skills">{skill}</button>
                            </Col>
                        ))}
                    </Row>
                    <button className="btn-website"onClick={() => window.open(item.website, '_blank')}>
                        Visit The Website
                    </button>
                    <button className="btn-repo" onClick={viewRepo}>
                        View Repository
                    </button>
                </div>
            </div>
        </Col>
    );
};

const PersonalProjectsCards = () => {
    return (
        <>
            {personalProjectsItems.map((item, index) => (
                <ProjectItem key={index} item={item} index={index} />
            ))}
        </>
    );
}

export default PersonalProjectsCards;