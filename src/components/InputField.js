import React, { Component } from 'react';

class InputField extends Component {
    render() {
        const { title, inputid, type, onchange } = this.props;
        return (
            <div>
                <label htmlFor={inputid} hidden>
                    {title}
                </label>
                <input
                    id={inputid}
                    type={type}
                    placeholder={title}
                    onChange={onchange}
                ></input>
            </div>
        );
    }
}

export default InputField;
