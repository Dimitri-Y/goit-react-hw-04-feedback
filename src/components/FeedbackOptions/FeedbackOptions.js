import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
