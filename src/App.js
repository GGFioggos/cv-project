//import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import CvForm from './components/CvForm';

class App extends Component {
    constructor() {
        super();

        this.state = {
            personalDetails: {
                name: '',
                last_name: '',
                phone: '',
                email: '',
                location: '',
            },
            description: '',
            experience: [],
            education: [],
        };
    }

    render() {
        return (
            <div>
                <Header></Header>
                <CvForm experience={this.state.experience}></CvForm>
            </div>
        );
    }
}
export default App;
