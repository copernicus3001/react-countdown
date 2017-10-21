import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }       
    }    

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        let liczba = 0;

        if(num >= 0 && num < 10) {
           liczba = '0' + num;
        } else if(num < 0 && num > -10) {
           liczba = '-0' + Math.abs(num);
        } else {
           liczba = num;
        }      

        return liczba;      
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('Time in miliseconds: ', time);
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor((time/(1000*60*60*24)));
        console.log('seconds:', seconds, ' minutes:', minutes, ' hours:', hours, ' days:', days);        
        // this.setState({days: days});
        // this.setState({hours: hours});
        // this.setState({minutes: minutes});
        // this.setState({seconds: seconds});

        this.setState({days, hours, minutes, seconds});
    }

    render() {

        // this.getTimeUntil(this.props.deadline);

        return(
            <div>
                <div className = "App-days">{this.leading0(this.state.days)} day(s)</div>
                <div className = "App-hours">{this.leading0(this.state.hours)} hour(s)</div>
                <div className = "App-minutes">{this.leading0(this.state.minutes)} minute(s)</div>
                <div className = "App-seconds">{this.leading0(this.state.seconds)} second(s)</div>
            </div>
        )
    }
}

export default Clock;