import PropTypes from 'prop-types';
import { FaSearchengin } from 'react-icons/fa';
import Button from '../button';

const UserInput = (props) => {
  const { value, onChange, labelText, placeholder, laberHtmlFor, idInput } =
    props;
  return (
    <div className="Input-box">
      <label htmlFor={laberHtmlFor} className="Input-label">
        {labelText}
      </label>
      <input
        className="Characters-input"
        id={idInput}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
        name="name"
      />
      <Button
        classSize="Button-character-btn"
        type="submit"
        icon={<FaSearchengin />}
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
