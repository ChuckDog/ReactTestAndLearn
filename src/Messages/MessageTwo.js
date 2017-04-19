import React from 'react';

class MessageTwo extends React.Component {
  render() {
    return (<h3>Message Two (ID: {this.props.match.params.id})</h3>);
  }
}

export default MessageTwo;