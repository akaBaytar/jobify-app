import PropTypes from 'prop-types';
import styled from 'styled-components';

const Info = ({ icon, text }) => {
  return (
    <Wraper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </Wraper>
  );
};

Info.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

const Wraper = styled.div`
  display: flex;
  align-items: center;

  .job-icon {
    font-size: 1rem;
    margin-inline-end: 1rem;
    display: flex;
    align-items: center;

    svg {
      color: var(--text-secondary-color);
    }
  }

  .job-text {
    text-transform: capitalize;
  }
`;

export default Info;
