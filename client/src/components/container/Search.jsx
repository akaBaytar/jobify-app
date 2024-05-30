import { Form, useSubmit } from 'react-router-dom';

import styled from 'styled-components';

import { Row, Select } from '../../components';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../../constant';
import { useJobsContext } from '../../hooks';

const Search = () => {
  const submit = useSubmit();

  const { searchValues } = useJobsContext();
  const { search, status, type, sort } = searchValues;

  return (
    <Wrapper>
      <Form className='form'>
        <h4>Search & Filters</h4>
        <div className='form-center'>
          <Row
            type={'search'}
            name={'search'}
            placeholder={'Search...'}
            required={false}
            defaultValue={search}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Select
            label={'job status'}
            name={'status'}
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={status}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Select
            label={'job type'}
            name={'type'}
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={type}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Select
            label={'sorting by'}
            name={'sort'}
            list={Object.values(JOB_SORT_BY)}
            defaultValue={sort}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  h4 {
    font-size: 1.25rem;
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
  }
`;

export default Search;
