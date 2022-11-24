import React, { Component } from 'react';

class ContactDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            img: this.props.img,
        };
    }

    render() {
        const { text, img } = this.state;
        return (
            <div className="contact-details">
                <img src={img} alt="icon"></img>
                <span className="details-text">{text}</span>
            </div>
        );
    }
}

export default ContactDetails;
