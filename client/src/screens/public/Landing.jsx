import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styled from 'styled-components';

import fetch from '../../helpers/fetch';
import { Logo } from '../../components';
import ILLUSTRATION from '../../assets/svgs/main.svg';

const Landing = () => {
  const navigate = useNavigate();

  const loginAsDemoUser = async () => {
    const data = {
      email: 'demo@mail.com',
      password: 'testuser1234',
    };

    try {
      await fetch.post('/auth/login', data);
      toast.success('Logged in as a Test User successfully.');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <div className='button-container'>
            <Link to={'/register'} className='button'>
              Register
            </Link>
            <Link to={'/login'} className='button'>
              Login
            </Link>
            <Link onClick={loginAsDemoUser} className='button'>
              Explore
            </Link>
          </div>
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

  .main-image {
    display: none;
  }

  .button-container {
    display: flex;
    gap: 1rem;
  }

  .button {
    width: 6rem;
    height: 3rem;
    display: grid;
    place-items: center;
    text-transform: none;
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
