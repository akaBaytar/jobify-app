import PropTypes from 'prop-types';

const Row = ({
  type,
  name,
  label,
  placeholder,
  autoComplete = 'none',
  defaultValue = '',
  required = true,
  onChange,
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
        placeholder={placeholder || `Enter ${name}`}
        defaultValue={defaultValue}
        required={required}
        onChange={onChange}
        className='form-input'
      />
    </div>
  );
};

Row.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default Row;
