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

const Wrapper = styled.article``;

export default Stat;
