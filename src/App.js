import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("comp did Mount");
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    console.log("comp Will UnMount");
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>it is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }

}


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default App;
