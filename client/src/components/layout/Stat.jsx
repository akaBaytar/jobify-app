import PropTypes from 'prop-types';
import styled from 'styled-components';

const Stat = ({ count, title, icon, color, background }) => {
  return (
    <Wrapper color={color} background={background}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5>{title}</h5>
    </Wrapper>
  );
};

Stat.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.string,
  background: PropTypes.string,
};

const Wrapper = styled.article`
  padding: 2rem;
  background-color: var(--background-secondary-color);
  border-bottom: 5px solid ${({ color }) => color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h5 {
    margin-block-start: 0.5rem;
    font-size: 1.25rem;
  }

  .count {
    display: block;
    font-weight: 700;
    font-size: 3rem;
    color: ${({ color }) => color};
    line-height: 2;
  }

  .icon {
    width: 4.5rem;
    height: 4.5rem;
    background-color: ${({ background }) => background};
    border-radius: var(--border-radius);

    display: grid;
    place-items: center;

    svg {
      font-size: 2rem;
      color: ${({ color }) => color};
    }
  }
`;

export default Stat;
