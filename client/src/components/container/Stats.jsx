import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Stat } from '../../components';

import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarTimes,
} from 'react-icons/fa';

const Stats = ({ stats }) => {
  return (
    <Wrapper>
      <Stat
        title={'pending applications'}
        count={stats?.pending || 0}
        color={'#f59e0b'}
        background={'#fef3c7'}
        icon={<FaCalendarAlt />}
      />
      <Stat
        title={'interviews scheduled'}
        count={stats?.interview || 0}
        color={'#647acb'}
        background={'#e0e8f9'}
        icon={<FaCalendarCheck />}
      />
      <Stat
        title={'jobs declined'}
        count={stats?.declined || 0}
        color={'#d66a6a'}
        background={'#ffeeee'}
        icon={<FaCalendarTimes />}
      />
    </Wrapper>
  );
};

Stats.propTypes = {
  stats: PropTypes.object,
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;

  @media (width >= 768px) {
    grid-template-columns: repeat(2, 1fr);

    article:nth-child(1) {
      grid-column: 1/3;
    }
  }

  @media (width >= 1200px) {
    grid-template-columns: repeat(3, 1fr);

    article:nth-child(1) {
      grid-column: auto;
    }
  }
`;

export default Stats;
