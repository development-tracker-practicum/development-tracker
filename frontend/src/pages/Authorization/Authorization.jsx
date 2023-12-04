import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import backgroundImage from '../../images/authorizationBackground.jpg';
import './Authorization.sass';

function Authorization({ submitText }) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(Context);

  function handleSubmit() {
    navigate('/diary/desk');
    setIsAuthenticated(true);
  }

  return (
    <main className="content content_authorization">
      <section className="authorization">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="backgroundBlock"
        />
        <AuthForm submitText={submitText} onSubmit={handleSubmit} />
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
