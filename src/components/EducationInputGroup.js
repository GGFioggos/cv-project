import React, { Component } from 'react';
import InputField from './InputField';

class EducationInputGroup extends Component {
    render() {
        return (
            <div>
                <InputField
                    title="University Name"
                    inputid="universityname"
                    type="text"
                ></InputField>
                <InputField
                    title="Course / Program"
                    inputid="course"
                    type="text"
                ></InputField>
                <InputField
                    title="Start Date"
                    inputid="startdate"
                    type="text"
                ></InputField>
                <InputField
                    title="End Date"
                    inputid="enddate"
                    type="text"
                ></InputField>
            </div>
        );
    }
}

export default EducationInputGroup;
