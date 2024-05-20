import PropTypes from 'prop-types';

const Button = ({ type, text }) => {
  return (
    <button type={type} className='button button-block'>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
