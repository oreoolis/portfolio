import PersonalProjectsCards from "../components/personal-projects.card";
import { Container, Row } from 'react-bootstrap';


const PersonalProjects = () => {
    return(
        <div className = "project-container">
            <section className = "headerText">
                <h1>My Personal Projects</h1>
                <p>Projects where I have used my skills to help others!</p>
                <hr></hr>
            </section>
            <section className = "project-card-container">
                <Container>
                    <Row className="g-5">
                        <PersonalProjectsCards/>
                    </Row>
                </Container>
            </section>
        </div>   
    )
}

export default PersonalProjects;