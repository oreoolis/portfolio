import './css/Projects.css'
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Projects = () => {

    return (
        <div className="projects" >
            <section className="headerText">
                <h1>Projects</h1>
                <p>All non-academic and academic projects.</p>
                <hr></hr>
            </section>
            <section className="card-container">
                <Container>
                    <Row className="g-1">
                        <SpotlightCard spotlightColor="rgba(0, 255, 191, 0.2)"/>
                    </Row>
                </Container>
            </section>
        </div>
    );

}

export default Projects;