import { Link } from 'react-router-dom';

import styled from 'styled-components';

import LOGO from '../../assets/images/logo.png';
import ILLUSTRATION from '../../assets/svgs/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={LOGO} alt='Jobify - Job Tracker App' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Jobify is your ultimate companion in the job search journey. Whether
            you&apos;re a recent graduate or a seasoned professional, our app
            helps you stay organized, focused, and proactive in your job hunt.
          </p>
          <Link to={'/register'} className='button register'>
            Register
          </Link>
          <Link to={'/login'} className='button'>
            Login
          </Link>
        </div>
        <img src={ILLUSTRATION} alt='Job hunt' className='image main-image' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-block-start: -3rem;
  }

  h1 {
    font-weight: 700;
    margin-block-end: 1.5rem;

    span {
      color: var(--primary-500);
    }
  }

  p {
    line-height: 1.75;
    color: var(--text-secondary-color);
    margin-block-end: 1.5rem;
    max-width: 35em;
  }

  .register {
    margin-inline-end: 1rem;
  }

  .main-image {
    display: none;
  }

  .button {
    padding: 0.75rem 1.5rem;
  }

  @media (width >= 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }

    .main-image {
      display: block;
    }
  }
`;

export default Landing;
