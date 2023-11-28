import AuthForm from '../../components/AuthForm/AuthForm';
import './Authorization.sass';
import backgroundImage from '../../Images/authorizationBackground.jpg';
import { Link } from 'react-router-dom';
function Authorization({ submitText }) {
    return (
        <main className="content">
            <section className="authorization">
                <div
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                    className="backgroundBlock"
                ></div>
                <AuthForm submitText={submitText} />
                {submitText === 'Регистрация' ? (
                    <p className="authorization__footer">
                        Уже зарегистрированы?
                        <Link
                            to="/signin"
                            className="authorization__footer-link"
                        >
                            Войти
                        </Link>
                    </p>
                ) : (
                    <p className="authorization__footer">
                        Новый пользователь?
                        <Link
                            to="/signup"
                            className="authorization__footer-link"
                        >
                            Зарегистрироваться
                        </Link>
                    </p>
                )}
            </section>
        </main>
    );
}
export default Authorization;
