import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import cvview from '../styles/cvview.css';

class PersonalDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: this.props.personalDetails,
        };
    }

    render() {
        const { name, title, location, phonenumber, email, description } =
            this.state.personalDetails;

        return (
            <div>
                <h1>{name /*|| 'John Doe' */}</h1>
                <h2>{title || 'Title'}</h2>
                <div className="dedtailsgroup">
                    <ContactDetails
                        text={phonenumber || '6980533174'}
                        img="./phone.svg"
                    ></ContactDetails>
                    <ContactDetails
                        text={email || 'john@doe.com'}
                        img="./email.svg"
                    ></ContactDetails>
                    <ContactDetails
                        text={location || 'London, UK'}
                        img="./location.svg"
                    ></ContactDetails>
                </div>
                <div className="description">
                    {description || 'Description'}
                </div>
            </div>
        );
    }
}

export default PersonalDetails;
