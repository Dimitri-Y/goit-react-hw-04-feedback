import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css['stat']}>
      <ul className={css['stat__group']}>
        <li className={css['stat__item']}>
          <span className={css['stat__span']}>Good: {good}</span>
        </li>
        <li className={css['stat__item']}>
          <span className={css['stat__span']}>Neutral: {neutral}</span>
        </li>
        <li className={css['stat__item']}>
          <span className={css['stat__span']}>Bad: {bad}</span>
        </li>
        <li className={css['stat__item']}>
          <span className={css['stat__span']}>Total: {total}</span>
        </li>
        <li className={css['stat__item']}>
          <span className={css['stat__span']}>
            Positive feedback: {positivePercentage} %
          </span>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
