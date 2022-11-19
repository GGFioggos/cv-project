import React, { Component } from 'react';
import InputField from './InputField';

class CvForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: this.props.experience,
            education: this.props.education,
        };
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
                        return <div key={index}>Exp</div>;
                    })}
                    <button type="button">Add</button>
                </section>
            </div>
        );
    }
}

export default CvForm;
