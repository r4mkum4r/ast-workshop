import React from 'react';

class InputControl extends React.Component {
  static propTypes = {
    initialValue: React.PropTypes.string
  };

  static defaultProps = {
    initialValue: ''
  };

  componentDidMount() {
    console.log('mounted');
  }
}