import PropTypes from 'prop-types';

const Button = ({ type, text, disabled }) => {
  return (
    <button type={type} className='button button-block' disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
