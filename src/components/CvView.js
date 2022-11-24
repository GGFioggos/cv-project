import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import WorkExperienceDetails from './WorkExperienceDetails';

// GETS ARRAY OF EXP AND EDU
class CvView extends Component {
    // PROPS = PERSONALDETAILS
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: this.props.personalDetails,
            experience: this.props.experience,
            education: this.props.education,
        };
    }

    render() {
        return (
            <div className="cv-view">
                <PersonalDetails
                    personalDetails={this.state.personalDetails}
                ></PersonalDetails>
                <WorkExperienceDetails
                    experience={this.state.experience}
                ></WorkExperienceDetails>
            </div>
        );
    }
}

export default CvView;
