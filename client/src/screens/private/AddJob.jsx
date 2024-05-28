import styled from 'styled-components';
import { Form, useNavigation } from 'react-router-dom';

import { Row, Button, Select } from '../../components';
import { JOB_STATUS, JOB_TYPE } from '../../../../constant';

const AddJob = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Add Job</h4>
        <div className='form-center'>
          <Row type={'text'} name={'position'} />
          <Row type={'text'} name={'company'} />
          <Row type={'text'} name={'location'} />
          <Select
            name={'status'}
            label={'Job Status'}
            list={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
          />
          <Select
            name={'type'}
            label={'Job Type'}
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
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

  @media (width >= 992px) {
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

export default AddJob;
