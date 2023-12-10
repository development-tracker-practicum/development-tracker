import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import backgroundImage from '../../Images/authorizationBackground.jpg';
import './Authorization.sass';
import { signup, signin, resetStatus } from '../../store/userSlice';
import { useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
function Authorization({ submitText }) {
  const { values, handleChangeInput, isValid, resetForm } =
    useFormAndValidation({
      password: '',
      email: '',
    });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(state => state.user);
  const handleSubmit =
    location.pathname === '/signin' ? handleLogin : handleRegistration;
  function handleLogin() {
    dispatch(
      signin({
        email: values.email,
        password: values.password,
      }),
    );
  }
  async function handleRegistration() {
    dispatch(
      signup({
        email: values.email,
        password: values.password,
        username: values.email,
      }),
    );
  }
  useEffect(() => {
    if (user.status === 'fulfilled' && user.fetch === 'signin') {
      localStorage.setItem('isLogged', 'true');
      navigate('/diary', { replace: true });
      resetForm();
      dispatch(resetStatus());
    }
    if (user.status === 'fulfilled' && user.fetch === 'signup') {
      navigate('/signin', { replace: true });
      resetForm();
      dispatch(resetStatus());
    }
  }, [user]);

  return (
    <main className="content content_authorization">
      <section className="authorization">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="backgroundBlock"
        />
        <AuthForm
          isValid={isValid}
          values={values}
          onChange={handleChangeInput}
          submitText={submitText}
          onSubmit={handleSubmit}
        />
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
