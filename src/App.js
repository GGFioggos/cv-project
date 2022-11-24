//import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import CvForm from './components/CvForm';
import CvView from './components/CvView';
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: {
                firstname: '',
                lastname: '',
                title: '',
                location: '',
                phonenumber: '',
                email: '',
                description: '',
            },
            experience: [{}],
            education: [{}],
        };
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <CvForm
                        experience={this.state.experience}
                        education={this.state.education}
                        personalDetails={this.state.personalDetails}
                    ></CvForm>
                    <CvView
                        personalDetails={this.state.personalDetails}
                        experience={this.state.experience}
                        education={this.state.education}
                    ></CvView>
                </div>
            </div>
        );
    }
}
export default App;
