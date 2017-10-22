import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.refs.personInfo.setNickname("Vladka");
    }, 2000);
    const meetings = [
      ['Take a beer', 'Take a beer with Sergey'],
      ['Church event', 'Conquer Jerusalem'],
    ].map(([title, text]) => (<Meeting title={title} text={text} />));
    this.refs.meetings.addMeetings(meetings);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <PersonInfo ref="personInfo" />
          <Meetings ref="meetings" />
        </div>
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
    return (<ul> {this.state.meetings} </ul>);
  }
}

class Meeting extends Component {
  render() {
    return (
      <div>
        <h5> {this.props.title} </h5>
        <p> {this.props.text} </p>
      </div>
    );
  }
}

export default App;
