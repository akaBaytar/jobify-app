import { useOutletContext, useNavigation, Form } from 'react-router-dom';

import styled from 'styled-components';

import { Row, Button } from '../../components';

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastname, email, location } = user;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' encType='multipart/form-data' className='form'>
        <h4>Profile</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label
              htmlFor='avatar'
              className='form-label'
              style={{ textTransform: 'none' }}>
              Select an image file (max 0.5 MB)
            </label>
            <input
              type='file'
              name='avatar'
              id='avatar'
              accept='image/*'
              className='form-input'
            />
          </div>
          <Row type={'text'} name={'name'} defaultValue={name} />
          <Row type={'text'} name={'lastname'} defaultValue={lastname} />
          <Row type={'email'} name={'email'} defaultValue={email} />
          <Row type={'text'} name={'location'} defaultValue={location} />
          <div className='button-container'>
            <Button
              type={'submit'}
              text={isSubmitting ? 'Submitting...' : 'Submit'}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  h4 {
    margin-block-end: 2rem;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-row {
    margin-block-end: 0;
  }

  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  @media (width >= 768px) {
    .form-center {
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      column-gap: 2rem;
    }

    .button-container {
      height: 68px;
      display: flex;
      align-items: end;

      & > button {
        margin: 0;
      }
    }
  }

  @media (width >= 1120px) {
    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Profile;
