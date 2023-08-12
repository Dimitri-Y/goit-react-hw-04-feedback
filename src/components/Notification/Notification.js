import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return (
    <section className="">
      <h1 className="h">{message}</h1>
    </section>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
