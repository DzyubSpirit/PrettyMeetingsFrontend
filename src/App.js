import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import LoginForm from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="content">
          { !localStorage.getItem('token') 
          ? (<LoginForm />)
          : (<LoggedInContent />)}
        </div>
      </div>
    );
  }
}

class LoggedInContent extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.refs.personInfo.setNickname("Vladka");
    }, 2000);
    const meetings = [
      ['Take a beer', '21.11.13 | 10:30-11:30', 'Take a beer with Sergey'],
      ['Church event', '21.11.13 | 22:00 - 22.11.13 | 6:00', 'Conquer Jerusalem'],
    ].map(([title, timeInterval, text]) => (<Meeting title={title} timeInterval={timeInterval} text={text} />));
    this.refs.meetings.addMeetings(meetings);
  }
  render() {
    return (
      <div class="content">
        <PersonInfo ref="personInfo" />
        <Meetings ref="meetings" />
      </div>
    );
  }
}

class PersonInfo extends Component {
  state = { nickname: 'Loading...' }
  setNickname = (nickname) => {
    this.setState({ nickname });
  }
  render() {
    return (
      <div>{this.state.nickname}</div>
    );
  }
}

class Meetings extends Component {
  state = { meetings: [] }
  addMeetings = (meetings) => {
    this.setState({ meetings: this.state.meetings.concat(meetings) })
  }
  render() {
    return (<div class="meetings"> {this.state.meetings} </div>);
  }
}

class Meeting extends Component {
  render() {
    return (
      <div class="meeting">
        <h5> {this.props.title} </h5>
        <p> {this.props.timeInterval} </p>
        <p> {this.props.text} </p>
      </div>
    );
  }
}

export default App;
