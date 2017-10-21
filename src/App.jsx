import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form,  FormControl, Button } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: '31 December 2017', 
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className = "App">
                <div className = "App-title">countdown to <span>{this.state.deadline}</span></div>
                <Clock deadline = {this.state.deadline}/>
                <Form inline>
                    <FormControl className = "Deadline-input" onChange = {event => this.setState({newDeadline: event.target.value})} placeholder = "new date"/>
                    <Button bsStyle = "danger" onClick = {() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;

