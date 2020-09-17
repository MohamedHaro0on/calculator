import React from 'react';
import ButtonsPanel from './Components/ButtonsPanel/ButtonsPanel';
import Display from './Components/DisplayedNumbers/DisplayedNumbers';
import calculate from "./Logic/Calculate";


export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    console.log("The Handle Click is Called" , buttonName) ;
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonsPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
