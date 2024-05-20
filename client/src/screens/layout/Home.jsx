import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <header>navbar</header>
      <Outlet />
      <footer>footer</footer>
    </Fragment>
  );
};
export default Home;
