import React from 'react';
import ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';
import './index.css';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bdate: new Date("June 6, 2018 00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  commponentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let now = new Date().getTime();
    let distance = this.state.bdate - now;
    this.setState({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <span className="countdown big">{this.state.days}</span>
          <span className="countdown small">d</span><span className="big"> </span>
          <span className="countdown big">{this.state.hours}</span>
          <span className="countdown small">h</span><span className="big"> </span>
          <span className="countdown big">{this.state.minutes}</span>
          <span className="countdown small">min</span><span className="big"> </span>
          <span className="countdown big">{this.state.seconds}</span>
          <span className="countdown small">s</span><span className="big"> </span>
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
    <CountDown />,
    document.getElementById('root')
);
