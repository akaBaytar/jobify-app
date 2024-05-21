import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { useDashboardContext } from '../../screens/layout/Dashboard';

const Theme = () => {
  const { darkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {darkTheme ? (
        <BsFillSunFill style={{ color: '#FFA62F' }} />
      ) : (
        <BsFillMoonFill style={{ color: '#535C91' }} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin-block-start: 0.15rem;

  * {
    font-size: 1rem;
  }
`;

export default Theme;
