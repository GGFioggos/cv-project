import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header">
                <div className="title">Cv Generator</div>
            </div>
        );
    }
}

export default Header;
