import React, { Component } from 'react';
import InputField from './InputField';

class ExperienceInputGroup extends Component {
    render() {
        return (
            <div>
                <InputField
                    title="Position"
                    inputid="position"
                    type="text"
                ></InputField>
                <InputField
                    title="Company"
                    inputid="company"
                    type="text"
                ></InputField>
                <InputField
                    title="Position"
                    inputid="position"
                    type="text"
                ></InputField>
                <InputField
                    title="Start date"
                    inputid="startdate"
                    type="text"
                ></InputField>
                <InputField
                    title="End date"
                    inputid="enddate"
                    type="text"
                ></InputField>
                <textarea placeholder="Description"></textarea>
            </div>
        );
    }
}

export default ExperienceInputGroup;
