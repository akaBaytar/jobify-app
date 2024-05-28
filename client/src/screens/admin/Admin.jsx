import styled from 'styled-components';

import { useLoaderData } from 'react-router-dom';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';

import { Stat } from '../../components';

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <Stat
        title={'current users'}
        count={users}
        color={'#e9b949'}
        background={'#fcefc7'}
        icon={<FaSuitcaseRolling />}
      />
      <Stat
        title={'total jobs'}
        count={jobs}
        color={'#647acb'}
        background={'#e0e8f9'}
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;

  @media (width >= 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Admin;
