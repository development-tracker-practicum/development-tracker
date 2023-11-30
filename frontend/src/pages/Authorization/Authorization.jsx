import { Link } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import backgroundImage from '../../images/authorizationBackground.jpg';
import './Authorization.sass';

function Authorization({ submitText }) {
  return (
    <main className="content content_authorization">
      <section className="authorization">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="backgroundBlock"
        />
        <AuthForm submitText={submitText} />
        {submitText === 'Регистрация' ? (
          <p className="authorization__footer">
            Уже зарегистрированы?
            <Link to="/signin" className="authorization__footer-link">
              Войти
            </Link>
          </p>
        ) : (
          <p className="authorization__footer">
            Новый пользователь?
            <Link to="/signup" className="authorization__footer-link">
              Зарегистрироваться
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}

export { Authorization };
