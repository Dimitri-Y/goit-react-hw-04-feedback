import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css['button__group']}>
        {options.map(option => (
          <li key={option} className={css['feedbackItem']}>
            <button
              name={option}
              type="button"
              onClick={onLeaveFeedback}
              className={css['']}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default FeedbackOptions;
