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
          <Button
            type={'submit'}
            text={isSubmitting ? 'Submitting...' : 'Submit'}
            disabled={isSubmitting}
          />
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AddJob;
