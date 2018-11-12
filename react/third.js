import React from 'react';
import ReactDOM from 'react-dom';

// Second example: A Parent that counts the number of button clicks
// Notice that it re-uses the same Child component above
var CountingParent = React.createClass({
  // This function is only called once
  getInitialState: function () {
    return {
      actionCount: 0,
    };
  },
  handleAction: function (action) {
    console.log('Child says', action);
    // Replace actionCount with an incremented value
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  },
  render: function () {
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
  },
});