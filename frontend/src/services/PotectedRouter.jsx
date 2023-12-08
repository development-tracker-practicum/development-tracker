import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...properties }) {
  const { isLogged } = properties;
  console.log(isLogged);
  return isLogged ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...properties} />
  ) : (
    <Navigate to="/signin" replace />
  );
}

export { ProtectedRoute };
