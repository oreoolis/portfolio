import './css/projects-separate.css';
import SchoolProjectsCard from '../components/school-projects-card';
import { Container, Row } from 'react-bootstrap';

const SchoolProjects = () => {
    return (
        <div className="project-container">
            <section className="headerText">
                <h1>My School Projects</h1>
                <p>Projects that I have developed for school modules.</p>
                <hr></hr>
            </section>
            <section className="project-card-container">
                <Container fluid className = "justify-content-center">
                    <Row className="g-3">
                        <SchoolProjectsCard />
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default SchoolProjects;