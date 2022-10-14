import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
