import PropTypes from 'prop-types';

const UserInput = (props) => {
  const { value, onChange, labelText, placeholder, laberHtmlFor, idInput } =
    props;
  return (
    <div className="Input-box">
      <label htmlFor={laberHtmlFor} className="Input-label">
        {labelText}
      </label>
      <input
        className="Input-value"
        id={idInput}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
        name="name"
      />
    </div>
  );
};

UserInput.propTypes = {
  idInput: PropTypes.string.isRequired,
  laberHtmlFor: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

UserInput.defaultProps = {
  onChange: () => {},
};

export default UserInput;
