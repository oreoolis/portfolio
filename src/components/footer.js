import React, { Component } from 'react';
import './component-css/footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <div className="footerText">
                    <h1>© DWAYNE ARNOLD OTERO 2026</h1>
                    <h1>v2.1.0</h1>
                    <i><b>Developed using React.JS. Images hosted on Amazon AWS S3.</b></i>
                </div>
            </div>
        );
    }
}

export default Footer;