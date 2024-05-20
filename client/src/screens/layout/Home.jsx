import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default Home;
