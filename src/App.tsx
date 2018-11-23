import * as React from 'react';

import Animate from './lib/Animate';

import './App.css';

type StateType = {
  state: string;
};

class App extends React.Component<{}, StateType> {
  state = {
    state: '',
  };
  handleMouseEnter = () => {
    this.setState({
      state: 'from',
    });
  };

  handleMouseLeave = () => {
    this.setState({
      state: 'to',
    });
  };

  render() {
    return (
      <div className="App" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Animate
          duration={0.3}
          animate={this.state.state}
          from={{ scale: 1.4, repeat: -1, yoyo: true }}
          to={{ scale: 1 }}
          className="ball-wrapper"
        >
          <div className="ball" />
        </Animate>
      </div>
    );
  }
}

export default App;
