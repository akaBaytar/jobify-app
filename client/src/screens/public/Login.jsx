import { Link, Form, useNavigation } from 'react-router-dom';

import styled from 'styled-components';

import { Logo, Row, Button } from '../../components';

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Login</h4>
        <Row type={'text'} name={'email'} autoComplete='email' />
        <Row type={'password'} name={'password'} />
        <Button
          type={'submit'}
          text={isSubmitting ? 'Submitting...' : 'Login'}
          disabled={isSubmitting}
        />
        <p>
          Not a member yet?
          <Link to={'/register'}>Register here.</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  img {
    display: block;
    margin-inline: auto;
    margin-block-end: 1.5rem;
  }

  .form {
    max-width: 500px;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
    margin-block-end: 1.5rem;
    font-size: 1.5rem;
  }

  p {
    text-align: center;
    font-size: 0.85rem;

    a {
      margin-inline-start: 0.25rem;
      color: var(--primary-500);
    }
  }
`;

export default Login;
