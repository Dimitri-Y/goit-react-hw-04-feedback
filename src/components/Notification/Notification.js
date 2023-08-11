import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    const { message } = this.props;
    return (
      <section className="">
        <h1 className="h">{message}</h1>
      </section>
    );
  }
}
export default Notification;
