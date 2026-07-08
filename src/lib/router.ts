import { useLocation, useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // route: pathname + hash (e.g. /origin#team)
  const route = `${location.pathname}${location.hash || ''}`;
  const path = location.pathname;

  return { route, path, navigate, location };
};
