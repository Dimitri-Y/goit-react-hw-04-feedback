import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h3>{title}</h3>
        {children}
      </section>
    );
  }
}
export default Section;
