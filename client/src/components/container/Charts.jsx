import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useState } from 'react';

import { Area, Bar } from '../../components';

const Charts = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Montly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Display as an Area Chart' : 'Display as a Bar Chart'}
      </button>
      {barChart ? <Bar data={data} /> : <Area data={data} />}
    </Wrapper>
  );
};

Charts.propTypes = {
  data: PropTypes.array,
};

const Wrapper = styled.section`
  margin-block-start: 4rem;
  text-align: center;

  h4 {
    font-size: 2rem;
    text-align: center;
    margin-block-end: 1rem;
  }

  button {
    background-color: transparent;
    border: 1px solid var(--primary-500);
    color: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    margin-block-end: 0.75rem;
    cursor: pointer;
  }
`;

export default Charts;
