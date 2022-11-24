import React, { Component } from 'react';

class WorkExperienceDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: this.props.experience,
        };
    }

    render() {
        const { experience } = this.props;

        return (
            <div className="experiencegroup">
                <h2>Work Experience</h2>
                {experience.map((item, index) => {
                    return (
                        <div className="experiencegroup" key={index}>
                            <div className="position">
                                {item.position || 'Position'}
                            </div>
                            <div className="company">
                                {item.company || 'Company'}
                            </div>
                            <div className="startdate">
                                {item.startdate || 'Start Date'}
                            </div>
                            <div className="enddate">
                                {item.enddate || 'End Date'}
                            </div>
                            <div className="description">
                                {item.description || 'Description'}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WorkExperienceDetails;
