import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import backgroundImage from '../../Images/authorizationBackground.jpg';
import './Authorization.sass';
<<<<<<< HEAD
<<<<<<< HEAD
import { signup, signin, resetStatus, setUser } from '../../store/userSlice';
import { useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
=======
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
import { signup } from '../../store/userSlice';

>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
function Authorization({ submitText }) {
  const { values, handleChangeInput, isValid, resetForm, errorMessages } =
    useFormAndValidation({
      password: '',
      email: '',
      username: '',
    });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  function handleSubmit() {
    // dispatch(
    //   signup({
    //     email: 'looneyxx2@yandex.ru',
    //     password: 'Crosshair',
    //     username: 'Sergey',
    //   }),
    // );
    dispatch(loginUser());
    navigate('/diary/desk');
    localStorage.setItem('isLogged', 'true');
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
          submitText={submitText}
          onSubmit={handleSubmit}
        >
          <p className="auth-form__subtitle">
            {isItSiginRoute ? 'Войти в аккаунт' : 'Зарегистрироваться'}
          </p>
          <label className="auth-form__label">
            <input
              autoComplete="false"
              onChange={handleChangeInput}
              value={values.email}
              name="email"
              placeholder="Почта"
              type="email"
              className={`auth-form__input  ${
                errorMessages.email && 'auth-form__input_error'
              }  `}
            />
            <span
              className={`auth-form__input-error ${
                errorMessages.email && 'auth-form__input-error_visible'
              }`}
            >
              Введите адрес почты вида Ivan@mail.ru
            </span>
          </label>
          <label className="auth-form__label">
            <input
              autoComplete="false"
              minLength="8"
              maxLength="16"
              onChange={handleChangeInput}
              value={values.password}
              name="password"
              placeholder="Пароль"
              type="password"
              className={`auth-form__input`}
            />
            <span
              className={`auth-form__input-error ${
                errorMessages.password && 'auth-form__input-error_visible'
              }`}
            >
              Введите адрес почты вида Ivan@mail.ru
            </span>
          </label>
          {!isItSiginRoute && (
            <label className="auth-form__label">
              <input
                autoComplete="false"
                minLength="2"
                onChange={handleChangeInput}
                value={values.username}
                name="username"
                placeholder="Имя пользователя"
                type="text"
                className={`auth-form__input`}
              />
              <span
                className={`auth-form__input-error ${
                  errorMessages.username && 'auth-form__input-error_visible'
                }`}
              >
                Введите имя пользователя
              </span>
            </label>
          )}
        </AuthForm>
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
