import React from 'react';

class MessageOne extends React.Component {

  render() {
    return (<h3>Message One (ID: {this.props.match.params.id})</h3>);
  }
}

export default MessageOne;