import { Link, useRouteError } from 'react-router-dom';

import styled from 'styled-components';

import ILLUSTRATION from '../../assets/svgs/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={ILLUSTRATION} alt='404 Not Found' />
          <h3>Page not found</h3>
          <p>We can&apos;t seem to find the page you are looking for.</p>
          <Link to={'/dashboard'} className='button'>
            Back Home
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>An Error Occurred.</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-block-end: 2rem;
    margin-block-start: -3rem;
  }

  h3 {
    margin-block-end: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-block: 1rem;
    color: var(--text-secondary-color);
  }
`;

export default Error;
