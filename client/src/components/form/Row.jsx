import PropTypes from 'prop-types';

const Row = ({
  type,
  name,
  label,
  autoComplete = 'none',
  defaultValue = '',
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {label || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        autoComplete={autoComplete || name}
        placeholder={`Enter ${name}`}
        defaultValue={defaultValue}
        required
        className='form-input'
      />
    </div>
  );
};

Row.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Row;
