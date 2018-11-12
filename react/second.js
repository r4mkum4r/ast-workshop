import React from 'react';
import ReactDOM from 'react-dom';

// Second example: A Parent that counts the number of button clicks
// Notice that it re-uses the same Child component above
class CountingParent extends React.Component {
  // This function is only called once
  state = {
    actionCount: 0,
  };

  handleAction = (action) => {
    console.log('Child says', action);
    // Replace actionCount with an incremented value
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  };

  render() {
    return ( <
      div >
      <
      Child onAction = {
        this.handleAction
      }
      /> <
      p > Clicked {
        this.state.actionCount
      }
      times < /p> < /
      div >
    );
  }
}