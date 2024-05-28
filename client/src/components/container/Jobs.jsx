import styled from 'styled-components';

import { Job } from '../../components';
import { useJobsContext } from '../../hooks';

const Jobs = () => {
  const { data } = useJobsContext();
  const { jobs } = data;

  if (jobs.length === 0)
    return (
      <Wrapper>
        <h2>There are no jobs to display.</h2>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className='jobs'>
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block-start: 4rem;

  h2 {
    text-transform: none;
  }

  & > h5 {
    font-weight: 600;
    margin-block-end: 1.5rem;
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media (width >= 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;

export default Jobs;
