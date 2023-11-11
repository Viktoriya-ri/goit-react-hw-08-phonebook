import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

// RestrictedRoute - обмежений маршрут
export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  // Запобігаємо переходу на редірект за умовою
  // Якщо користувач залогінений, то рендеримо component
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
