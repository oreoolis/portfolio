import "./component-css/projects-card.css";
import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { schoolProjectItems } from "./project-repository/school-projects-details";

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
  const projectImage = item.image && item.image[0];

  // rendering bootstrap value - a bit smelly need find another way to do this
  const lgVal = index % 2 === 0 ? 7 : 5;
  return (
    <Col xs={12} lg={lgVal}>
      <div className="card">
        <div className="content">
          <div className="project-image-container">
            {projectImage ? (
              <img
                className="project-image"
                src={projectImage}
                alt=""
                aria-hidden="true"
                onClick={() => setModalShow(true)}
              />
            ) : (
              <div className="project-image-placeholder" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.002 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-12 1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm8.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3 11l2.5-3 1.75 2.25 2.5-3.25L13 11z" />
                </svg>
              </div>
            )}
          </div>
          <VerticallyCenteredModal
            item={item}
            show={modalShow}
            dialogClassName="modal-90w"
            onHide={() => setModalShow(false)}
          />
          <div className="card-title">
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
          {/* conditional rendering for github repositories */}
          {item.website && (
            <button
              className="btn-website"
              onClick={() => window.open(item.website, "_blank")}
            >
              Visit The Website
            </button>
          )}
          {item.repo && (
            <button
              className="btn-repo"
              onClick={() => window.open(item.repo, "_blank")}
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
};

export default SchoolProjectsCard;
