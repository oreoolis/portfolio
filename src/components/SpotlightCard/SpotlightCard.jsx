import { useRef } from "react";
import "./SpotlightCard.css";
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

const header = ['Personal Projects', 'School Projects'];
const images = ['https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/clientProjects/hawkrMenuApp/hawkrImg1.png', 'https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/polytechnicProjects/restaurantReview/proj2-1.png']
const routes = ['/personal-projects', '/school-projects'];

const SpotlightCard = ({ className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  const navigate = useNavigate();

  return (
    <>
      {header.map((label, index) => {
        let lgVal = 0;
        if (index === 0) {
          lgVal = 7;
        } else {
          lgVal = 5;
        };
        return (
          <Col xs={12} lg={lgVal}>
            <div
              key={label}
              ref={divRef}
              onMouseMove={handleMouseMove}
              className={`card-spotlight ${className}`}
              style={{backgroundImage: `url(${images[index]})`}}
              onClick={() => navigate(routes[index])}
            >
              <div className="card-content">
                <h1><b>{header[index]}</b></h1>
              </div>
            </div>
          </Col>
        )
      })};
    </>


  );
};

export default SpotlightCard;



