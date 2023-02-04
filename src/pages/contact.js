import React, { Component, useState } from 'react';
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SocialIcon } from 'react-social-icons';
import { Modal, Button } from 'react-bootstrap';
// import { Tooltip } from 'bootstrap';
// import But from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
{/* <SocialIcon network = "email" bgColor = "#FFFFFF"/> */}
class Contact extends Component {
    

    componentDidMount(){
        Aos.init();
    }

    state = {isOpen: false} 
    openModal = () => this.setState({isOpen: true});
    closeModal = () => this.setState({isOpen: false});
    render() { 
        return (
            <div className = "contactPage">                
                <div className = "header">
                    <div  data-aos = "zoom-in-up" data-aos-duration = "1000" className = "headerText">
                        <h1>Contacts</h1>
                        <hr></hr>
                    </div>
                </div>
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
        );
    }
}
 
export default Contact;