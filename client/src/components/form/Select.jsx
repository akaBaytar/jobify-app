import PropTypes from 'prop-types';

const Select = ({ name, label, list, defaultValue = '' }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{label || name}</label>
      <select name={name} id={name} defaultValue={defaultValue}>
        {list?.map((status, index) => (
          <option key={index}>{status}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.array,
  defaultValue: PropTypes.string,
};
export default Select;
