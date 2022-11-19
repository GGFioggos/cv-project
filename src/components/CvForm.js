import React, { Component } from 'react';
import InputField from './InputField';
import ExperienceInputGroup from './ExperienceInputGroup';

class CvForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: this.props.experience,
            education: this.props.education,
        };

        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);

        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
    }

    addExperience() {
        let joined = this.state.experience.concat(this.state.experience.length);
        this.setState({
            experience: joined,
        });
    }

    addEducation() {
        let joined = this.state.education.concat(this.state.education.length);
        this.setState({
            education: joined,
        });
    }

    removeExperience() {
        let length = this.state.experience.length;
        let removed = this.state.experience.filter(
            (item, index) => index < length - 1
        );
        this.setState({
            experience: removed,
        });
    }

    removeEducation() {
        let length = this.state.education.length;
        let removed = this.state.education.filter(
            (item, index) => index < length - 1
        );
        this.setState({
            education: removed,
        });
    }

    render() {
        return (
            <div className="Cv-box">
                <section className="personal">
                    <form className="personalform">
                        <h2>Personal details</h2>
                        <InputField
                            title="First name"
                            inputid="firstname"
                            type="text"
                        ></InputField>
                        <InputField
                            title="Last name"
                            inputid="lastname"
                            type="text"
                        ></InputField>
                        <InputField
                            title="Title"
                            inputid="title"
                            type="text"
                        ></InputField>
                        <InputField
                            title="Last name"
                            inputid="lastname"
                            type="text"
                        ></InputField>
                        <InputField
                            title="Address"
                            inputid="address"
                            type="text"
                        ></InputField>
                        <InputField
                            title="Phone Number"
                            inputid="phonenumber"
                            type="number"
                        ></InputField>
                        <InputField
                            title="Email"
                            inputid="email"
                            type="email"
                        ></InputField>
                        <textarea
                            placeholder="Description"
                            id="description"
                        ></textarea>
                    </form>
                </section>
                <section className="experience">
                    <h2>Work Experience</h2>
                    {this.state.experience.map((item, index) => {
                        return (
                            <ExperienceInputGroup
                                key={index}
                            ></ExperienceInputGroup>
                        );
                    })}
                    <button type="button" onClick={this.addExperience}>
                        Add
                    </button>
                    {this.state.experience.length !== 0 ? (
                        <button type="button" onClick={this.removeExperience}>
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
                </section>
                <section className="education">
                    <h2>Education</h2>
                    {this.state.education.map((item, index) => {
                        return (
                            <ExperienceInputGroup
                                key={index}
                            ></ExperienceInputGroup>
                        );
                    })}
                    <button type="button" onClick={this.addEducation}>
                        Add
                    </button>
                    {this.state.experience.length !== 0 ? (
                        <button type="button" onClick={this.removeEducation}>
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
                </section>
            </div>
        );
    }
}

export default CvForm;
