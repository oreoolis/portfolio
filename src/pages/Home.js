import './css/Home.css'

import "bootstrap/dist/css/bootstrap.css"
import { FlipWords } from '../components/flip-words.js';
import ProfileCard from '../components/ProfileCard.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RouteCards from '../components/routeCards.js';



// words array for flipping
const words = ["HTML", "CSS", "Python", "PHP", "React.JS", "Angular", "Google Firebase", "AWS", "MongoDB"];


const Home = () => {

    // open links
    const sendEmail = (subject, body) => {
        const email = 'daao2002@outlook.com';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl);
    }

    const redirectGithub = () => {
        window.location.href = "https://github.com/oreoolis";
    }

    const redirectLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/dwayne-arnold-otero-7693b1213/";
    }

    return (
        <section className="home">
            <section className="text-container">
                <Container fluid className="d-flex align-items-center">
                    <Row className="w-100 g-1">
                        <Col xs={12} lg={8}>
                            <div className='textInfo'>
                                <h1><strong>HELLO!</strong></h1>
                                <h3><strong>I am Dwayne Arnold Otero.</strong></h3>
                                <br></br>
                                <h4>A 2nd year B(Sc) Software Engineering student at Singapore Management University.</h4>
                                <h4>Formerly from Temasek Polytechnic's Diploma in Information Techology.</h4>
                                <h4>My passion lies in creating full stack web applications and front-end development!</h4>
                            </div>
                        </Col>
                        <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center">
                            <ProfileCard
                                className="profileCard"
                                showUserInfo={false}
                                enableTilt={true}
                                enableMobileTilt={true}
                                onContactClick={() => console.log('Contact clicked')}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="skills">
                <h1><strong>My Skills.</strong></h1>
                <h3>
                    <strong>
                        <a className="resumeURL" href="https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/Dwayne_Resume.pdf">
                            Click here to view my full resume!
                        </a>
                    </strong>
                </h3>
                <div className="flipped">
                    <strong>
                        <FlipWords words={words} /> <br />
                    </strong>
                </div>
            </section>


            <section className='text-container-btm'>
                <h1>Explore My Page!</h1>
            </section>

            <section className='containerCards'>
                <RouteCards />
            </section>


            <section className="connect">
                <h1>Interested?</h1>
                <h3>Connect with me!</h3>
                <div class="social-links">
                    <div id="email" className="social-btn flex-center" onClick={() => sendEmail("Hello!", '')} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <span>Email Me</span>
                    </div>

                    <div id="linkedin" className="social-btn flex-center" onClick={redirectLinkedIn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        <span>@Dwayne Otero</span>
                    </div>

                    <div id="github" className="social-btn flex-center" onClick={redirectGithub}>
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        <span>@oreoolis</span>
                    </div>
                </div>
            </section>

        </section>

    );

}

export default Home;