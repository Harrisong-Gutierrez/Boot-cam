import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../Button';
import CheckBox from '../CheckBox';

const UserForm = (props) => {
  const {
    formText,
    showCheckBox,
    paragraphText,
    children,
    footerText,
    textHref,
    footerTextLink,
    classboxlogin,
    boxText,
    boxColor,
    boxSize,
    paragraph,
    onSubmit,
  } = props;

  return (
    <div className="UserForm-principal">
      <box className="UserForm-box">
        <section className="UserForm-main">
          <form className="UserForm" onSubmit={onSubmit}>
            <div className="Form-img">
              <Image
                className="UserForm-box-img"
                src="/logo.jpg"
                width={112}
                height={79}
                alt="Picture of the author"
              />
            </div>
            <div className={`${boxColor} ${boxSize}`}>
              <div className={`${classboxlogin}`}>
                <h2 className="BoxUser-text">{boxText}</h2>
              </div>
              <div className="BoxUser-paragraph">
                <p className="BoxUser-paragraph-text">{paragraph}</p>
              </div>
            </div>

            {children}
            <h4 className="UserForm-text">{formText}</h4>
            <div className="UserForm-checkUser">
              {showCheckBox && (
                <CheckBox classColorInput="inputUser" required="true" />
              )}
              <p className="Form-paragraph">{paragraphText}</p>
            </div>
            <Button
              type="submit"
              buttonText="Sign Me Up"
              classColor="buttons-btn-signup-color"
              classSize="buttons-btn-buttons-signup"
            />
            <div className="UserForm-footerText-box">
              <p className="UserForm-footerText-text"> {footerText}</p>
              <a className="UserForm-footerText-text" href={textHref}>
                {footerTextLink}
              </a>
            </div>
          </form>
        </section>
      </box>
    </div>
  );
};

UserForm.propTypes = {
  textHref: PropTypes.string.isRequired,
  footerTextLink: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  formText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  classboxlogin: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  boxText: PropTypes.string.isRequired,
  boxSize: PropTypes.string.isRequired,
  boxColor: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
