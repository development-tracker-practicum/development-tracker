import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './AuthForm.sass';

function AuthForm({ submitText, onSubmit, children }) {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="auth-form">
      <fieldset className="auth-form__fieldset">
        <h1 className="auth-form__title">Карьерный трек</h1>
        {children}
      </fieldset>
      <Link to="" className="auth-form__forget-password">
        Не помню пароль
      </Link>
      <Button textButton={submitText} type="submit" place="content" />
    </form>
  );
}

export { AuthForm };
