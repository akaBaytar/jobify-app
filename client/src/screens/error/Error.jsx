import { Fragment } from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <h1>
        {error.status} - {error.statusText}
      </h1>
      <Link to={'/'}>Back Home</Link>
    </Fragment>
  );
};

export default Error;
