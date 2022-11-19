import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, inputid, type } = this.props;
        return (
            <div>
                <label htmlFor={inputid} hidden>
                    {title}
                </label>
                <input id={inputid} type={type} placeholder={title}></input>
            </div>
        );
    }
}

export default InputField;
