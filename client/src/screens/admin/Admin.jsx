import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { FaUsers, FaSuitcase } from 'react-icons/fa6';

import { Stat } from '../../components';
import { adminQuery } from '../../functions/query';

const Admin = () => {
  const { data } = useQuery(adminQuery);

  const { users, jobs } = data;

  return (
    <Wrapper>
      <Stat
        title={'current users'}
        count={users}
        color={'#e9b949'}
        background={'#fcefc7'}
        icon={<FaUsers />}
      />
      <Stat
        title={'total jobs'}
        count={jobs}
        color={'#647acb'}
        background={'#e0e8f9'}
        icon={<FaSuitcase />}
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
