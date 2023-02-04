import React, { Component } from 'react';
import './Home.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SocialIcon } from 'react-social-icons';
import { Modal, Button } from 'react-bootstrap';
// import { Tooltip } from 'bootstrap';
// import But from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"

class Home extends Component {

    componentDidMount(){
        Aos.init();
    }

    state = {isOpen: false} 
    openModal = () => this.setState({isOpen: true});
    closeModal = () => this.setState({isOpen: false});
    render() { 
        return (
            <div data-aos="zoom-in" data-aos-duration="500" className = "homePage">
                {/* <div className = "banner">
                    <div className = "heroText"> */}
                        <div className = "bannerText">
                            <h1>Hello!</h1>
                            <h2>Welcome to my personal website.</h2>
                            <hr></hr>
                            <h5>This website is to show you more about me and the different things I have achieved.</h5>
                            <h5>To learn more, click on the tabs at the top on the website.</h5>
                            <p>This portfolio website was developed using React.js and is running on a local host under Node.js.</p>
                            <i>Contains no database functionalities and is purely for showcase purposes.</i>
                            <div className = "socialIcons" div data-aos = "flip-up" data-aos-duration = "1500">
                                <SocialIcon url = "https://www.linkedin.com/in/dwayne-otero-7693b1213/" bgColor = "#0a66c2"/>
                                <SocialIcon network = "email"  url = "#" bgColor = "#FFFFFF" onClick={this.openModal}/>
                                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>My Email!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>You can reach me at <b>daao2002@outlook.com</b>.</Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="primary" onClick={this.closeModal}>
                                        Got it!
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        
                    {/* </div>
                    
                 </div> */}

            </div>

        );
    }
}
 
export default Home;