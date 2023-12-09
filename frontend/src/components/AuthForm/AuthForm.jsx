import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './AuthForm.sass';

function AuthForm({ submitText, onSubmit, values, onChange }) {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="auth-form">
      <fieldset className="auth-form__fieldset">
        <h1 className="auth-form__title">Карьерный трек</h1>
        <p className="auth-form__subtitle">Войти в аккаунт</p>
        <input
          minLength="2"
          onChange={onChange}
          value={values.email}
          name="email"
          placeholder="Почта"
          type="email"
          className="auth-form__input"
        />
        <input
          minLength="6"
          onChange={onChange}
          value={values.password}
          name="password"
          placeholder="Пароль"
          type="password"
          className="auth-form__input"
        />
      </fieldset>
      <Link to="/forget-password" className="auth-form__forget-password">
        Не помню пароль
      </Link>
      <Button textButton={submitText} type="submit" place="content" />
    </form>
  );
}

export { AuthForm };
